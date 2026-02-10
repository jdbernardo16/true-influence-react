import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
export function HeroSection() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#1a1a4e]">
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#232360] to-[#1a1a4e] opacity-50" />

            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
                {/* Logo Mark */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                    }}
                    className="mb-12"
                >
                    <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-[#d4952a] blur-[60px] opacity-10 rounded-full" />
                        <img
                            src="/icononly_transparent_nobuffer.png"
                            alt="Logo Mark"
                            className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10 animate-pulse-slow"
                        />
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: "easeOut",
                    }}
                    className="text-[#d4952a] text-2xl md:text-4xl font-medium tracking-[0.2em] uppercase mb-4"
                >
                    The True Influence Method
                </motion.h1>

                {/* Tagline 1 */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.8,
                        ease: "easeOut",
                    }}
                    className="text-[#faf8f5] font-serif italic text-xl md:text-3xl mb-8 font-light"
                >
                    From Speaker to Leader
                </motion.p>

                {/* Tagline 2 */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.1,
                        ease: "easeOut",
                    }}
                    className="text-[#e8a838] text-xs md:text-sm uppercase tracking-[0.3em] font-medium"
                >
                    Joanna Horton McPherson
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 2,
                    duration: 1,
                }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <ChevronDown className="text-[#d4952a] w-6 h-6 opacity-60" />
                </motion.div>
            </motion.div>
        </section>
    );
}
