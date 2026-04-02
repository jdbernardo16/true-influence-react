import { motion } from "framer-motion";
import { ArrowRight, Target } from "lucide-react";
import { targetAudience } from "../../data/courseData";

export function TargetAudienceSection() {
    return (
        <section className="py-20 md:py-28 bg-[#1a1a4e]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                        Who Is This For
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                        You already know.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {targetAudience.map((item, groupIndex) => (
                        <motion.div
                            key={groupIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: groupIndex * 0.2 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-[#d4952a]/20 rounded-full flex items-center justify-center">
                                    <Target className="w-6 h-6 text-[#d4952a]" />
                                </div>
                                <h3 className="font-serif text-2xl text-[#faf8f5]">
                                    {item.who}
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {item.details.map((detail, detailIndex) => (
                                    <motion.div
                                        key={detailIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: (groupIndex * 0.2) + (detailIndex * 0.1),
                                        }}
                                        className="flex items-start gap-3 p-4 bg-[#faf8f5]/5 rounded-xl hover:bg-[#faf8f5]/10 transition-colors"
                                    >
                                        <ArrowRight className="w-5 h-5 text-[#d4952a] mt-0.5 flex-shrink-0" />
                                        <p className="text-[#faf8f5]/90 font-light">
                                            {detail}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
