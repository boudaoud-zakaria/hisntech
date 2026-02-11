import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";

// Vite/React way to handle dynamic loading
const NetworkBackground = lazy(() => import("./NetworkBackground"));

export function HomePage() {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <div className="h-screen w-full bg-[#0A0E27] text-white font-sans overflow-hidden relative flex flex-col">

            {/* Background Section */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/homePageBackground.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-100"
                />
                {/* Networking Animation wrapped in Suspense for Vite */}
                <Suspense fallback={null}>
                    <NetworkBackground />
                </Suspense>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27]/40 via-[#0A0E27]/80 to-[#0A0E27]" />
            </div>

            {/* Navbar */}
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative z-50 h-20 border-b border-white/5 bg-[#0A0E27]/40 backdrop-blur-md px-6 md:px-20"
            >
                <div className="max-w-full mx-auto h-full flex items-center justify-between">
                    <img src="/logo (1).svg" alt="HISNTECH Logo" className="h-10 w-auto" />
                    <Link to="/login">
                        <Button className="bg-[#007BFF] hover:bg-[#0069d9] text-white rounded-md px-7 h-10 text-sm font-bold transition-transform active:scale-95">
                            Log in
                        </Button>
                    </Link>
                </div>
            </motion.nav>

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto flex flex-col items-center"
                >
                    {/* Logo with Glow Pulse */}
                    <motion.div
                        variants={fadeInUp}
                        animate={{ filter: ["drop-shadow(0 0 10px #3B92FF44)", "drop-shadow(0 0 20px #3B92FF66)", "drop-shadow(0 0 10px #3B92FF44)"] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="mb-8"
                    >
                        <img src="/logo (2).svg" alt="HISNTECH Brand" className="w-56 md:w-72 h-auto" />
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl text-[#3B92FF] font-bold mb-6 tracking-tight">
                        Secure your Digital Frontier
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-300/80 max-w-2xl mb-10 font-light">
                        Advanced threat intelligence and automated response for the modern SOC enterprise.
                        Experience the future of cybersecurity with our AI-driven platform.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 w-full justify-center">
                        <Button variant="outline" className="border-white/20 bg-transparent hover:bg-white/5 text-white w-full md:w-48 h-12">
                            Request a Demo
                        </Button>
                        <Link to="/login" className="w-full md:w-48">
                            <Button className="bg-[#007BFF] hover:bg-[#0069d9] w-full h-12 font-bold shadow-lg shadow-blue-500/20">
                                Log in
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 h-14 flex items-center justify-center">
                <p className="text-gray-500 text-xs">
                    © HisnTech 2026 · Privacy Policy · Security Policy
                </p>
            </footer>
        </div>
    );
}