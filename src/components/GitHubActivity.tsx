import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import ParallaxSection from "./elements/ParallaxSection";
import GradientText from "./elements/GradientText";

import "./GitHubActivity.css";

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

export default function GitHubActivity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  // Custom theme for the GitHub Calendar to match the portfolio's cosmic/dark theme
  const explicitTheme = {
    light: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section id="github-activity" className="github-activity" ref={ref}>
      <ParallaxSection offset={50}>
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="section-title">
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="inline-block"
            >
              Contribution
            </GradientText>
            </h2>
            <p className="section-subtitle">My contributions & coding stats</p>
          </motion.div>

          <div className="github-content">
            {/* GitHub Calendar Heatmap */}
            <motion.div
              className="github-calendar-container glass-card"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <h3 className="card-title">Contribution Graph</h3>
              <div className="calendar-wrapper">
                <GitHubCalendar
                  username="fikri210604"
                  colorScheme="dark"
                  theme={explicitTheme}
                  blockSize={15}
                  blockMargin={5}
                  fontSize={14}
                />
              </div>
            </motion.div>

            {/* GitHub Stats Cards */}
            <motion.div
              className="github-stats-container"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div className="stat-card glass-card" variants={fadeInUp}>
                <h3 className="card-title">Activity Overview</h3>
                <a
                  href="https://github.com/fikri210604"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=fikri210604&show_icons=true&theme=onedark&hide_border=true&bg_color=0D1117"
                    alt="GitHub Activity Overview"
                    className="stat-image"
                  />
                </a>
              </motion.div>

              <motion.div className="stat-card glass-card" variants={fadeInUp}>
                <h3 className="card-title">Top Languages</h3>
                <a
                  href="https://github.com/fikri210604"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=fikri210604&layout=compact&theme=onedark&hide_border=true&bg_color=0D1117"
                    alt="Top Languages"
                    className="stat-image"
                  />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
}
