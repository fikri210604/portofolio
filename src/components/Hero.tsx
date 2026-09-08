import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef } from 'react';
import profileImg from '../assets/profile.webp';
import './Hero.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-editorial" ref={heroRef}>
      {/* Atmospheric blur orbs — Syed Moinuddin style */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="hero-badge-wrapper">
          <div className="hero-status-pill">
            <span className="radar-container">
              <span className="radar-ping"></span>
              <span className="radar-dot"></span>
            </span>
            <span className="status-label">AVAILABLE FOR NEW OPPORTUNITIES</span>
          </div>
        </motion.div>

        {/* Typography & Overlapping Portrait Stage */}
        <motion.div variants={itemVariants} className="hero-stage">
          {/* Oversized Background/Foreground Name */}
          <h1 className="hero-giant-name">
            AHMAD<br />FIKRI HANIF
          </h1>

          {/* Overlapping Grayscale Portrait */}
          <motion.div
            className="hero-overlapping-portrait"
            style={{
              scale: photoScale,
              opacity: photoOpacity,
            }}
          >
            <img
              src={profileImg.src}
              alt="Ahmad Fikri Hanif"
              className="portrait-img"
              width={220}
              height={290}
              fetchPriority="high"
            />
            <div className="portrait-border-glow"></div>
          </motion.div>
        </motion.div>

        {/* Role & Engineering Positioning */}
        <motion.div variants={itemVariants} className="hero-positioning">
          <h2 className="hero-role-tag">
            Computer Science Student <span className="meta-dot">·</span> Software Engineer
          </h2>
          <p className="hero-statement">
            Building practical web systems, robust REST APIs, and applied machine learning solutions with clean architecture.
          </p>
        </motion.div>

        {/* Clean Action Buttons */}
        <motion.div variants={itemVariants} className="hero-cta-row">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary-editorial"
          >
            Explore Projects
            <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-outline-editorial"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Metadata Footer Strip */}
        <motion.div variants={itemVariants} className="hero-meta-strip">
          <div className="meta-col">
            <span className="meta-label">LOCATION</span>
            <span className="meta-value">Lampung, Indonesia</span>
          </div>
          <div className="meta-divider"></div>
          <div className="meta-col">
            <span className="meta-label">FOCUS</span>
            <span className="meta-value">Fullstack & Applied AI</span>
          </div>
          <div className="meta-divider"></div>
          <div className="meta-col">
            <span className="meta-label">EDUCATION</span>
            <span className="meta-value">Universitas Lampung (Sem 7)</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}