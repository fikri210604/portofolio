import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { RulerCarousel, type CarouselItem } from '@/components/ui/ruler-carousel';
import {
  SiFastapi,
  SiLaravel,
  SiPython,
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiScikitlearn,
  SiPandas,
  SiGit,
  SiFigma,
  SiMysql,
  SiReact,
  SiPhp,
  SiSupabase,
} from 'react-icons/si';
import './Skills.css';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const techItems: CarouselItem[] = [
  { id: 1, title: 'NEXT.JS', category: 'Modern Web Framework', icon: SiNextdotjs },
  { id: 2, title: 'SUPABASE', category: 'Database & Backend', icon: SiSupabase },
  { id: 3, title: 'PYTHON', category: 'Data & Machine Learning', icon: SiPython },
  { id: 4, title: 'LARAVEL', category: 'Backend Architecture', icon: SiLaravel },
  { id: 5, title: 'PHP', category: 'Backend Development', icon: SiPhp },
  { id: 6, title: 'TYPESCRIPT', category: 'Full-Stack Engineering', icon: SiTypescript },
  { id: 7, title: 'FASTAPI', category: 'REST API & ML Services', icon: SiFastapi },
  { id: 8, title: 'POSTGRESQL', category: 'Relational Database', icon: SiPostgresql },
  { id: 9, title: 'MYSQL', category: 'Database Systems', icon: SiMysql },
  { id: 10, title: 'SCIKIT-LEARN', category: 'Applied Machine Learning', icon: SiScikitlearn },
  { id: 11, title: 'PANDAS', category: 'Data Science & Analysis', icon: SiPandas },
  { id: 12, title: 'TAILWIND CSS', category: 'Design Systems', icon: SiTailwindcss },
  { id: 13, title: 'GIT & GITHUB', category: 'Version Control & CI', icon: SiGit },
  { id: 14, title: 'FIGMA', category: 'UI/UX & Prototyping', icon: SiFigma },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  return (
    <section id="skills" className="skills-editorial" ref={ref}>
      <div className="skills-container">
        {/* Section Header */}
        <motion.div
          className="skills-header text-center mx-auto"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-4">
            <span>03. TECHNOLOGY &amp; TOOLCHAIN</span>
          </div>
          <h2 className="skills-title">Core Engineering Stack.</h2>
          <p className="skills-subtitle mx-auto">
            Practical technology toolchain deployed across shipped systems, enterprise workflows, mobile apps, and applied machine learning research.
          </p>
        </motion.div>

        {/* Clean, Focused Interactive Carousel */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="w-full mt-4"
        >
          <RulerCarousel originalItems={techItems}
            autoplay={true}
            autoplayInterval={1000}
          />
        </motion.div>
      </div>
    </section>
  );
}
