import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './PageLoader.css';

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // Hide loader soon after progress completes instead of waiting 2 seconds
                    setTimeout(() => setIsLoading(false), 200);
                    return 100;
                }
                return prev + 15; // Faster steps
            });
        }, 50); // Faster interval

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="page-loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="loader-content">
                        {/* Rocket Animation */}
                        <motion.div
                            className="loader-rocket"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                🚀
                            </motion.div>

                            {/* Flame */}
                            <motion.div
                                className="loader-flame"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.8, 0.5, 0.8],
                                }}
                                transition={{
                                    duration: 0.3,
                                    repeat: Infinity,
                                }}
                            >
                                🔥
                            </motion.div>
                        </motion.div>

                        {/* Loading Text */}
                        <motion.div
                            className="loader-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <h2>Launching Portfolio</h2>
                            <div className="progress-bar">
                                <motion.div
                                    className="progress-fill"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <p className="progress-text">{progress}%</p>
                        </motion.div>

                        {/* Orbiting Stars */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="orbit-star"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                }}
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                    ease: "linear",
                                }}
                            >
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        top: -120 - i * 10,
                                        fontSize: `${1.5 - i * 0.1}rem`,
                                    }}
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                    }}
                                >
                                    ✨
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
