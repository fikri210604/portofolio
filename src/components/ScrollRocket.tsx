import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import './ScrollRocket.css';

export default function ScrollRocket() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();

    // Transform scroll progress to rocket position
    const rocketY = useTransform(scrollYProgress, [0, 1], ['100vh', '-100vh']);
    const rocketRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, -5]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            className="scroll-rocket"
            style={{
                y: rocketY,
                rotate: rocketRotate,
                opacity: opacity,
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="rocket-body">
                <div className="rocket-flame">
                    <div className="flame-inner"></div>
                </div>
                🚀
            </div>

            {/* Trail particles */}
            <motion.div
                className="rocket-trail"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 0.3, 0.8],
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                ✨
            </motion.div>
        </motion.div>
    );
}
