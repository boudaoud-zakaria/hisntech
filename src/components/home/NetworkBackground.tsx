import { useEffect, useState, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// 1. Wrap the entire component in memo
const NetworkBackground = memo(() => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            className="absolute inset-0 z-0"
            options={{
                // 2. IMPORTANT: Disable fullScreen so it respects the parent container
                fullScreen: { enable: false },
                background: { color: { value: "transparent" } },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" },
                        resize: { enable: true },
                    },
                    modes: {
                        grab: { distance: 180, links: { opacity: 1 } },
                    },
                },
                particles: {
                    color: { value: "#3B92FF" },
                    links: {
                        color: "#3B92FF",
                        distance: 150,
                        enable: true,
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        outModes: { default: "out" },
                    },
                    number: {
                        density: { enable: true, width: 800, height: 800 },
                        value: 70,
                    },
                    opacity: { value: 0.7 },
                    shape: { type: "circle" },
                    size: { value: { min: 2, max: 3 } },
                },
                detectRetina: true,
            }}
        />
    );
});

// Set display name for easier debugging
NetworkBackground.displayName = "NetworkBackground";

export default NetworkBackground;