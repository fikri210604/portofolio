import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ParallaxSection from "./elements/ParallaxSection";
import SpotlightCard from "./elements/SpotlightCard";
import ProjectDetail from "./elements/ProjectDetail";
import "./Projects.css";
import GradientText from "./elements/GradientText";

// Individual project detail components
import FishyGoDetail from "./projects/FishyGo";
import AgrotechDetail from "./projects/Agrotech";
import DeteksiCabaiDetail from "./projects/DeteksiCabai";
import UndanganOnlineDetail from "./projects/UndanganOnline";
import SuratDigitalDetail from "./projects/SuratDigital";
import OtolinkDetail from "./projects/Otolink";
import type { ReactNode } from "react";

interface Project {
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  detailComponent?: () => ReactNode;
}

const projects: Project[] = [
  {
    title: "FishyGo – Fisheries E-Commerce Platform",
    shortDescription:
      "Fullstack e-commerce for fresh fish & seafood with real-time shipping, Google OAuth, and role-based access.",
    description:
      "Fullstack e-commerce platform for selling fresh fish and seafood, featuring product catalog, shopping cart, checkout with real-time shipping cost (RajaOngkir), and transaction flow with role-based access (Admin, User, Courier). Includes authentication with Google OAuth and structured order management system.",
    image: "/projects/fishygo.png",
    tags: ["Laravel", "PHP", "PostgreSQL", "Tailwind", "RajaOngkir API", "Google OAuth"],
    githubUrl: "https://github.com/fikri210604/fishygo",
    year: "2025",
    detailComponent: FishyGoDetail,
  },
  {
    title: "Agrotech Marketplace Platform",
    shortDescription:
      "Marketplace connecting agricultural tool providers with farmers, with admin dashboard & product management.",
    description:
      "Web-based marketplace connecting agricultural tool providers with farmers. Features include product management, category filtering, authentication system, and admin dashboard for managing inventory and users.",
    image: "/projects/agrotech.png",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind"],
    githubUrl: "https://github.com/fikri210604/agrotech",
    year: "2025",
    detailComponent: AgrotechDetail,
  },
  {
    title: "Chili Disease Detection System (AI)",
    shortDescription:
      "ML-based classification system for detecting diseases in chili plants using SVM model.",
    description:
      "Machine learning-based classification system for detecting diseases in chili plants. Implements SVM-based model to assist early diagnosis and improve agricultural decision making.",
    image: "/projects/deteksi-cabai.png",
    tags: ["Python", "Machine Learning", "Expert System", "HTML", "Tailwind"],
    githubUrl: "https://github.com/fikri210604/deteksi-penyakit-cabai",
    year: "2025",
    detailComponent: DeteksiCabaiDetail,
  },
  {
    title: "Online Wedding Invitation System",
    shortDescription:
      "Digital invitation platform with RSVP, guest management, and automatic PDF generation.",
    description:
      "Dynamic web-based invitation platform with RSVP system, guest management, and automatic PDF generation. Designed to streamline digital invitation workflows.",
    image: "/projects/undangan.png",
    tags: ["PHP", "MySQL", "Tailwind", "JavaScript"],
    githubUrl: "https://github.com/fikri210604/undangan-online-project",
    year: "2025",
    detailComponent: UndanganOnlineDetail,
  },
  {
    title: "Electronic Correspondence Management System",
    shortDescription:
      "Laravel-based system for managing incoming & outgoing letters with PDF generation and archiving.",
    description:
      "An Electronic Correspondence Management System built with Laravel to streamline the handling of incoming and outgoing letters. The application supports automatic letter numbering, PDF generation, structured archiving, and fast search capabilities. It includes role-based access and master data management to ensure efficient, organized, and secure document workflows.",
    image: "/projects/surat-menyurat.png",
    tags: ["Laravel", "PHP", "PostgreSQL", "Tailwind"],
    githubUrl: "https://github.com/fikri210604/surat-digital",
    year: "2025",
    detailComponent: SuratDigitalDetail,
  },
  {
    title: "Otolink : Electronic & Vehicle Marketplace App",
    shortDescription:
      "Mobile marketplace app for electronics & vehicles built with Flutter and Firebase.",
    description:
      "Otolink is an application for buying and selling electronic and vehicle products. It features a product catalog, shopping cart, and transaction flow with role-based access (Admin, User). Includes authentication with Google OAuth and structured order management system.",
    image: "/projects/otolink.png",
    tags: ["Dart", "Flutter", "Firebase", "Google OAuth"],
    githubUrl: "https://github.com/fikri210604/otolink",
    year: "2025",
    detailComponent: OtolinkDetail,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "React", "Next.js", "Laravel", "Python", "PostgreSQL", "Flutter"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <section id="projects" className="projects" ref={ref}>
      <ParallaxSection offset={70}>
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <motion.h2 variants={fadeInUp}>
              <GradientText
                colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                animationSpeed={8}
                showBorder={false}
                className="inline-block"
              >
                Featured Projects
              </GradientText>
            </motion.h2>
            <p className="section-subtitle">Things I've built recently</p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="project-filters"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? "active" : ""}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid with SpotlightCards */}
          <motion.div
            className="projects-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className="project-card-wrapper"
                onClick={() => setSelectedProject(project)}
              >
                {/* Inner spotlight area matches the large image card from the reference */}
                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(255, 255, 255, 0.15)"
                >
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-img"
                      {...(index === 0 ? { fetchpriority: "high" } : {})}
                    />

                    {/* Hover overlay */}
                    <div className="project-overlay">
                      <div className="project-links">
                        <span className="project-link">
                          <span>🔍</span> View Details
                        </span>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>

                {/* Text content placed OUTSIDE the spotlight card, at the bottom */}
                <div className="project-bottom-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-short-desc">{project.shortDescription}</p>
                  <div className="project-meta">
                    <div className="project-tags">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="project-tag">+{project.tags.length - 4}</span>
                      )}
                    </div>
                    <span className="project-year">{project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Project Detail Modal */}
      <ProjectDetail
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      >
        {selectedProject?.detailComponent?.()}
      </ProjectDetail>
    </section>
  );
}
