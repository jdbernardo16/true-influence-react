import { motion } from "framer-motion";
import { ChevronDown, BookOpen, Sparkles } from "lucide-react";

export function CombinedHeroSection() {
    return (
        <section
            className="relative min-h-[90vh] flex items-center"
            aria-labelledby="hero-heading"
        >
            <div className="absolute inset-0" aria-hidden="true">
                <img
                    src="/carousel/img1.webp"
                    alt=""
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a4e]/70 via-[#1a1a4e]/50 to-[#1a1a4e]" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase">
                        The True Influence Method™
                    </span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-[#faf8f5] mb-6"
                    id="hero-heading"
                >
                    Two Paths to
                    <br />
                    <span className="text-[#d4952a]">Transformation</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-[#faf8f5]/80 font-light leading-relaxed max-w-3xl mx-auto mb-12"
                >
                    Choose your journey: progress through five phases of
                    training to build lasting influence, or immerse yourself in
                    a transformative 3-day retreat experience.
                </motion.p>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
                    role="list"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl p-8 hover:border-[#d4952a]/50 transition-all duration-300"
                        role="listitem"
                    >
                        <div
                            className="w-16 h-16 bg-[#d4952a]/20 rounded-full flex items-center justify-center mx-auto mb-6"
                            aria-hidden="true"
                        >
                            <BookOpen className="w-8 h-8 text-[#d4952a]" />
                        </div>
                        <h3 className="font-serif text-2xl text-[#faf8f5] mb-3">
                            The Course
                        </h3>
                        <p className="text-[#faf8f5]/70 font-light leading-relaxed mb-4">
                            Five phases of progressive training to discover your
                            voice, build your message, and leave a meaningful
                            legacy.
                        </p>
                        <span className="text-[#d4952a] text-sm font-medium">
                            Start at any level
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl p-8 hover:border-[#d4952a]/50 transition-all duration-300"
                        role="listitem"
                    >
                        <div
                            className="w-16 h-16 bg-[#d4952a]/20 rounded-full flex items-center justify-center mx-auto mb-6"
                            aria-hidden="true"
                        >
                            <Sparkles className="w-8 h-8 text-[#d4952a]" />
                        </div>
                        <h3 className="font-serif text-2xl text-[#faf8f5] mb-3">
                            The Retreat
                        </h3>
                        <p className="text-[#faf8f5]/70 font-light leading-relaxed mb-4">
                            A transformative 3-day immersive experience with
                            focused work, partner feedback, and live stage
                            performance.
                        </p>
                        <span className="text-[#d4952a] text-sm font-medium">
                            All levels welcome
                        </span>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                aria-hidden="true"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
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
