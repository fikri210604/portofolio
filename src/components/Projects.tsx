import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import ProjectDetail from "./elements/ProjectDetail";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import "./Projects.css";

import fishygoImg from "../assets/projects/fishygo.webp";
import agrotechImg from "../assets/projects/agrotech.webp";
import deteksiCabaiImg from "../assets/projects/deteksi-cabai.webp";
import undanganImg from "../assets/projects/undangan.webp";
import suratMenyuratImg from "../assets/projects/surat-menyurat.webp";
import otolinkImg from "../assets/projects/otolink.webp";

// Individual project detail components
import MentorBelajarkuDetail from "./projects/MentorBelajarku";
import FishyGoDetail from "./projects/FishyGo";
import AgrotechDetail from "./projects/Agrotech";
import DeteksiCabaiDetail from "./projects/DeteksiCabai";
import UndanganOnlineDetail from "./projects/UndanganOnline";
import SuratDigitalDetail from "./projects/SuratDigital";
import OtolinkDetail from "./projects/Otolink";
import KKNSystemDetail from "./projects/KKNSystem";
import SkillBridgeAIDetail from "./projects/SkillBridgeAI";
import TerraGuardAIDetail from "./projects/TerraGuardAI";

interface Project {
  title: string;
  role: string;
  shortDescription: string;
  description: string;
  image?: string;
  icon?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  slug?: string;
  detailComponent?: () => ReactNode;
}

