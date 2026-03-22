import './TechNetwork.css';

const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'HTML/CSS', icon: '🎨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📦' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Redux', icon: '🔄' },
    { name: 'Vue', icon: '🟩' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Astro', icon: '🚀' },
    { name: 'Bash', icon: '🐚' },
];

export default function TechNetwork() {
    return (
        <div className="tech-network-container">
            <div className="marquee-track fade-sides">
                {/* Render two copies so the loop is seamless */}
                {[0, 1].map((copyIdx) => (
                    <ul className="marquee-list" key={copyIdx} aria-hidden={copyIdx > 0}>
                        {technologies.map((tech) => (
                            <li key={tech.name} className="tech-item-horizontal">
                                <span className="tech-item-icon">{tech.icon}</span>
                                <span className="tech-item-name">{tech.name}</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
            <div className="marquee-track fade-sides">
                {/* Render two copies so the loop is seamless */}
                {[0, 1].map((copyIdx) => (
                    <ul className="marquee-list" key={copyIdx} aria-hidden={copyIdx < 0}>
                        {technologies.map((tech) => (
                            <li key={tech.name} className="tech-item-horizontal">
                                <span className="tech-item-icon">{tech.icon}</span>
                                <span className="tech-item-name">{tech.name}</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
}
