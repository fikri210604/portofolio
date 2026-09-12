import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';
import './Hero.css';

// Silky-smooth cinematic ease — unhurried, premium feel
const EASE = [0.22, 1, 0.36, 1] as const;
// Extra-slow ease for blob & portrait entrance
const EASE_SLOW = [0.12, 0.8, 0.2, 1] as const;

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
};

// Social icons
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/fikri210604',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ahmad-fikri-hanif-47b075247/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/fikri_afh',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section id="home" className="hero-editorial">
      {/* Atmospheric blur orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      {/* ── 3-Column Grid ────────────────────────────── */}
      <div className="hero-grid">

        {/* Col 1 — Left: Description + CTA + Socials */}
        <motion.div
          className="hero-grid-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.9 }}
        >
          {/* Top content: role + statement + CTA */}
          <div className="hero-left-top">
            <h2 className="hero-role-tag">
              Computer Science Student <span className="hero-role-sep">·</span> Software &amp; Data Engineer
            </h2>
            <p className="hero-statement">
              Computer Science student at Universitas Lampung with a focus on software engineering and data. Experienced in building practical web platforms, geospatial systems, and machine learning solutions.
            </p>
            <div className="hero-cta-row">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary-editorial"
              >
                Explore Projects
                <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-outline-editorial"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Bottom content: social icons — like mnmlst. bottom-left */}
          <div className="hero-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Col 2 — Center: Portrait (larger) + Circle blob (smaller, behind torso) */}
        <div className="hero-grid-center">
          {/* Circle blob — behind the torso area, NOT containing the whole portrait */}
          <motion.div
            className="hero-blob"
            initial={{ scale: 0.6, opacity: 0, x: "-50%" }}
            animate={{ scale: 1, opacity: 1, x: "-50%" }}
            transition={{ duration: 1.8, ease: EASE_SLOW, delay: 0.15 }}
            aria-hidden="true"
          />

          {/* Portrait — significantly bigger than the blob */}
          <motion.div
            className="hero-portrait-wrap"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.2, ease: EASE_SLOW, delay: 0.3 }}
          >
            <img
              src={profileImg.src}
              alt="Ahmad Fikri Hanif"
              className="portrait-img"
              width={profileImg.width || 600}
              height={profileImg.height || 750}
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
        </div>

        {/* Col 3 — Right: Giant name + location at bottom */}
        <motion.div
          className="hero-grid-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: EASE, delay: 1.1 }}
        >
          <h1 className="hero-giant-name">
            AHMAD
            <br />
            FIKRI
            <br />
            HANIF
          </h1>
          <p className="hero-location">Bandar Lampung, Indonesia</p>
        </motion.div>

      </div>
    </section>
  );
}