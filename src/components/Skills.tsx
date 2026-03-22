import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

const skills = [
    { name: 'React', icon: '⚛️', level: 90, category: 'Frontend' },
    { name: 'TypeScript', icon: '📘', level: 85, category: 'Frontend' },
    { name: 'JavaScript', icon: '💛', level: 95, category: 'Frontend' },
    { name: 'HTML/CSS', icon: '🎨', level: 90, category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', level: 85, category: 'Backend' },
    { name: 'Python', icon: '🐍', level: 80, category: 'Backend' },
    { name: 'PostgreSQL', icon: '🐘', level: 75, category: 'Database' },
    { name: 'MongoDB', icon: '🍃', level: 80, category: 'Database' },
    { name: 'Docker', icon: '🐳', level: 70, category: 'DevOps' },
    { name: 'Git', icon: '📦', level: 90, category: 'Tools' },
    { name: 'AWS', icon: '☁️', level: 65, category: 'Cloud' },
    { name: 'Next.js', icon: '▲', level: 85, category: 'Framework' },
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

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });

    return (
        <section id="skills" className="skills" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                >
                    <h2>Skills & Technologies</h2>
                    <p className="section-subtitle">My technical expertise</p>
                </motion.div>

                <motion.div
                    className="skills-grid"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.08,
                            },
                        },
                    }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card glass-card"
                            variants={fadeInUp}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <h3 className="skill-name">{skill.name}</h3>
                            <p className="skill-category">{skill.category}</p>

                            <div className="skill-progress-container">
                                <div className="skill-progress-bg">
                                    <motion.div
                                        className="skill-progress-fill"
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                        transition={{
                                            duration: 1,
                                            delay: index * 0.08 + 0.3,
                                            ease: 'easeOut',
                                        }}
                                    />
                                </div>
                                <span className="skill-level">{skill.level}%</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
