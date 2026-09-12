import { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaBolt,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaCheckCircle,
  FaRoute,
  FaArrowRight,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import "./Experience.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768 || window.matchMedia("(hover: none)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px), (hover: none)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

interface ExperienceItem {
  id: number;
  period: string;
  role: string;
  organization: string;
  type: "Engineering" | "Academic" | "Education" | "Leadership";
  icon: React.ElementType;
  highlights: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    period: "AUG 2024 — JUN 2026",
    role: "Teaching Assistant",
    organization: "Universitas Lampung",
    type: "Academic",
    icon: FaChalkboardTeacher,
    highlights: [
      "Assisted courses in Mathematics, Data Structures & Algorithms, Object-Oriented Programming, and Advanced Web Programming.",
      "Guided students in understanding programming concepts, algorithmic thinking, and solving technical problems during practical sessions and projects.",
      "Conducted practical sessions, tutorials, and consultations for students with different levels of understanding.",
      "Developed technical communication skills by explaining complex concepts in a clear and structured way.",
    ],
    tags: ["Data Structures", "Algorithms", "OOP", "Advanced Web", "Mentorship"],
  },
  {
    id: 2,
    period: "DEC 2025 — FEB 2026",
    role: "Geospatial Engineering Intern",
    organization: "PT PLN UIP3B Sumatera, UPT Tanjung Karang",
    type: "Engineering",
    icon: FaBolt,
    highlights: [
      "Developed a geospatial-based infrastructure monitoring system to support the digitalization of transmission network data management.",
      "Transformed a previously manual data management process into a more accessible digital visualization.",
      "Analyzed operational needs and translated them into a technology-based solution.",
    ],
    tags: ["Geospatial GIS", "Transmission Network", "Data Digitalization", "Full-Stack"],
  },
  {
    id: 3,
    period: "JAN 2024 — AUG 2026",
    role: "Academic Tutor",
    organization: "SMA Al Kautsar Bandar Lampung",
    type: "Education",
    icon: FaChalkboardTeacher,
    highlights: [
      "Guided students through learning activities and provided assistance in understanding lesson materials.",
      "Adapted teaching approaches to students with different levels of understanding.",
      "Developed communication, patience, and interpersonal skills through direct interaction with students.",
    ],
    tags: ["Tutoring", "Mathematics & Science", "Adaptive Teaching", "Pedagogy"],
  },
  {
    id: 4,
    period: "FEB 2026 — PRESENT",
    role: "Head of External Relations & Media Commission",
    organization: "DPM FMIPA Universitas Lampung",
    type: "Leadership",
    icon: FaUsers,
    highlights: [
      "Coordinate with the FMIPA dean's office and communicate students' academic aspirations constructively.",
      "Manage organizational media and support communication of institutional activities and information.",
    ],
    tags: ["Student Governance", "External Relations", "Media Strategy", "Leadership"],
  },
  {
    id: 5,
    period: "MAY 2026 — PRESENT",
    role: "Bank Indonesia Scholarship Awardee",
    organization: "Generasi Baru Indonesia (GenBI) Universitas Lampung",
    type: "Leadership",
    icon: FaAward,
    highlights: [
      "Selected as a recipient of the prestigious 2026 Bank Indonesia Scholarship.",
      "Participate in activities focused on personal development, leadership, and social contribution.",
    ],
    tags: ["Bank Indonesia", "GenBI Scholar", "Leadership", "Social Impact"],
  },
  {
    id: 6,
    period: "FEB 2025 — DEC 2025",
    role: "Head of Media Center",
    organization: "Rois FMIPA Universitas Lampung",
    type: "Leadership",
    icon: FaUsers,
    highlights: [
      "Managed Instagram, YouTube, and X for an organization with more than 2,000 Instagram followers.",
      "Increased Instagram visits and audience attention by approximately 20% through educational and inspirational content.",
      "Planned monthly content schedules and produced more than 120 visual contents using Canva.",
    ],
    tags: ["Digital Media", "Content Strategy", "Canva", "Audience Growth"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useIsomorphicLayoutEffect(() => {
    // Skip GSAP entirely on mobile — use CSS vertical layout instead
    if (isMobile) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let ctx: gsap.Context;

    // Safety delay to ensure DOM is fully rendered and font metrics are settled
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        // Read all geometry in one batch to avoid repeated forced reflows
        const totalWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = Math.max(0, totalWidth - viewportWidth + 96);

        gsap.to(track, {
          x: () => {
            // Re-read lazily inside getter (called by GSAP on scroll, not on layout)
            const tw = track.scrollWidth;
            const vw = window.innerWidth;
            return -Math.max(0, tw - vw + 96);
          },
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${scrollDistance + 450}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      }, section);

      ScrollTrigger.refresh();
    }, 150);

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
  }, [isMobile]);

  // ── Mobile: simple vertical stacked layout (no GSAP) ──
  if (isMobile) {
    return (
      <section ref={sectionRef} id="experience" className="experience-gallery-section">
        <div className="experience-mobile-container">
          {/* Intro Header */}
          <div className="experience-mobile-header">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-5">
              <FaRoute className="w-3.5 h-3.5" />
              <span>04. TRACK RECORD</span>
            </div>
            <h2 className="experience-intro-title">
              Work &amp;{" "}
              <span className="experience-title-italic">Experience</span>
            </h2>
            <p className="experience-intro-desc">
              A chronological timeline of engineering leadership, production systems, and academic mentorship.
            </p>
          </div>

          {/* Vertical Card Stack */}
          <div className="experience-mobile-cards">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <div key={exp.id} className="experience-uniform-card experience-mobile-card">
                  <span className="card-top-index font-mono">0{exp.id}</span>
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
                  <div className="card-middle-content">
                    <h3 className="card-main-role">{exp.role}</h3>
                    <h4 className="card-main-org">{exp.organization}</h4>
                    <ul className="card-bullet-list">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="card-bullet-item">
                          <FaCheckCircle className="card-bullet-icon" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
      </section>
    );
  }

  // ── Desktop: GSAP horizontal scroll ──
  return (
    <section ref={sectionRef} id="experience" className="experience-gallery-section">
      <div className="experience-sticky-viewport">
        <div className="experience-ambient-glow glow-left" />
        <div className="experience-ambient-glow glow-right" />

        <div className="experience-cards-viewport">
          <div ref={trackRef} className="experience-cards-track">

            {/* Editorial Intro Panel */}
            <div className="experience-intro-panel">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-5">
                <FaRoute className="w-3.5 h-3.5" />
                <span>04. TRACK RECORD</span>
              </div>

              <h2 className="experience-intro-title">
                Work &amp;{" "}
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

            {/* Experience Cards */}
            {experiences.map((exp) => {
              const Icon = exp.icon;

              return (
                <div key={exp.id} className="experience-uniform-card">
                  <span className="card-top-index font-mono">0{exp.id}</span>

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

                  <div className="card-middle-content">
                    <h3 className="card-main-role">{exp.role}</h3>
                    <h4 className="card-main-org">{exp.organization}</h4>

                    <ul className="card-bullet-list">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="card-bullet-item">
                          <FaCheckCircle className="card-bullet-icon" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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