const projects: Project[] = [
  {
    title: "Mentor Belajarku — Digital Tutoring Ecosystem",
    role: "Full-Stack Developer & System Architect",
    shortDescription:
      "Full-stack digital ecosystem built with Next.js & Supabase, transforming tutoring operations: scheduling, attendance, learning records, session recaps, and tutor compensation.",
    description:
      "Building a digital ecosystem for Mentor Belajarku using Next.js and Supabase to gradually transform and integrate tutoring operations into a structured digital platform. Currently developing the initial operational system covering scheduling, tutoring sessions, student attendance, learning records, meeting recaps, and tutor compensation. Designing the system around real operational workflows and user needs rather than simply digitizing existing spreadsheet processes.",
    icon: "📚",
    tags: ["Next.js", "TypeScript", "React", "Supabase", "PostgreSQL", "Tailwind CSS", "System Architecture"],
    year: "2026 (Ongoing)",
    slug: "mentor-belajarku",
    detailComponent: MentorBelajarkuDetail,
  },
  {
    title: "SkillBridge AI — Job Recommendation System",
    role: "Machine Learning Engineer",
    shortDescription:
      "Data-driven career recommendation system utilizing NLP (SBERT) and Machine Learning (XGBoost) to deliver accurate job opportunity matches.",
    description:
      "Developed a data-driven job recommendation system to help users discover job opportunities based on their profiles and skills. Applied machine learning and natural language processing to process job information and improve the relevance of recommendations.",
    icon: "🤖",
    tags: ["Python", "FastAPI", "SBERT", "XGBoost", "Machine Learning", "Next.js"],
    year: "2025",
    slug: "skillbridge-ai",
    detailComponent: SkillBridgeAIDetail,
  },
  {
    title: "Sistem Informasi KKN Universitas Lampung",
    role: "Backend Architect & Developer",
    shortDescription:
      "Web-based information system to support digital management, coordination, and administrative validation of KKN activities at Universitas Lampung.",
    description:
      "Developing a web-based information system to support the management of Kuliah Kerja Nyata (KKN) activities at Universitas Lampung. Designing the system to improve the digital management and coordination of KKN processes.",
    icon: "🏫",
    tags: ["Laravel", "PHP", "REST API", "PostgreSQL", "Database Architecture"],
    year: "2026",
    slug: "kkn-unila",
    detailComponent: KKNSystemDetail,
  },
  {
    title: "TerraGuard AI — Disaster Risk Prediction",
    role: "Data Scientist & ML Engineer",
    shortDescription:
      "Data-driven disaster risk prediction system using environmental data and Random Forest models to provide risk awareness across Lampung.",
    description:
      "Developed a data-driven disaster risk prediction system to provide information about potential disaster risks in Lampung. Explored the use of environmental and disaster-related data to support risk awareness and decision-making.",
    icon: "🌪️",
    tags: ["Python", "Machine Learning", "Random Forest", "Scikit-Learn", "Pandas"],
    year: "2025",
    slug: "terraguard-ai",
    detailComponent: TerraGuardAIDetail,
  },
  {
    title: "FishyGo – Fisheries E-Commerce Platform",
    role: "Full-Stack Developer",
    shortDescription:
      "Platform e-commerce perikanan segar dengan integrasi ongkos kirim real-time (RajaOngkir), Google OAuth, dan multi-role access control.",
    description:
      "Fullstack e-commerce platform for selling fresh fish and seafood, featuring product catalog, shopping cart, checkout with real-time shipping cost (RajaOngkir), and transaction flow with role-based access (Admin, User, Courier). Includes authentication with Google OAuth and structured order management system.",
    image: fishygoImg.src,
    tags: ["Laravel", "PHP", "PostgreSQL", "Tailwind", "RajaOngkir API", "OAuth 2.0"],
    githubUrl: "https://github.com/fikri210604/fishygo",
    year: "2025",
    slug: "fishygo-store",
    detailComponent: FishyGoDetail,
  },
  {
    title: "Chili Disease Detection System (AI)",
    role: "Computer Vision & ML Engineer",
    shortDescription:
      "Sistem klasifikasi penyakit daun tanaman cabai berbasis ekstraksi fitur citra digital dan model Support Vector Machine (SVM).",
    description:
      "Machine learning-based classification system for detecting diseases in chili plants. Implements SVM-based model to assist early diagnosis and improve agricultural decision making.",
    image: deteksiCabaiImg.src,
    tags: ["Python", "SVM", "Computer Vision", "Machine Learning", "Tailwind"],
    githubUrl: "https://github.com/fikri210604/deteksi-penyakit-cabai",
    year: "2025",
    slug: "deteksi-cabai",
    detailComponent: DeteksiCabaiDetail,
  },
  {
    title: "Electronic Correspondence Management (Surat Digital)",
    role: "Full-Stack Developer",
    shortDescription:
      "Aplikasi pengelolaan tata kelola persuratan dinas otomatis dengan penomoran cerdas, ekspor PDF dinamis, dan pencarian arsip terstruktur.",
    description:
      "An Electronic Correspondence Management System built with Laravel to streamline the handling of incoming and outgoing letters. The application supports automatic letter numbering, PDF generation, structured archiving, and fast search capabilities. It includes role-based access and master data management to ensure efficient, organized, and secure document workflows.",
    image: suratMenyuratImg.src,
    tags: ["Laravel", "PHP", "PostgreSQL", "Tailwind", "PDF Engine"],
    githubUrl: "https://github.com/fikri210604/surat-digital",
    year: "2025",
    slug: "surat-digital",
    detailComponent: SuratDigitalDetail,
  },
  {
    title: "Agrotech Marketplace Platform",
    role: "Full-Stack Developer",
    shortDescription:
      "Marketplace digital menghubungkan distributor alat pertanian dengan petani lokal dilengkapi dashboard manajemen inventori komprehensif.",
    description:
      "Web-based marketplace connecting agricultural tool providers with farmers. Features include product management, category filtering, authentication system, and admin dashboard for managing inventory and users.",
    image: agrotechImg.src,
    tags: ["Laravel", "PHP", "MySQL", "Tailwind", "REST API"],
    githubUrl: "https://github.com/fikri210604/agrotech",
    year: "2025",
    slug: "agrotech-hub",
    detailComponent: AgrotechDetail,
  },
  {
    title: "Otolink : Electronic & Vehicle Marketplace App",
    role: "Mobile App Developer",
    shortDescription:
      "Aplikasi mobile cross-platform marketplace otomotif dan elektronik dibangun dengan Flutter dan Firebase backend real-time.",
    description:
      "Otolink is an application for buying and selling electronic and vehicle products. It features a product catalog, shopping cart, and transaction flow with role-based access (Admin, User). Includes authentication with Google OAuth and structured order management system.",
    image: otolinkImg.src,
    tags: ["Flutter", "Dart", "Firebase", "Google OAuth", "Mobile UI"],
    githubUrl: "https://github.com/fikri210604/otolink",
    year: "2025",
    slug: "otolink-mobile",
    detailComponent: OtolinkDetail,
  },
  {
    title: "Online Wedding Invitation Platform",
    role: "Frontend & Web Developer",
    shortDescription:
      "Platform undangan pernikahan digital interaktif dengan sistem RSVP online, guest check-in, dan personalisasi otomatis.",
    description:
      "Dynamic web-based invitation platform with RSVP system, guest management, and automatic PDF generation. Designed to streamline digital invitation workflows.",
    image: undanganImg.src,
    tags: ["PHP", "MySQL", "Tailwind", "JavaScript", "RSVP Flow"],
    githubUrl: "https://github.com/fikri210604/undangan-online-project",
    year: "2025",
    slug: "undangan-online",
    detailComponent: UndanganOnlineDetail,
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  },
};

