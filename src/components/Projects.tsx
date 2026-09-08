import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import ProjectDetail from "./elements/ProjectDetail";
import "./Projects.css";

import fishygoImg from "../assets/projects/fishygo.webp";
import agrotechImg from "../assets/projects/agrotech.webp";
import deteksiCabaiImg from "../assets/projects/deteksi-cabai.webp";
import undanganImg from "../assets/projects/undangan.webp";
import suratMenyuratImg from "../assets/projects/surat-menyurat.webp";
import otolinkImg from "../assets/projects/otolink.webp";

// Individual project detail components
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
    title: "Sistem Informasi KKN Universitas Lampung",
    role: "Backend Architect & Developer",
    shortDescription:
      "Backend sistem informasi KKN tingkat universitas dengan Laravel & RESTful API, mengelola integrasi multi-user, autentikasi, dan validasi data kompleks.",
    description:
      "Mengembangkan backend sistem informasi Kuliah Kerja Nyata (KKN) Universitas Lampung menggunakan Laravel dan REST API. Merancang serta mengimplementasikan endpoint API untuk mendukung integrasi dengan sisi frontend, termasuk pengelolaan basis data, autentikasi, otorisasi, validasi data, dan logika bisnis aplikasi.",
    icon: "🏫",
    tags: ["Laravel", "PHP", "REST API", "PostgreSQL", "Database Architecture"],
    year: "2026",
    slug: "kkn-unila",
    detailComponent: KKNSystemDetail,
  },
  {
    title: "SkillBridge AI – Job Recommendation System",
    role: "Machine Learning Engineer",
    shortDescription:
      "Sistem rekomendasi karir berbasis NLP, membandingkan TF-IDF dengan SBERT (all-MiniLM-L6-v2) dan XGBoost classifier terintegrasi MLflow.",
    description:
      "Mengembangkan sistem rekomendasi pekerjaan berbasis Information Retrieval dan Machine Learning. Membandingkan pendekatan TF-IDF dengan SBERT (all-MiniLM-L6-v2) untuk representasi dan pencocokan teks, serta menggunakan XGBoost sebagai model klasifikasi dengan akurasi pengujian sekitar 70,7%. Eksperimen dan pelacakan model didukung MLflow dan DagsHub.",
    icon: "🤖",
    tags: ["Python", "FastAPI", "SBERT", "XGBoost", "MLflow", "Next.js"],
    year: "2025",
    slug: "skillbridge-ai",
    detailComponent: SkillBridgeAIDetail,
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
    title: "TerraGuard AI – Disaster Risk Prediction",
    role: "Data Scientist & ML Engineer",
    shortDescription:
      "Sistem pemodelan prediktif risiko bencana daerah menggunakan Random Forest dari fusi data spasial historis kebencanaan dan variabel cuaca.",
    description:
      "Mengembangkan sistem prediksi risiko bencana menggunakan data historis kebencanaan dan data cuaca. Menggunakan Random Forest untuk pemodelan risiko berdasarkan karakteristik wilayah dan kondisi lingkungan, melalui proses data preprocessing, feature engineering, pemodelan, dan evaluasi machine learning dengan Python.",
    icon: "🌪️",
    tags: ["Python", "Machine Learning", "Random Forest", "Scikit-Learn", "Pandas"],
    year: "2025",
    slug: "terraguard-ai",
    detailComponent: TerraGuardAIDetail,
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

function Project3DCard({
  project,
  index,
  isInView,
  onSelect,
}: {
  project: Project;
  index: number;
  isInView: boolean;
  onSelect: (p: Project) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isReverse = index % 2 === 1;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Subtle, elegant 3D tilt for large cards
    const rotateX = ((y - height / 2) / height) * -8;
    const rotateY = ((x - width / 2) / width) * 8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="project-card-wrap">
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`project-card ${isReverse ? "reverse" : ""}`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        {/* Visual / Mockup Column (Floating Depth: translateZ 45px) */}
        <div
          className="project-visual-col"
          style={{ transform: "translateZ(45px)", transformStyle: "preserve-3d" }}
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
        </div>

        {/* Details / Content Column (Floating Depth: translateZ 30px) */}
        <div
          className="project-content-col"
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        >
          <div className="project-meta-row">
            <span className="project-year-tag font-mono">{project.year}</span>
            <span className="project-role-badge font-mono">{project.role}</span>
          </div>

          <h3
            className="project-card-title"
            style={{ transform: "translateZ(20px)" }}
          >
            {project.title}
          </h3>
          <p
            className="project-card-desc"
            style={{ transform: "translateZ(15px)" }}
          >
            {project.shortDescription}
          </p>

          {/* Technology Tags */}
          <div
            className="project-tag-list"
            style={{ transform: "translateZ(20px)" }}
          >
            {project.tags.map((tag) => (
              <span key={tag} className="tech-badge font-mono">
                {tag}
              </span>
            ))}
          </div>

          {/* Actions: Case Study Modal & External Links */}
          <div
            className="project-action-row"
            style={{ transform: "translateZ(30px)" }}
          >
            {project.detailComponent && (
              <button
                onClick={() => onSelect(project)}
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
                className="btn-circular-link cursor-pointer"
                aria-label="GitHub Repository"
                title="GitHub Repository"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Laravel", "Machine Learning", "Python", "PostgreSQL", "Flutter"];

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

        {/* 3D Stacked Project Cards: 1 Card Per Row (Grid 1) with 3D Perspective */}
        <div className="projects-stack">
          {filteredProjects.map((project, index) => (
            <Project3DCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
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
