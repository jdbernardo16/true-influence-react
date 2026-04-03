import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

export function CombinedCtaSection() {
    return (
        <section
            className="py-20 md:py-28 bg-[#1a1a4e] relative overflow-hidden"
            aria-labelledby="cta-heading"
        >
            <div className="absolute inset-0" aria-hidden="true">
                <img
                    src="/carousel/img1.webp"
                    alt=""
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4e] via-[#1a1a4e]/90 to-[#1a1a4e]" />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                        Your Transformation Awaits
                    </span>
                    <h2
                        className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6"
                        id="cta-heading"
                    >
                        Choose Your Path Forward
                    </h2>
                    <p className="text-lg text-[#faf8f5]/80 font-light leading-relaxed max-w-3xl mx-auto">
                        Whether you're just starting or ready for advanced
                        transformation, the True Influence Method™ meets you
                        where you are.
                    </p>
                </motion.div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                    role="list"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl p-8"
                        role="listitem"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="w-12 h-12 bg-[#d4952a]/20 rounded-full flex items-center justify-center"
                                aria-hidden="true"
                            >
                                <BookOpen className="w-6 h-6 text-[#d4952a]" />
                            </div>
                            <h3 className="font-serif text-2xl text-[#faf8f5]">
                                Start the Course
                            </h3>
                        </div>
                        <p className="text-[#faf8f5]/70 font-light leading-relaxed mb-6">
                            Begin with our free training or low-ticket offer to
                            discover your true influence through five
                            progressive phases.
                        </p>
                        <motion.a
                            href="/#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer"
                        >
                            <span className="uppercase tracking-wider">
                                Get Free Training
                            </span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl p-8"
                        role="listitem"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="w-12 h-12 bg-[#d4952a]/20 rounded-full flex items-center justify-center"
                                aria-hidden="true"
                            >
                                <Sparkles className="w-6 h-6 text-[#d4952a]" />
                            </div>
                            <h3 className="font-serif text-2xl text-[#faf8f5]">
                                Join the Retreat
                            </h3>
                        </div>
                        <p className="text-[#faf8f5]/70 font-light leading-relaxed mb-6">
                            Experience three days of focused work, partner
                            feedback, and stage performance that will elevate
                            your leadership presence.
                        </p>
                        <motion.a
                            href="/#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer"
                        >
                            <span className="uppercase tracking-wider">
                                Apply Now
                            </span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <motion.a
                        href="/#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 border-2 border-[#d4952a] text-[#d4952a] hover:bg-[#d4952a]/10 px-8 py-4 rounded-full font-medium transition-all duration-300 cursor-pointer"
                    >
                        <span className="uppercase tracking-wider">
                            Schedule Consultation
                        </span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