function ProjectCardContent({
  project,
  isSelected,
  onSelect,
}: {
  project: Project;
  isSelected: boolean;
  onSelect: (p: Project) => void;
}) {
  return (
    <CardContainer
      enabled={isSelected}
      containerClassName="w-full h-full p-0 flex items-stretch justify-center"
      className="w-full h-full"
    >
      <CardBody className={`project-card ${isSelected ? "is-selected" : ""}`}>
        {/* Visual / Mockup Column (Floating depth with translateZ) */}
        <div className="project-visual-col">
          <CardItem
            translateZ={isSelected ? 40 : 0}
            className="w-full"
          >
            <div className="browser-mockup">
              <div className="browser-chrome">
                <div className="browser-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <span className="browser-url">{project.slug || "project"}.dev</span>
              </div>

              <div className="browser-screen">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-screen-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-screen-fallback">
                    <span className="fallback-icon">{project.icon || "⚙️"}</span>
                    <span className="fallback-label">{project.role}</span>
                    <span className="fallback-sub">Enterprise Backend & Service Architecture</span>
                  </div>
                )}
              </div>
            </div>
          </CardItem>
        </div>

        {/* Details / Content Column (Floating depth with translateZ) */}
        <div className="project-content-col">
          <CardItem
            translateZ={isSelected ? 25 : 0}
            className="project-meta-row"
          >
            <span className="project-year-tag font-mono">{project.year}</span>
            <span className="project-role-badge font-mono">{project.role}</span>
          </CardItem>

          <CardItem
            as="h3"
            translateZ={isSelected ? 35 : 0}
            className="project-card-title"
          >
            {project.title}
          </CardItem>

          <CardItem
            as="p"
            translateZ={isSelected ? 20 : 0}
            className="project-card-desc"
          >
            {project.shortDescription}
          </CardItem>

          {/* Technology Tags */}
          <CardItem
            translateZ={isSelected ? 30 : 0}
            className="project-tag-list"
          >
            {project.tags.map((tag) => (
              <span key={tag} className="tech-badge font-mono">
                {tag}
              </span>
            ))}
          </CardItem>

          {/* Actions: Case Study Modal & External Links */}
          <CardItem
            translateZ={isSelected ? 45 : 0}
            className="project-action-row"
          >
            {project.detailComponent && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(project);
                }}
                className="btn-case-study cursor-pointer"
              >
                <span>Inspect Architecture</span>
                <FaArrowRight className="action-arrow" />
              </button>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-circular-link cursor-pointer"
                aria-label="GitHub Repository"
                title="GitHub Repository"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Next.js", "Laravel", "Machine Learning", "Python", "Supabase", "PostgreSQL"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="projects" className="projects-editorial" ref={ref}>
      <div className="projects-container">
        {/* Header */}
        <motion.div
          className="projects-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <span className="section-mono-tag">04. SELECTED CASE STUDIES</span>
          <h2 className="projects-title">Featured Systems & Projects.</h2>
          <p className="projects-subtitle">
            Demonstrating architectural depth, backend workflows, and machine learning models in production environments.
          </p>

          {/* Minimalist Filter Tabs */}
          <div className="projects-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 3D Coverflow Project Carousel */}
        <div className="projects-carousel-wrap">
          {filteredProjects.length === 0 ? (
            <div className="projects-empty-state">
              <p>No projects found matching category &ldquo;{filter}&rdquo;.</p>
            </div>
          ) : (
            <CoverflowCarousel
              key={filter}
              slides={filteredProjects}
              cardWidth="clamp(320px, 78vw, 860px)"
              cardHeight="clamp(480px, 56vh, 520px)"
              rotate={28}
              depth={0.4}
              perspective={2.6}
              gap={0.08}
              fade={0.15}
              loop={filteredProjects.length > 2}
              showNavigation={true}
              showPagination={true}
              label="Selected Projects Carousel"
              className="projects-coverflow-carousel"
              cardClassName="aspect-auto h-full rounded-[24px] bg-transparent shadow-none border-none p-0 cursor-default overflow-visible"
              renderCard={(project, _index, isSelected) => (
                <ProjectCardContent
                  project={project}
                  isSelected={isSelected}
                  onSelect={(p) => setSelectedProject(p)}
                />
              )}
            />
          )}
        </div>
      </div>

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
