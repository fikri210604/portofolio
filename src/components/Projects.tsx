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
import mentorBelajarkuImg from "../assets/projects/mentorbelajarku.png";
import kknImg from "../assets/projects/kkn.png";
import webgisImg from "../assets/projects/webgis.png";
import jobseekeraiImg from "../assets/projects/jobseekerai.png";

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
import WebGISDetail from "./projects/WebGIS";

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
    title: "Mentor Belajarku — Sistem Manajemen & Presensi Bimbel Terpadu",
    role: "Lead System Architect & Full-Stack Developer",
    shortDescription:
      "Integrated tutoring management platform featuring camera-verified attendance, decoupled schedule-session orchestration, and automated tutor payroll with historical rate integrity.",
    description:
      "Architected a production-grade operational platform for tutoring institutions to replace fragmented spreadsheets and manual paper logs. Engineered with Next.js 15 App Router, TypeScript, Tailwind CSS v4, and Supabase (PostgreSQL & Storage). Features direct in-browser photo attendance capture with client-side compression (react-webcam), clear separation between weekly routine schedules and actual calendar sessions (supporting substitute tutors & rescheduling), server-side automated payroll calculation with historical effective dating, role-based access control via Better Auth, and complete audit logging for sensitive actions.",
    icon: "🎓",
    image: mentorBelajarkuImg.src,
    tags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS v4",
      "Supabase",
      "Better Auth",
      "react-webcam",
      "Recharts",
      "TanStack Table",
      "Zustand",
    ],
    githubUrl: "https://github.com/fikri210604/mentorbelajarku",
    year: "2026 (Active)",
    slug: "mentor-belajarku",
    detailComponent: MentorBelajarkuDetail,
  },
  {
    title: "PLN WebGIS — Transmission Anomaly Monitoring Dashboard",
    role: "Frontend & UI/UX Engineer (Intern)",
    shortDescription:
      "Interactive WebGIS dashboard engineered with Next.js and Leaflet.js at PT PLN (Persero) UIP3B Sumatera to visualize transmission assets, disturbances, and anomaly statuses.",
    description:
      "Designed and developed the frontend WebGIS monitoring dashboard for PT PLN (Persero) UIP3B Sumatera UPT Tanjung Karang, transforming conventional spreadsheet workflows into an interactive geospatial platform. Built with Next.js and Leaflet.js, featuring coordinate markers, detail popups, multi-user role access, and disturbance status indicators. Rigorously validated via User Acceptance Testing (UAT) with high usability ratings and officially approved for operational deployment.",
    icon: "⚡",
    image: webgisImg.src,
    tags: ["Next.js", "Leaflet.js", "WebGIS", "UI/UX Design", "UAT Tested", "PT PLN"],
    githubUrl: "https://github.com/fikri210604/anomali-detection",
    year: "2025 - 2026",
    slug: "pln-webgis-anomaly",
    detailComponent: WebGISDetail,
  },
  {
    title: "JobSeeker AI — Intelligent Career Advisor & Job Matching Platform",
    role: "Machine Learning & Systems Engineer",
    shortDescription:
      "End-to-end AI career platform integrating SBERT multilingual semantic retrieval, hybrid ML scoring (XGBoost 69.9% accuracy), and Google Gemini 2.5 Flash for personalized career advisory.",
    description:
      "Architected a dual-pipeline career advisory platform to address Indonesia's labor skill mismatch. Engineered a hybrid recommendation system fusing heuristic domain rules (60%) with an XGBoost ML classifier (40%) trained on 60,940 pairwise samples. Integrated SBERT dense vector retrieval across 1,491 scraped jobs and utilized Google Gemini 2.5 Flash for automated skill gap roadmaps and personalized cover letters, deployed via FastAPI on Cloud Run.",
    icon: "🤖",
    image: jobseekeraiImg.src,
    tags: ["Python", "FastAPI", "Next.js 16", "SBERT", "XGBoost", "Google Gemini", "MLflow", "DagsHub"],
    year: "2025 - 2026",
    slug: "jobseeker-ai",
    detailComponent: SkillBridgeAIDetail,
  },
  {
    title: "Sistem Informasi KKN Universitas Lampung",
    role: "Backend Architect & Database Engineer",
    shortDescription:
      "Institutional management platform built to coordinate, validate, and digitally orchestrate university-wide community service activities for thousands of students.",
    description:
      "Architected a robust institutional platform to digitize the administrative validation, student placement, and fieldwork reporting workflows for Kuliah Kerja Nyata (KKN) Universitas Lampung. Built with Laravel and PostgreSQL, ensuring verifiable audit trails, role-based data isolation, and scalable REST APIs.",
    icon: "🏫",
    image: kknImg.src,
    tags: ["Laravel", "PHP", "REST API", "PostgreSQL", "Database Architecture"],
    year: "2026",
    slug: "kkn-unila",
    detailComponent: KKNSystemDetail,
  },
  {
    title: "TerraGuard AI — Disaster Risk Prediction",
    role: "Data Scientist & Systems Modeler",
    shortDescription:
      "Predictive disaster risk classification system utilizing environmental data and Random Forest algorithms to bolster regional disaster readiness in Lampung.",
    description:
      "Engineered an applied disaster risk assessment pipeline to assist municipal disaster mitigation in Lampung. Processed multidimensional environmental and topographical datasets to train and evaluate predictive Random Forest models for proactive hazard detection and risk mitigation.",
    icon: "🌪️",
    tags: ["Python", "Machine Learning", "Random Forest", "Scikit-Learn", "Pandas"],
    year: "2025",
    slug: "terraguard-ai",
    detailComponent: TerraGuardAIDetail,
  },
  {
    title: "FishyGo — Fresh Seafood E-Commerce Platform",
    role: "Full-Stack Web Developer",
    shortDescription:
      "Fresh seafood retail e-commerce platform built with Laravel 10 and Tailwind CSS, featuring automated RajaOngkir shipping calculation, Midtrans payments, and multi-role dashboards.",
    description:
      "Designed and developed an end-to-end fresh seafood e-commerce platform using Laravel 10 to digitalize fishery retail transactions. Implemented product catalogs, interactive cart, automated courier shipping estimation via RajaOngkir API, online payments via Midtrans and COD, alongside dedicated role-based interfaces for administrators, customers, and couriers.",
    image: fishygoImg.src,
    tags: ["Laravel 10", "PHP", "Tailwind CSS", "RajaOngkir API", "Midtrans", "E-Commerce"],
    githubUrl: "https://github.com/fikri210604/fishygo",
    year: "2025",
    slug: "fishygo-store",
    detailComponent: FishyGoDetail,
  },
  {
    title: "Chili Disease Detection System (AI)",
    role: "Computer Vision & ML Engineer",
    shortDescription:
      "Agricultural computer vision system combining digital image feature extraction with Support Vector Machines (SVM) for early plant pathology diagnosis.",
    description:
      "Developed a machine-learning-driven crop pathology diagnostic system to assist agriculturalists in early pest and disease identification. Implemented custom feature extraction pipelines combined with Support Vector Machine (SVM) models for leaf-level classification.",
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
    role: "Mobile Application Engineer",
    shortDescription:
      "Cross-platform mobile vehicle & electronics marketplace engineered with Flutter and real-time Firebase backend, featuring OAuth authentication and structured commerce workflows.",
    description:
      "Engineered a performant cross-platform mobile marketplace application using Flutter and Firebase. Designed responsive client-side UI, real-time catalog synchronization, Google OAuth integration, and end-to-end shopping cart and checkout architecture.",
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
          <span className="section-mono-tag">04. SELECTED PROJECTS</span>
          <h2 className="projects-title">Featured Projects &amp; Systems.</h2>
          <p className="projects-subtitle">
            A collection of web platforms, geospatial applications, and machine learning systems I have built.
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
