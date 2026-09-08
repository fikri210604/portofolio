import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaServer,
  FaBolt,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaCheckCircle,
  FaRoute,
  FaArrowRight,
} from "react-icons/fa";
import "./Experience.css";

// Safely register GSAP ScrollTrigger plugin on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// SSR-safe isomorphic layout effect hook
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface ExperienceItem {
  id: number;
  period: string;
  role: string;
  organization: string;
  type: "Engineering" | "Academic" | "Education";
  icon: React.ElementType;
  highlights: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    period: "2026 — PRESENT",
    role: "Lead Developer & System Architect",
    organization: "SIGAP-MBG (National Food Provider Monitoring Platform)",
    type: "Engineering",
    icon: FaServer,
    highlights: [
      "Architected national-scale platform boundaries for food provider standardization and compliance telemetry.",
      "Engineered machine learning verification pipeline for automated document and license validation.",
      "Established AI-augmented software engineering workflows to monitor complex supply chain distribution points.",
    ],
    tags: ["System Architecture", "Machine Learning", "FastAPI", "PostgreSQL", "Cloud Integration"],
  },
  {
    id: 2,
    period: "2026",
    role: "Full-Stack & GIS Engineer",
    organization: "PT PLN (Persero) UIP3B Sumatera UPT Tanjung Karang",
    type: "Engineering",
    icon: FaBolt,
    highlights: [
      "Built high-performance geospatial web dashboard for monitoring transmission line tower anomalies in real time.",
      "Optimized spatiotemporal rendering of regional power grids using LeafletJS and lightweight tile layers.",
      "Implemented automated anomaly alert workflows to assist field dispatch and predictive line maintenance.",
    ],
    tags: ["Full-Stack", "GIS", "LeafletJS", "REST API", "Telemetry Dashboard"],
  },
  {
    id: 3,
    period: "2023 — 2025",
    role: "Head & Senior Teaching Assistant",
    organization: "Faculty of Mathematics and Natural Sciences, University of Lampung",
    type: "Academic",
    icon: FaChalkboardTeacher,
    highlights: [
      "Mentored 200+ undergraduate students in Advanced Web Programming (Laravel, REST APIs, Database Design).",
      "Directed laboratory modules in Artificial Intelligence (machine learning modeling, dataset pre-processing).",
      "Conducted practical examinations and code reviews for Structured Programming and Discrete Mathematics.",
    ],
    tags: ["Laravel", "AI / ML", "Database Design", "Mentorship", "Pedagogy"],
  },
  {
    id: 4,
    period: "2022 — PRESENT",
    role: "Undergraduate in Computer Science (S.Kom)",
    organization: "University of Lampung (FMIPA Unila)",
    type: "Education",
    icon: FaGraduationCap,
    highlights: [
      "Focused on System Architecture, Machine Learning, and Distributed Cloud Computing.",
      "Active contributor in software research labs and regional algorithmic competitions.",
      "Cumulative GPA 3.8+ with consistent high marks in Software Engineering & Data Structures.",
    ],
    tags: ["Computer Science", "Machine Intelligence", "System Engineering"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let ctx: gsap.Context;

    // Technical Requirement: Robust safety delay to ensure DOM is fully rendered
    // and card widths / font metrics are completely settled before ScrollTrigger calculation.
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        // Calculate the total horizontal scroll distance needed
        const getScrollDistance = () => {
          const totalWidth = track.scrollWidth;
          const viewportWidth = window.innerWidth;
          // Offset allows the last card to be viewed with comfortable breathing margin
          return Math.max(0, totalWidth - viewportWidth + 96);
        };

        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollDistance() + 450}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      }, section);

      // Force recalculation after setup to guarantee exact geometry
      ScrollTrigger.refresh();
    }, 150);

    // Refresh triggers on window resize or when fonts finish loading
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="experience-gallery-section">
      {/* Sticky Viewport Container */}
      <div className="experience-sticky-viewport">
        {/* Background Ambient Glows */}
        <div className="experience-ambient-glow glow-left" />
        <div className="experience-ambient-glow glow-right" />

        {/* Horizontal Sliding Track Viewport */}
        <div className="experience-cards-viewport">
          <div ref={trackRef} className="experience-cards-track">
            
            {/* Visual Editorial Intro Panel (Appears before scroll on the left) */}
            <div className="experience-intro-panel">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-5">
                <FaRoute className="w-3.5 h-3.5" />
                <span>04. TRACK RECORD</span>
              </div>

              <h2 className="experience-intro-title">
                Work &amp;
                <span className="experience-title-italic">Experience</span>
              </h2>

              <p className="experience-intro-desc">
                Scroll down to explore a chronological timeline of engineering leadership, 
                production telemetry systems, and academic mentorship.
              </p>

              <div className="experience-explore-prompt font-mono">
                <span>SCROLL TO EXPLORE</span>
                <FaArrowRight className="explore-arrow-icon" />
              </div>
            </div>

            {/* Uniform Experience Cards */}
            {experiences.map((exp) => {
              const Icon = exp.icon;

              return (
                <div key={exp.id} className="experience-uniform-card">
                  {/* Subtle Top-Right Card Index */}
                  <span className="card-top-index font-mono">0{exp.id}</span>

                  {/* Card Header */}
                  <div className="card-top-row">
                    <div className="flex items-center gap-3">
                      <div className="card-icon-box">
                        <Icon />
                      </div>
                      <span className="card-period-pill font-mono">{exp.period}</span>
                    </div>
                    <span className={`card-badge-type type-${exp.type.toLowerCase()}`}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Card Main Body */}
                  <div className="card-middle-content">
                    <h3 className="card-main-role">{exp.role}</h3>
                    <h4 className="card-main-org">{exp.organization}</h4>

                    {/* Bullet Highlights */}
                    <ul className="card-bullet-list">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="card-bullet-item">
                          <FaCheckCircle className="card-bullet-icon" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer / Tech Tags */}
                  <div className="card-bottom-tags">
                    {exp.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="card-tech-tag font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
