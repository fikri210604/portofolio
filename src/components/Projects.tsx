import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ParallaxSection from "./elements/ParallaxSection";
import SpotlightCard from "./elements/SpotlightCard";

import "./Projects.css";
import GradientText from "./elements/GradientText";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "CrossKnot Hacks",
    description: "Design",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team collaboration features, and analytics.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
  },
  {
    title: "Weather Dashboard",
    description:
      "Interactive weather dashboard with detailed forecasts, historical data, and beautiful visualizations.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "API Integration", "Charts", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2022",
  },
  {
    title: "Portfolio Generator",
    description:
      "Automated portfolio website generator with customizable themes and easy CMS integration.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    tags: ["Astro", "React", "Markdown", "CMS"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
  },
  {
    title: "AI Chatbot",
    description:
      "Intelligent chatbot powered by AI with natural language processing and context awareness.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "OpenAI", "Flask", "React"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
  },
  {
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for social media metrics with data visualization and insights generation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
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

  const categories = ["All", "React", "Next.js", "Node.js", "Python"];

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
                layout
                className="project-card-wrapper"
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


                    {/* Hover overlay for links */}
                    <div className="project-overlay">
                      <div className="project-links">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>🔗</span> View Project
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>

                {/* Text content placed OUTSIDE the spotlight card, at the bottom */}
                <div className="project-bottom-info">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-category">
                      {project.description}
                    </span>
                    <span className="project-year">{project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>
    </section>
  );
}
