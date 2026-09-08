"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FiRewind as Rewind, FiFastForward as FastForward } from "react-icons/fi";

export interface CarouselItem {
  id: number | string;
  title: string;
  category?: string;
  icon?: React.ElementType;
}

// Create infinite items by triplicating the array
const createInfiniteItems = (originalItems: CarouselItem[]) => {
  const items: Array<CarouselItem & { originalIndex: number }> = [];
  for (let i = 0; i < 3; i++) {
    originalItems.forEach((item, index) => {
      items.push({
        ...item,
        id: `${i}-${item.id}`,
        originalIndex: index,
      });
    });
  }
  return items;
};

const RulerLines = ({
  top = true,
  totalLines = 50,
  onClick,
}: {
  top?: boolean;
  totalLines?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  const lines = [];
  const lineSpacing = 100 / (totalLines - 1);

  for (let i = 0; i < totalLines; i++) {
    const isFifth = i % 5 === 0;
    const isCenter = i === Math.floor(totalLines / 2);

    let height = "h-2.5";
    let color = "bg-neutral-800";

    if (isCenter) {
      height = "h-6";
      color = "bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.9)]";
    } else if (isFifth) {
      height = "h-3.5";
      color = "bg-neutral-600";
    }

    const positionClass = top ? "top-0" : "bottom-0";

    lines.push(
      <div
        key={i}
        className={`absolute w-[1.5px] ${height} ${color} ${positionClass} transition-all pointer-events-none`}
        style={{ left: `${i * lineSpacing}%` }}
      />
    );
  }

  return (
    <div
      onClick={onClick}
      className="relative w-full max-w-3xl h-8 px-4 mx-auto cursor-pointer select-none group"
      title="Click left/right to navigate"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      {lines}
    </div>
  );
};

export function RulerCarousel({
  originalItems,
  autoplay = true,
  autoplayInterval = 3000,
}: {
  originalItems: CarouselItem[];
  autoplay?: boolean;
  autoplayInterval?: number;
}) {
  const infiniteItems = createInfiniteItems(originalItems);
  const itemsPerSet = originalItems.length;

  // Start with middle set (index = itemsPerSet)
  const defaultIndex = itemsPerSet;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [isResetting, setIsResetting] = useState(false);
  const [itemWidth, setItemWidth] = useState(420);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Responsive item width calculation
  useEffect(() => {
    const updateWidth = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setItemWidth(290);
      } else if (window.innerWidth < 1024) {
        setItemWidth(360);
      } else {
        setItemWidth(420);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleNext = useCallback(() => {
    if (isResetting) return;
    setActiveIndex((prev) => {
      const next = prev + 1;
      if (next >= itemsPerSet * 2) {
        setTimeout(() => {
          setIsResetting(true);
          setActiveIndex(next - itemsPerSet);
          setTimeout(() => setIsResetting(false), 50);
        }, 340);
      }
      return next;
    });
  }, [isResetting, itemsPerSet]);

  const handlePrevious = useCallback(() => {
    if (isResetting) return;
    setActiveIndex((prev) => {
      const next = prev - 1;
      if (next < itemsPerSet) {
        setTimeout(() => {
          setIsResetting(true);
          setActiveIndex(next + itemsPerSet);
          setTimeout(() => setIsResetting(false), 50);
        }, 340);
      }
      return next;
    });
  }, [isResetting, itemsPerSet]);

  // Direct click handler on any visible tech card
  const handleItemClick = useCallback(
    (clickedIndex: number) => {
      if (isResetting) return;
      setActiveIndex(clickedIndex);

      if (clickedIndex < itemsPerSet) {
        setTimeout(() => {
          setIsResetting(true);
          setActiveIndex(clickedIndex + itemsPerSet);
          setTimeout(() => setIsResetting(false), 50);
        }, 340);
      } else if (clickedIndex >= itemsPerSet * 2) {
        setTimeout(() => {
          setIsResetting(true);
          setActiveIndex(clickedIndex - itemsPerSet);
          setTimeout(() => setIsResetting(false), 50);
        }, 340);
      }
    },
    [isResetting, itemsPerSet]
  );

  // Resettable autoplay loop: runs automatically and resets its 3s delay whenever clicked
  const resetAutoplayTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (autoplay) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, autoplayInterval);
    }
  }, [autoplay, autoplayInterval, handleNext]);

  useEffect(() => {
    resetAutoplayTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoplayTimer]);

  // Action triggers that seamlessly advance/reverse AND reset the autoplay countdown
  const onCardClick = (index: number) => {
    handleItemClick(index);
    resetAutoplayTimer();
  };

  const onPrevClick = () => {
    handlePrevious();
    resetAutoplayTimer();
  };

  const onNextClick = () => {
    handleNext();
    resetAutoplayTimer();
  };

  // Clicking on the ruler lines: click left to go previous, click right to go next
  const onRulerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX > rect.width / 2) {
      handleNext();
    } else {
      handlePrevious();
    }
    resetAutoplayTimer();
  };

  // Center alignment: places active item midpoint directly on the 50% center axis
  const targetX = -(activeIndex * itemWidth + itemWidth / 2);

  const currentPage = (activeIndex % itemsPerSet) + 1;
  const totalPages = itemsPerSet;

  return (
    <div className="w-full flex flex-col items-center justify-center bg-transparent py-4 select-none">
      <div className="w-full flex flex-col justify-center relative">
        {/* Top Interactive Ruler Line */}
        <div className="flex items-center justify-center w-full">
          <RulerLines top onClick={onRulerClick} />
        </div>

        {/* Sliding Carousel Track Viewport */}
        <div
          className="relative w-full h-[190px] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <motion.div
            className="absolute top-0 bottom-0 flex items-center"
            style={{
              left: "50%",
            }}
            animate={{
              x: targetX,
            }}
            transition={
              isResetting
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: 240,
                    damping: 25,
                    mass: 0.9,
                  }
            }
          >
            {infiniteItems.map((item, index) => {
              const isActive = index === activeIndex;
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => onCardClick(index)}
                  className={`cursor-pointer flex flex-col items-center justify-center gap-2.5 transition-all outline-none ${
                    isActive
                      ? "text-white"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                  animate={{
                    scale: isActive ? 1 : 0.78,
                    opacity: isActive ? 1 : 0.25,
                  }}
                  transition={
                    isResetting
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: 350,
                          damping: 26,
                        }
                  }
                  style={{
                    width: `${itemWidth}px`,
                    flexShrink: 0,
                  }}
                >
                  {/* Category Indicator Tag */}
                  <span
                    className={`text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                      isActive
                        ? "text-indigo-400 opacity-100 transform translate-y-0"
                        : "text-transparent opacity-0 transform -translate-y-1"
                    }`}
                  >
                    // {item.category || "TECH STACK"}
                  </span>

                  {/* Icon & Title Row */}
                  <div className="flex items-center justify-center gap-3">
                    {Icon && (
                      <Icon
                        className={`text-3xl sm:text-4xl md:text-5xl transition-all duration-300 ${
                          isActive
                            ? "text-indigo-400 drop-shadow-[0_0_16px_rgba(129,140,248,0.7)]"
                            : "text-neutral-600"
                        }`}
                      />
                    )}
                    <span
                      className={`text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight whitespace-nowrap font-heading transition-all duration-300 ${
                        isActive
                          ? "text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.3)]"
                          : "text-neutral-500"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Interactive Ruler Line */}
        <div className="flex items-center justify-center w-full">
          <RulerLines top={false} onClick={onRulerClick} />
        </div>
      </div>

      {/* Navigation Controls & Pagination Counter */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={onPrevClick}
          disabled={isResetting}
          className="flex items-center justify-center p-2.5 rounded-full border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all cursor-pointer disabled:opacity-40"
          aria-label="Previous tech"
        >
          <Rewind className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm">
          <span className="text-sm font-mono font-semibold text-indigo-400">
            {currentPage < 10 ? `0${currentPage}` : currentPage}
          </span>
          <span className="text-xs font-mono text-neutral-600">/</span>
          <span className="text-xs font-mono text-neutral-400">
            {totalPages < 10 ? `0${totalPages}` : totalPages}
          </span>
        </div>

        <button
          onClick={onNextClick}
          disabled={isResetting}
          className="flex items-center justify-center p-2.5 rounded-full border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all cursor-pointer disabled:opacity-40"
          aria-label="Next tech"
        >
          <FastForward className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
