import { useEffect, useRef, useState } from 'react';
import './StarField.css';

export default function StarField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
        if (!ctx) return;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        // Greatly reduced star count for performance
        const starCount = isMobile ? 30 : 100;
        const stars: Array<{ x: number; y: number; radius: number; opacity: number; twinkleSpeed: number }> = [];

        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.2,
                opacity: Math.random(),
                twinkleSpeed: Math.random() * 0.008 + 0.003,
            });
        }

        let scrollY = 0;
        let animationId: number;
        let ticking = false;

        const handleScroll = () => {
            scrollY = window.scrollY;
        };

        const throttledScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });

        let lastTime = performance.now();
        const fpsLimit = isMobile ? 30 : 60;
        const fpsInterval = 1000 / fpsLimit;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - lastTime;

            if (elapsed > fpsInterval) {
                lastTime = currentTime - (elapsed % fpsInterval);

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                stars.forEach((star) => {
                    const parallaxY = (star.y - scrollY * 0.2) % canvas.height;
                    const y = parallaxY < 0 ? parallaxY + canvas.height : parallaxY;

                    star.opacity += star.twinkleSpeed;
                    if (star.opacity > 1 || star.opacity < 0.3) {
                        star.twinkleSpeed *= -1;
                    }

                    ctx.beginPath();
                    ctx.arc(star.x, y, star.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                    ctx.fill();
                });
            }

            animationId = requestAnimationFrame(animate);
        };

        animate(performance.now());

        const handleResize = () => {
            setCanvasSize();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', throttledScroll);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, [isMobile]);

    return <canvas ref={canvasRef} className="star-field" />;
}
