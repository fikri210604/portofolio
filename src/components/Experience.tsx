import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ParallaxSection from "./elements/ParallaxSection";
import {

  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaServer,
  FaMapMarkedAlt,
  FaChalkboardTeacher,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiLaravel, SiLaragon, SiSagemath } from "react-icons/si";
import { GrLinkNext } from "react-icons/gr";
import GradientText from "./elements/GradientText";
import "./Experience.css";

const experiences = [
  {
    id: 1,
    title: "Lead Developer & System Architect",
    company: "SIGAP-MBG (Sistem Pemantauan Penyedia Pangan Nasional)",
    date: "2026 - Present",
    description:
      "Merancang arsitektur sistem berskala nasional untuk standardisasi penyedia pangan. Mengimplementasikan integrasi Machine Learning untuk verifikasi lisensi otomatis dan pemantauan rantai pasok berbasis AI-Augmented Software Engineering.",
    icon: <FaServer />,
    type: "work",
  },
  {
    id: 2,
    title: "Full-Stack & GIS Engineer (Project)",
    company: "PT PLN (Persero) UIP3B Sumatera UPT Tanjung Karang",
    date: "2026",
    description:
      "Mengembangkan dashboard geospasial untuk pemantauan anomali jaringan transmisi listrik. Mengoptimalkan rendering data spatiotemporal menggunakan LeafletJS dan infrastruktur web modern untuk pemantauan real-time.",
    icon: <FaMapMarkedAlt />,
    type: "work",
  },
  {
    id: 3,
    title: "Teaching Assistant (Asisten Dosen)",
    company:
      "Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Lampung",
    date: "2023 - 2025",
    description: (
      <div className="exp-description-container">
        <p className="exp-description-text">
          Membangun fondasi rekayasa komputasi bagi mahasiswa tingkat sarjana
          dengan mengorkestrasi sesi praktikum terstruktur. Evaluasi
          pembelajaran difokuskan pada optimasi algoritma komputasi, perancangan
          arsitektur perangkat lunak, dan implementasi metodologi berorientasi
          objek yang mematuhi standar industri:
        </p>
        <div className="exp-sub-grid">
          <div className="exp-sub-card theme-pink">
            <span className="exp-sub-card-badge">Present</span>
            <div className="exp-sub-card-header">
              <span className="exp-sub-card-icon">
                <SiLaravel />
                <SiLaragon />
              </span>
              <h5 className="exp-sub-card-title">Pemrograman Web Lanjut</h5>
            </div>
            <p className="exp-sub-card-text">
              Rekayasa arsitektur Client-Server Laravel, integrasi PostgreSQL Database,
              implementasi RESTful API, dan kapabilitas Full-Stack.
            </p>
            <div className="exp-sub-card-credential">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="exp-sub-card-credential-link">
                <GrLinkNext />
                See Credentials
              </a>
            </div>
          </div>

          <div className="exp-sub-card theme-purple">
            <span className="exp-sub-card-badge">2025</span>
            <div className="exp-sub-card-header">
              <span className="exp-sub-card-icon">
                <FaJava />
              </span>
              <h5 className="exp-sub-card-title">Pemrograman Berorientasi Objek</h5>
            </div>
            <p className="exp-sub-card-text">
              Pengembangan sistem berorientasi objek dengan Java, implementasi Design Patterns (GoF), object-oriented programming (OOP), dan kepatuhan terhadap prinsip SOLID.
            </p>
            <div className="exp-sub-card-credential">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="exp-sub-card-credential-link">
                <GrLinkNext />
                See Credentials
              </a>
            </div>
          </div>

          <div className="exp-sub-card theme-blue">
            <span className="exp-sub-card-badge">2025</span>
            <div className="exp-sub-card-header">
              <span className="exp-sub-card-icon">
                <FaPython />
              </span>
              <h5 className="exp-sub-card-title">Struktur Data & Algoritma</h5>
            </div>
            <p className="exp-sub-card-text">
              Analisis kompleksitas asimtotik O(n log n) dan manajemen alokasi
              memori dinamis, implementasi algoritma pencarian dan pengurutan dengan Python,
              serta struktur data fundamental (linked lists, trees, graphs). 
            </p>
            <div className="exp-sub-card-credential">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="exp-sub-card-credential-link">
                <GrLinkNext />
                See Credentials
              </a>
            </div>
          </div>

          <div className="exp-sub-card theme-cyan">
            <span className="exp-sub-card-badge">2024</span>
            <div className="exp-sub-card-header">
              <span className="exp-sub-card-icon">
                <SiSagemath />
              </span>
              <h5 className="exp-sub-card-title">Matematika Komputasi</h5>
            </div>
            <p className="exp-sub-card-text">
              Himpunan, fungsi, turunan, integral, dan logika diskrit sebagai landasan model Machine Learning dan komputasi spasial.
            </p>
            <div className="exp-sub-card-credential">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="exp-sub-card-credential-link">
                <GrLinkNext />
                See Credentials
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
    icon: <FaChalkboardTeacher />,
    type: "education",
  },
  {
    id: 4,
    title: "Undergraduate Student in Computer Science",
    company: "Universitas Lampung",
    date: "2022 - Present",
    description:
      "Mendalami algoritma tingkat lanjut, rekayasa perangkat lunak (Clean Architecture), dan eksplorasi Data Science/Machine Learning untuk penyelesaian masalah komputasi terapan.",
    icon: <FaGraduationCap />,
    type: "education",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const rightItemVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="experience" className="experience-section">
      <ParallaxSection offset={60}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title pt-16">
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="inline-block"
            >
              Experience <span className="text-white"> & </span>Education
            </GradientText>
          </h2>
          <div
            className="section-line"
            style={{
              margin: "0 auto",
              width: "60px",
              height: "4px",
              background: "linear-gradient(90deg, #5227FF, #FF9FFC)",
              borderRadius: "2px",
              marginTop: "10px",
            }}
          ></div>
        </motion.div>

        <div className="timeline-container" ref={containerRef}>
          <div className="timeline-line-bg"></div>

          <motion.div
            className="timeline-line"
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
          ></motion.div>

          <div className="timeline-items">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  className={`timeline-item ${isLeft ? "left" : "right"}`}
                  variants={isLeft ? itemVariants : rightItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-150px" }}
                >
                  <div className="timeline-dot">
                    <div className="timeline-icon">{exp.icon}</div>
                  </div>
                  <div className="timeline-content cosmic-card-exp">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                    <span className="timeline-date">{exp.date}</span>
                    <div className="timeline-description">{exp.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
}
