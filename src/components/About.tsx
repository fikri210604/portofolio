import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import unilaImg from "../assets/unila.webp";
import "./About.css";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  return (
    <section id="about" className="about-editorial" ref={ref}>
      <div className="about-container">
        {/* Section Header Micro-Label */}
        <motion.div
          className="about-section-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <span className="section-mono-tag">01. PROFILE & PHILOSOPHY</span>
          <h2 className="about-display-title">
            Engineering with Purpose, Precision, and Pragmatism.
          </h2>
        </motion.div>

        {/* Editorial 2-Column Composition */}
        <div className="about-grid">
          {/* Left Column: Core Statement & Bio */}
          <motion.div
            className="about-left-col"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.p className="about-lead-paragraph" variants={fadeInUp}>
              I am a Computer Science undergraduate at <strong>Universitas Lampung (Semester 6)</strong>, dedicated to building high-performance web systems, resilient REST APIs, and applied machine learning applications.
            </motion.p>

            <motion.p className="about-body-paragraph" variants={fadeInUp}>
              My engineering approach prioritizes <em>Clean Architecture</em>, modular boundaries, and verifiable system stability. Rather than chasing superficial design trends, I focus on solving multidimensional data challenges—such as spatiotemporal utility telemetry, automated information extraction, and scalable enterprise workflows.
            </motion.p>

            <motion.p className="about-body-paragraph" variants={fadeInUp}>
              Alongside software development, I actively mentor junior developers as a Teaching Assistant across multiple computer science subjects, reinforcing core principles of object-oriented design (SOLID), data structures, and client-server systems.
            </motion.p>

            <motion.div className="about-action-row" variants={fadeInUp}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link-button"
              >
                Inspect Curriculum Vitae
                <svg className="w-4 h-4 ml-1.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Metadata & Evidence Cards */}
          <motion.div
            className="about-right-col"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {/* Academic Card */}
            <motion.div className="about-meta-card" variants={fadeInUp}>
              <div className="meta-card-header">
                <img src={unilaImg.src} alt="Unila" className="meta-card-icon" />
                <div>
                  <span className="card-micro-label">FORMAL EDUCATION</span>
                  <h4 className="card-title">S1 Ilmu Komputer</h4>
                </div>
              </div>
              <p className="card-desc">
                Universitas Lampung, 6th Semester (2023 – Present). Focus in Software Engineering, Algorithms & Machine Intelligence.
              </p>
            </motion.div>

            {/* Quick Metrics Grid */}
            <motion.div className="about-stats-grid" variants={fadeInUp}>
              <div className="stat-box">
                <span className="stat-num">9+</span>
                <span className="stat-text">Completed Projects</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">4</span>
                <span className="stat-text">Courses Assisted</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">3+</span>
                <span className="stat-text">Years Building</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">100%</span>
                <span className="stat-text">Evidence Driven</span>
              </div>
            </motion.div>

            {/* Location & Status */}
            <motion.div className="about-meta-card location-card" variants={fadeInUp}>
              <span className="card-micro-label">LOCATION & TIMEZONE</span>
              <p className="location-text">
                Kedaton, Bandar Lampung, Indonesia <span className="text-zinc-500">(UTC+7 / WIB)</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
