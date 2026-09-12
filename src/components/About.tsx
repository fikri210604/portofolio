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
              Computer Science student at <strong>Universitas Lampung (August 2023 – Present)</strong> with a strong interest in software development, data, and building practical technology solutions.
            </motion.p>

            <motion.p className="about-body-paragraph" variants={fadeInUp}>
              Experienced in developing web-based and data-driven applications, while also serving as a <strong>Teaching Assistant</strong> for computer science courses, <strong>Tutor at SMA Al Kautsar</strong>, and student organization leader as <strong>Head of External Relations &amp; Media Commission at DPM FMIPA</strong>.
            </motion.p>

            <motion.p className="about-body-paragraph" variants={fadeInUp}>
              I enjoy learning by building, understanding real-world problems, and turning ideas into useful solutions through technology. My approach focuses on practical workflows, clean architecture, and verifiable data integrity.
            </motion.p>

            {/* Achievements Strip */}
            <motion.div className="about-achievements-box" variants={fadeInUp}>
              <span className="card-micro-label">HONORS &amp; ACHIEVEMENTS</span>
              <ul className="about-achievements-list">
                <li>
                  <span className="achievement-badge">2026</span>
                  <span>Bank Indonesia Scholarship Awardee — GenBI Universitas Lampung</span>
                </li>
                <li>
                  <span className="achievement-badge">2025</span>
                  <span>2nd Place — MTQM Dies Natalis FMIPA Universitas Lampung</span>
                </li>
                <li>
                  <span className="achievement-badge">2024</span>
                  <span>3rd Place — MTQM Dies Natalis FMIPA Universitas Lampung</span>
                </li>
              </ul>
            </motion.div>

            <motion.div className="about-action-row" variants={fadeInUp}>
              <a
                href="mailto:afh.fikri2106@gmail.com"
                className="about-link-button"
              >
                Get in Touch
                <svg className="w-4 h-4 ml-1.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
                  <h4 className="card-title">Bachelor of Computer Science</h4>
                </div>
              </div>
              <p className="card-desc">
                <strong>Universitas Lampung</strong> (August 2023 – Present)
                <br />
                <span className="text-zinc-300 font-mono font-semibold">GPA: 3.89 / 4.00</span>
              </p>
              <div className="mt-2 text-xs text-zinc-400 font-mono">
                Coursework: Web Programming, Mobile Programming, Data Science, Machine Learning, Database Systems
              </div>
            </motion.div>

            {/* Quick Metrics Grid */}
            <motion.div className="about-stats-grid" variants={fadeInUp}>
              <div className="stat-box">
                <span className="stat-num">3.89</span>
                <span className="stat-text">Cumulative GPA</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">4</span>
                <span className="stat-text">Courses Assisted</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">2026</span>
                <span className="stat-text">GenBI Scholar</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">100%</span>
                <span className="stat-text">Solution Driven</span>
              </div>
            </motion.div>

            {/* Location & Status */}
            <motion.div className="about-meta-card location-card" variants={fadeInUp}>
              <span className="card-micro-label">LOCATION &amp; TIMEZONE</span>
              <p className="location-text">
                Bandar Lampung, Indonesia <span className="text-zinc-500 font-mono">(UTC+7 / WIB)</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
