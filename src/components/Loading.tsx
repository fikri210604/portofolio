/**
 * Loading.tsx — 8-Bit Loading Screen
 *
 * Adapted from the 21st.dev / shadcn "8bit-loading-screen" component
 * for this Astro 5 + React 19 + Tailwind CSS v4 project.
 *
 * Key behaviors:
 *  - Mounts as a fixed fullscreen overlay on first page load / refresh
 *  - Auto-fills the progress bar, then fades out and unmounts itself
 *  - Uses AnimatePresence (framer-motion, already installed) for smooth exit
 *  - No shadcn/cn utility, no external 8bit-progress dependency
 *  - Uses the project's existing CSS custom properties (--space-black, --zinc-*)
 */

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Loading.css';

// ── Default tips ────────────────────────────────────────────────────────────

const DEFAULT_TIPS = [
    'Initializing portfolio...',
    'Loading projects & experience...',
    'Mounting components...',
    'Almost ready — hang tight!',
    'Pro tip: Scroll slowly to catch every detail.',
];

// ── Types ────────────────────────────────────────────────────────────────────

export interface LoadingScreenProps {
    className?: string;
    title?: string;
    tips?: string[];
    progress?: number;
    showPercentage?: boolean;
    tipInterval?: number;
    variant?: 'default' | 'fullscreen';
    autoProgress?: boolean;
    autoProgressDuration?: number;
    onComplete?: () => void;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function LoadingScreen({
    className,
    title = 'LOADING',
    tips = DEFAULT_TIPS,
    progress = 0,
    showPercentage = true,
    tipInterval = 2500,
    variant = 'default',
    autoProgress = false,
    autoProgressDuration = 2800,
    onComplete,
}: LoadingScreenProps) {
    const [currentTipIndex, setCurrentTipIndex] = useState(0);
    const [showCursor, setShowCursor]           = useState(true);
    const [internalProgress, setInternalProgress] = useState(
        autoProgress ? 0 : progress,
    );
    // Controls whether the overlay is visible (AnimatePresence uses this)
    const [isVisible, setIsVisible] = useState(true);

    // ── Auto-progress ──────────────────────────────────────────────────────
    useEffect(() => {
        if (!autoProgress) {
            setInternalProgress(progress);
            return;
        }

        setInternalProgress(0);
        const STEP        = 5;
        const steps       = 100 / STEP;
        const intervalTime = autoProgressDuration / steps;

        const timer = setInterval(() => {
            setInternalProgress((prev) => {
                const next = prev + STEP;
                if (next >= 100) {
                    clearInterval(timer);
                    // Short pause at 100% before fading out
                    setTimeout(() => {
                        setIsVisible(false);
                        onComplete?.();
                    }, 400);
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [autoProgress, autoProgressDuration, progress, onComplete]);

    // ── Tip rotation ───────────────────────────────────────────────────────
    useEffect(() => {
        if (tips.length === 0) return;
        const tipTimer = setInterval(() => {
            setCurrentTipIndex((prev) => (prev + 1) % tips.length);
        }, tipInterval);
        return () => clearInterval(tipTimer);
    }, [tips, tipInterval]);

    // ── Cursor blink ───────────────────────────────────────────────────────
    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);
        return () => clearInterval(cursorTimer);
    }, []);

    const displayProgress = autoProgress ? internalProgress : progress;
    const isFullscreen    = variant === 'fullscreen';

    // ── Inner content ──────────────────────────────────────────────────────
    const content = (
        <div className="loading-inner">
            {/* Title */}
            <h2 className="retro-text loading-title">
                {title}
                <span
                    className="loading-cursor"
                    style={{ opacity: showCursor ? 1 : 0 }}
                    aria-hidden="true"
                />
            </h2>

            {/* Progress bar */}
            <div className="loading-progress-section">
                {showPercentage && (
                    <div className="loading-percent">
                        <span className="loading-percent-label">
                            {Math.round(displayProgress)}%
                        </span>
                    </div>
                )}

                <div
                    className="retro-progress-track"
                    role="progressbar"
                    aria-valuenow={Math.round(displayProgress)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${title} progress`}
                >
                    <div
                        className="retro-progress-fill"
                        style={{ width: `${displayProgress}%` }}
                    />
                </div>
            </div>

            {/* Tips */}
            {tips.length > 0 && (
                <div className="loading-tips-section">
                    <p className="loading-tip-text">
                        {tips[currentTipIndex]}
                    </p>
                </div>
            )}
        </div>
    );

    // ── Render with AnimatePresence exit animation ─────────────────────────
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="loading-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={[
                        isFullscreen ? 'loading-fullscreen' : 'loading-default',
                        className ?? '',
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    aria-live="polite"
                    aria-busy={displayProgress < 100}
                >
                    {content}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
