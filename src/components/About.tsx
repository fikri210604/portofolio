import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ParallaxSection from "./elements/ParallaxSection";
import ProfileCard from "./elements/ProfileCard";
import TechNetwork from "./TechNetwork";
import GradientText from "./elements/GradientText";
import { IoLocationSharp } from "react-icons/io5";
import "./About.css";

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


export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section id="about" className="about" ref={ref}>
      <ParallaxSection offset={80}>
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
                About Me
              </GradientText>
            </motion.h2>
            <p className="section-subtitle">Architecting Intelligent Systems</p>
          </motion.div>

          <div className="about-content">
            <motion.div
              className="about-image-container"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <ProfileCard
                avatarUrl="/profile.png"
                iconUrl="/favicon.svg"
                grainUrl=""
                miniAvatarUrl="/profile.png"
                name="Ahmad Fikri Hanif"
                title="Software Engineer & AI Enthusiast"
                handle="Fikri"
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                behindGlowSize="50%"
                onContactClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </motion.div>

            <motion.div
              className="about-text"
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
              <motion.p variants={fadeInUp}>
                Hello! I am a Computer Science student at{" "}
                <strong>Universitas Lampung</strong> on{" "}
                <strong>6th semester</strong> with a strong specialization in{" "}
                <strong>Full-Stack Web Development, Machine Learning</strong>, and{" "}
                <strong>Artificial Intelligence</strong>.
              </motion.p>

              <motion.p variants={fadeInUp}>
                My engineering philosophy revolves around building scalable,
                secure, and modular applications. I leverage modern frameworks
                like React, Next.js, and Laravel, adhering strictly to{" "}
                <em>Clean Architecture</em> principles to solve complex
                multidimensional problems, such as spatiotemporal data rendering
                for real-time utility monitoring.
              </motion.p>

              <motion.p variants={fadeInUp}>
                Currently, my focus lies in the intersection of software
                engineering and machine learning. From developing enterprise-level
                conceptualizing AI-augmented national supply chain monitoring
                systems, I am driven by the optimization of algorithms and the
                implementation of robust data pipelines.
              </motion.p>

              <motion.div className="about-highlights" variants={fadeInUp}>
                <div className="highlight-item">
                  <span className="highlight-icon">
                    <img src="/Logo_UnivLampung.png" alt="" />
                  </span>
                  <div>
                    <h4>Education</h4>
                    <p>
                      <strong>6th Semester</strong> Computer Science, Universitas
                      Lampung
                    </p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">
                    <IoLocationSharp />
                  </span>
                  <div>
                    <h4>Location</h4>
                    <p>Kedaton, Bandar lampung, Lampung, Indonesia</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Technology Network */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h3 className="tech-network-title">
              <GradientText
                colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                animationSpeed={8}
                showBorder={false}
                className="inline-block"
              >
                Technology Ecosystem
              </GradientText>
            </h3>
          </motion.div>
          <TechNetwork />
        </div>
      </ParallaxSection>
    </section>
  );
}
