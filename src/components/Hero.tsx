import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import GradientText from './elements/GradientText';
import BlurText from './elements/BlurText';
import './Hero.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
        },
    },
};

const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
        },
    },
};

export default function Hero() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="home" className="hero">

            <motion.div
                className="hero-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="hero-greeting" variants={itemVariants}>
                    <span className="wave">👋</span> Hi, I'm
                </motion.div>

                <motion.div className="hero-title" variants={itemVariants} style={{ display: 'flex', justifyContent: 'center' }}>
                    <GradientText
                        colors={["#5227FF","#FF9FFC","#B19EEF"]}
                        animationSpeed={8}
                        showBorder={false}
                        className="inline-block"
                    >
                        Fikri
                    </GradientText>
                </motion.div>

                <motion.div className="hero-subtitle-container" variants={itemVariants}>
                    <h2 className="hero-subtitle">
                        <span className="gradient-text">
                            <GradientText
                                colors={["#5227FF","#FF9FFC","#B19EEF"]}
                                animationSpeed={8}
                                showBorder={false}
                                className="inline-block"
                            >
                                Full Stack Developer
                            </GradientText>
                        </span>
                    </h2>
                    <p className="hero-tagline">
                        Building amazing digital experiences with modern technologies
                    </p>
                </motion.div>

                <motion.p className="hero-description" variants={itemVariants}>
                    Passionate about creating interactive, accessible, and scalable web
                    applications that make a difference. Specialized in React, TypeScript,
                    and modern web technologies.
                </motion.p>

                <motion.div className="hero-buttons" variants={itemVariants}>
                    <button
                        className="cosmic-button"
                        onClick={() => scrollToSection('projects')}
                    >
                        View My Work
                    </button>
                    <button
                        className="cosmic-button cosmic-button-outline"
                        onClick={() => window.open('/resume.pdf', '_blank')}
                    >
                        View My Resume
                    </button>
                </motion.div>

                <motion.div
                    className="hero-scroll-indicator"
                    variants={itemVariants}
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <div className="scroll-line" />
                    <span className="scroll-text">Scroll Down</span>
                </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
                className="hero-floating-element element-1"
                animate={{
                    y: [0, -40, 0],
                    x: [0, 30, 0],
                    rotate: [0, 15, -10, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="floating-icon rocket-icon">
                    🚀
                    <motion.div
                        className="rocket-exhaust"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.8, 0.4, 0.8],
                        }}
                        transition={{
                            duration: 0.3,
                            repeat: Infinity,
                        }}
                    >
                        💨
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="hero-floating-element element-2"
                animate={{
                    y: [0, 40, 0],
                    rotate: [0, -15, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <motion.div
                    className="floating-icon"
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    ⭐
                </motion.div>
            </motion.div>

            <motion.div
                className="hero-floating-element element-3"
                animate={{
                    y: [0, -30, 0],
                    x: [0, -20, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <motion.div
                    className="floating-icon"
                    animate={{
                        rotate: [0, -360],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    🌙
                </motion.div>
            </motion.div>

            {/* Additional shooting star */}
            <motion.div
                className="hero-floating-element element-4"
                animate={{
                    x: [-100, typeof window !== 'undefined' ? window.innerWidth + 100 : 2000],
                    y: [0, 100],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeIn",
                }}
            >
                <div className="floating-icon">💫</div>
            </motion.div>
        </section>
    );
}
