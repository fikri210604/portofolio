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
  SiSupabase,
  SiFlutter,
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
  { id: 1, title: 'FASTAPI', category: 'Backend & Systems', icon: SiFastapi },
  { id: 2, title: 'PYTHON', category: 'AI & Data Science', icon: SiPython },
  { id: 3, title: 'LARAVEL', category: 'Backend Architecture', icon: SiLaravel },
  { id: 4, title: 'POSTGRESQL', category: 'Database Telemetry', icon: SiPostgresql },
  { id: 5, title: 'NEXT.JS', category: 'Modern Web Framework', icon: SiNextdotjs },
  { id: 6, title: 'TYPESCRIPT', category: 'Full-Stack Engineering', icon: SiTypescript },
  { id: 7, title: 'SCIKIT-LEARN', category: 'Machine Learning', icon: SiScikitlearn },
  { id: 8, title: 'SUPABASE', category: 'Cloud Infrastructure', icon: SiSupabase },
  { id: 9, title: 'FLUTTER', category: 'Cross-Platform Mobile', icon: SiFlutter },
  { id: 10, title: 'TAILWIND CSS', category: 'Design Systems', icon: SiTailwindcss },
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
            <span>03. TECHNOLOGY & TOOLCHAIN</span>
          </div>
          <h2 className="skills-title">Verified Capabilities &amp; Stack.</h2>
          <p className="skills-subtitle mx-auto">
            Interactive overview of core technologies deployed across production systems, 
            research, and client platforms.
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
