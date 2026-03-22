import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";
import './SpaceParticles.css';

export default function SpaceParticles() {
    const [init, setInit] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile for performance
        setIsMobile(window.innerWidth < 768);

        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = useCallback(async (container?: Container) => {
        console.log("Particles loaded", container);
    }, []);

    if (!init) {
        return null;
    }

    // Reduce particles on mobile, but don't disable completely
    const particleCount = isMobile ? 15 : 30;
    const particleSpeed = isMobile ? 0.4 : 0.6;

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                        },
                        onHover: {
                            enable: false,
                        },
                        resize: {
                            enable: true,
                        } as any,
                    },
                },
                particles: {
                    color: {
                        value: ["#ffffff", "#00d4ff"],
                    },
                    links: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: true,
                        speed: particleSpeed,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1500,
                        } as any,
                        value: particleCount,
                    },
                    opacity: {
                        value: { min: 0.2, max: 0.6 },
                        animation: {
                            enable: true,
                            speed: 0.5,
                            sync: false,
                        } as any,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
