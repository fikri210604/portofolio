import './TechNetwork.css';

import { FaPython, FaDocker, FaAws, FaFigma, FaNodeJs, FaVuejs, FaGitAlt, FaPhp, FaJava } from 'react-icons/fa';
import { FaFlutter } from 'react-icons/fa6';
import { SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiNextdotjs, SiAstro, SiPostgresql, SiMysql, SiGnubash, SiHtml5, SiCss, SiLaravel, SiDart, SiCplusplus} from 'react-icons/si';

const row1 = [
    { name: 'React', icon: <SiReact /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'HTML/CSS', icon: <div style={{ display: 'flex', gap: '4px' }}><SiHtml5 /><SiCss /></div> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Astro', icon: <SiAstro /> },
    { name: 'Laravel', icon: <SiLaravel /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Flutter', icon: <FaFlutter /> }

];

const row2 = [
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Git/Bash', icon:<div style={{ display: 'flex', gap: '4px' }}><FaGitAlt /><SiGnubash /></div> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Vue', icon: <FaVuejs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Dart', icon: <SiDart />},
    { name: 'C++', icon: <SiCplusplus />},
    { name: 'Java', icon: <FaJava />},

];

export default function TechNetwork() {
    return (
        <div className="tech-network-container">
            <div className="marquee-track fade-sides">
                {[0, 1].map((copyIdx) => (
                    <ul 
                        className="marquee-list" 
                        key={copyIdx} 
                        aria-hidden={copyIdx > 0}
                        style={{ '--duration': '35s' } as React.CSSProperties}
                    >
                        {row1.map((tech) => (
                            <li key={tech.name} className="tech-item-horizontal">
                                <span className="tech-item-icon">{tech.icon}</span>
                                <span className="tech-item-name">{tech.name}</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
            <div className="marquee-track fade-sides">
                {[0, 1].map((copyIdx) => (
                    <ul 
                        className="marquee-list reverse" 
                        key={copyIdx} 
                        aria-hidden={copyIdx > 0}
                        style={{ '--duration': '40s' } as React.CSSProperties}
                    >
                        {row2.map((tech) => (
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
