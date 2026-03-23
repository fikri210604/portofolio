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
                    setTimeout(() => setIsLoading(false), 500);
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
                        {/* Launch Track */}
                        <div className="launch-track">
                            <motion.div 
                                className="track-line"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                            
                            {/* Traveling Rocket */}
                            <motion.div
                                className="loader-rocket"
                                style={{ 
                                    left: `${progress}%`,
                                    x: '-50%' 
                                }}
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [1, -1, 1],
                                    }}
                                    transition={{
                                        duration: 1.5,
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
                                
                                {/* Stardust trail */}
                                <div className="stardust-trail">
                                    {[...Array(3)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            animate={{
                                                x: [-10, -30],
                                                opacity: [1, 0],
                                                scale: [1, 0.5],
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                            }}
                                        >
                                            ✨
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Loading Text */}
                        <motion.div
                            className="loader-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <h2>Launching Portfolio</h2>
                            <div className="progress-bar-container">
                                <div className="progress-bar">
                                    <motion.div
                                        className="progress-fill"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                                <p className="progress-text">{progress}%</p>
                            </div>
                        </motion.div>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
