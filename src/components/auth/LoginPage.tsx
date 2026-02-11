import { useState, Suspense, lazy } from "react"; // Added Suspense and lazy
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";

// Lazy load the animation component
const NetworkBackground = lazy(() => import("../home/NetworkBackground"));

export function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        setTimeout(() => {
            if (email === "admin@hisntech.me" && password === "admin123") {
                navigate("/monitoring");
            } else {
                setError("Invalid credentials. Please try again.");
                setIsLoading(false);
            }
        }, 1000);
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
                {/* Networking Animation added here */}
                <Suspense fallback={null}>
                    <NetworkBackground />
                </Suspense>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27]/40 via-[#0A0E27]/60 to-[#0A0E27]" />
            </div>

            {/* Navbar */}
            <nav className="relative z-50 px-6 md:px-20 h-20 flex-none border-b border-white/5 bg-[#0A0E27]/50 backdrop-blur-md">
                <div className="max-w-full mx-auto h-full flex items-center justify-between">
                    <Link to="/">
                        <img src="/logo (1).svg" alt="HISNTECH Logo" className="h-10 w-auto" />
                    </Link>
                </div>
            </nav>

            {/* Main Login Card Container */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-6">
                <div className="w-full max-w-[480px] bg-[#161B3D]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl">

                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold mb-3 tracking-tight">Welcome back</h1>
                        <p className="text-gray-400 text-sm font-light">Log in to manage your enterprise security.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400 flex items-center gap-2 uppercase tracking-wider ml-1">
                                <Mail size={14} /> Email
                            </label>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-[#0A0E27]/60 border-white/10 h-12 rounded-xl focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400 flex items-center gap-2 uppercase tracking-wider ml-1">
                                <Lock size={14} /> Password
                            </label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-[#0A0E27]/60 border-white/10 h-12 rounded-xl pr-12 focus:ring-[#007BFF] transition-all"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <p className="text-red-400 text-xs text-center font-medium bg-red-400/10 py-2 rounded-lg border border-red-400/20">
                                {error}
                            </p>
                        )}

                        <div className="space-y-4 pt-2">
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#007BFF] hover:bg-[#0069d9] text-white h-12 rounded-xl font-bold text-base shadow-lg shadow-blue-900/30 transition-all flex items-center justify-center gap-2"
                            >
                                {isLoading ? <Loader2 className="animate-spin" size={20} /> : "Log in"}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/5 text-center">
                        <p className="text-[11px] text-gray-500 leading-relaxed uppercase tracking-widest">
                            By signing in, you agree to our <br />
                            <span className="text-gray-400 hover:underline cursor-pointer">Terms And Conditions</span>
                        </p>
                    </div>
                </div>
            </main>

            <footer className="relative z-10 h-14 flex-none flex items-center justify-center">
                <p className="text-gray-500 text-[10px] md:text-[11px] tracking-widest opacity-80 uppercase">
                    © HisnTech 2026 · Privacy Policy · Security Policy
                </p>
            </footer>
        </div>
    );
}