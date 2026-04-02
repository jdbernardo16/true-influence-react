import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function CourseHero() {
    return (
        <section className="relative min-h-[80vh] flex items-center">
            <div className="absolute inset-0">
                <img
                    src="/carousel/img1.webp"
                    alt="True Influence Method"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a4e]/70 via-[#1a1a4e]/50 to-[#1a1a4e]" />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
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
                >
                    The leadership path from
                    <br />
                    self-doubt to global influence
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-[#faf8f5]/80 font-light leading-relaxed max-w-2xl mx-auto mb-10"
                >
                    Through five phases of training, leaders move from discovering their voice to building a message that shapes their brand, influences the people they lead, and leaves a meaningful legacy.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="text-[#d4952a] w-6 h-6 opacity-60" />
                </motion.div>
            </motion.div>
        </section>
    );
}
