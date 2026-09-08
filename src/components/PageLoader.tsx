import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './PageLoader.css';

const BOOT_LINES = [
    { at: 0, text: 'init portfolio.sys' },
    { at: 25, text: 'mount /assets' },
    { at: 55, text: 'load profile.dat' },
    { at: 85, text: 'ready.' },
];

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress — angka bersifat dekoratif, dibuat cepat
        // dan sekali tampil supaya tidak menahan halaman lebih lama dari load asli.
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 400);
                    return 100;
                }
                return prev + 15;
            });
        }, 50);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="page-loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="loader-content">
                        <div className="terminal-boot">
                            <div className="terminal-boot-bar">
                                <span className="tdot r" />
                                <span className="tdot y" />
                                <span className="tdot g" />
                                <span className="terminal-boot-name">boot.sh</span>
                            </div>

                            <div className="terminal-boot-body">
                                {BOOT_LINES.map((line) => {
                                    const active = progress >= line.at;
                                    const done = progress >= line.at + 20 || progress >= 100;
                                    return (
                                        <motion.p
                                            key={line.text}
                                            className="terminal-boot-line"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: active ? 1 : 0.15 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <span className="terminal-boot-prompt">$</span> {line.text}
                                            {active && (
                                                <span className={`terminal-boot-status ${done ? 'ok' : ''}`}>
                                                    {done ? ' ....... ok' : ' ...'}
                                                </span>
                                            )}
                                        </motion.p>
                                    );
                                })}
                            </div>

                            <div className="progress-bar-container">
                                <div className="progress-bar">
                                    <motion.div
                                        className="progress-fill"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                                <p className="progress-text">{progress}%</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
