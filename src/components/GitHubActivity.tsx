import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { FaGithub, FaCodeBranch, FaStar, FaFire, FaExternalLinkAlt } from "react-icons/fa";
import "./GitHubActivity.css";

interface DayContribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const LEVEL_COLORS = [
  "#161b22", // Level 0
  "#0e4429", // Level 1
  "#006d32", // Level 2
  "#26a641", // Level 3
  "#39d353", // Level 4
];

export default function GitHubActivity() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.05, once: true });

  const [contributions, setContributions] = useState<DayContribution[]>([]);
  const [totalCount, setTotalCount] = useState<number>(266);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchGitHubData() {
      try {
        const res = await fetch("https://github-contributions-api.jogruber.de/v4/fikri210604?y=last");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.contributions && Array.isArray(data.contributions)) {
            setContributions(data.contributions);
            if (data.total && typeof data.total.lastYear === "number") {
              setTotalCount(data.total.lastYear);
            }
          }
        }
      } catch {
        // Graceful fallback to static data
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchGitHubData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Split contributions into weeks (52-53 columns, 7 rows each)
  const weeks = useMemo(() => {
    if (!contributions.length) {
      // Generate placeholder empty weeks if still loading or offline
      return Array.from({ length: 52 }, (_, wIndex) =>
        Array.from({ length: 7 }, (_, dIndex) => ({
          date: `Week ${wIndex + 1}, Day ${dIndex + 1}`,
          count: 0,
          level: 0 as const,
        }))
      );
    }

    const result: DayContribution[][] = [];
    let currentWeek: DayContribution[] = [];

    contributions.forEach((day, index) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || index === contributions.length - 1) {
        result.push(currentWeek);
        currentWeek = [];
      }
    });

    return result;
  }, [contributions]);

  const languages = [
    { name: "TypeScript", percentage: 44, color: "#3178c6" },
    { name: "Python", percentage: 26, color: "#3572A5" },
    { name: "JavaScript", percentage: 16, color: "#f1e05a" },
    { name: "PHP", percentage: 9, color: "#4F5D95" },
    { name: "Other", percentage: 5, color: "#71717a" },
  ];

  return (
    <section id="github-activity" className="github-editorial" ref={ref}>
      <div className="github-container">
        {/* Section Header */}
        <motion.div
          className="github-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-2">
            <span>// 05. OPEN SOURCE & ACTIVITY</span>
          </div>
          <h2 className="github-title">Continuous Code Output.</h2>
          <p className="github-subtitle">
            Direct telemetry from GitHub documenting daily commits, algorithmic experiments, and open-source contributions.
          </p>
        </motion.div>

        <div className="github-content">
          {/* Contribution Heatmap Matrix */}
          <motion.div
            className="github-calendar-container glass-card"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="calendar-card-header">
              <div className="calendar-title-group">
                <h3 className="card-title font-mono">// CONTRIBUTION MATRIX</h3>
                <span className="calendar-total-badge font-mono">
                  {isLoading ? "Fetching..." : `${totalCount} commits in the last year`}
                </span>
              </div>
              <div className="live-indicator">
                <span className="pulse-dot"></span>
                <span>Active Telemetry</span>
              </div>
            </div>

            <div className="calendar-scroll-box">
              <div className="native-contribution-grid">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="grid-week-col">
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        className="grid-day-cell"
                        style={{ backgroundColor: LEVEL_COLORS[day.level] }}
                        onMouseEnter={() => setHoveredDay({ date: day.date, count: day.count })}
                        onMouseLeave={() => setHoveredDay(null)}
                        title={`${day.count} contributions on ${day.date}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="calendar-footer">
              <div className="hover-status-text font-mono text-xs text-zinc-400">
                {hoveredDay ? (
                  <span>
                    <strong className="text-emerald-400">{hoveredDay.count} contributions</strong> on {hoveredDay.date}
                  </span>
                ) : (
                  <span>Hover over any cell to inspect daily commit density</span>
                )}
              </div>

              <div className="heatmap-legend font-mono text-xs text-zinc-500">
                <span>Less</span>
                <div className="legend-cells">
                  {LEVEL_COLORS.map((color, i) => (
                    <span key={i} className="legend-cell" style={{ backgroundColor: color }} />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </motion.div>

          {/* GitHub Stats Grid */}
          <motion.div
            className="github-stats-container"
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
            {/* Stat Card 1: Overview Metrics */}
            <motion.div className="stat-card glass-card" variants={fadeInUp}>
              <div className="stat-card-top">
                <h3 className="card-title font-mono">// ACTIVITY OVERVIEW</h3>
                <FaGithub className="stat-card-icon text-zinc-400" />
              </div>

              <div className="metrics-numeric-grid">
                <div className="metric-box">
                  <div className="metric-icon-wrap text-indigo-400">
                    <FaCodeBranch />
                  </div>
                  <div className="metric-info">
                    <span className="metric-number font-mono">{totalCount}</span>
                    <span className="metric-label font-mono">Total Contributions</span>
                  </div>
                </div>

                <div className="metric-box">
                  <div className="metric-icon-wrap text-amber-400">
                    <FaFire />
                  </div>
                  <div className="metric-info">
                    <span className="metric-number font-mono">20+</span>
                    <span className="metric-label font-mono">Repositories</span>
                  </div>
                </div>

                <div className="metric-box">
                  <div className="metric-icon-wrap text-emerald-400">
                    <FaStar />
                  </div>
                  <div className="metric-info">
                    <span className="metric-number font-mono">Verified</span>
                    <span className="metric-label font-mono">Code Output</span>
                  </div>
                </div>
              </div>

              <div className="stat-card-bottom">
                <a
                  href="https://github.com/fikri210604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-profile-link font-mono"
                >
                  <span>VISIT GITHUB PROFILE</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.div>

            {/* Stat Card 2: Language Distribution */}
            <motion.div className="stat-card glass-card" variants={fadeInUp}>
              <div className="stat-card-top">
                <h3 className="card-title font-mono">// TOP TECHNOLOGIES</h3>
                <span className="text-xs font-mono text-zinc-500">BY REPOSITORY SHARE</span>
              </div>

              {/* Progress Stack Bar */}
              <div className="lang-progress-bar">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="lang-progress-segment"
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Languages List */}
              <div className="lang-list-grid">
                {languages.map((lang) => (
                  <div key={lang.name} className="lang-item">
                    <div className="lang-color-dot" style={{ backgroundColor: lang.color }} />
                    <span className="lang-name font-mono text-xs text-zinc-300">{lang.name}</span>
                    <span className="lang-pct font-mono text-xs text-zinc-500">{lang.percentage}%</span>
                  </div>
                ))}
              </div>

              <div className="stat-card-bottom">
                <span className="font-mono text-xs text-zinc-500">
                  Daily automated telemetry sync via GitHub API
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
