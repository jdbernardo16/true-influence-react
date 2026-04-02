import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";

export function RetreatCtaSection() {
    return (
        <section className="py-20 md:py-28 bg-[#1a1a4e]">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-16 h-16 bg-[#d4952a]/20 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Award className="w-8 h-8 text-[#d4952a]" />
                    </div>
                    <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                        Your Next Step
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                        Ready to Transform?
                    </h2>
                    <p className="text-lg text-[#faf8f5]/80 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                        Join the True Influence Retreat and experience three days of focused work, partner feedback, and stage performance that will elevate your leadership presence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="/#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            <span className="uppercase tracking-wider">
                                Apply Now
                            </span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-12 p-6 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-xl"
                    >
                        <p className="text-[#faf8f5]/60 font-light italic text-sm">
                            "This retreat isn't just about learning to speak - it's about discovering the power of your voice and learning to use it with impact."
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
