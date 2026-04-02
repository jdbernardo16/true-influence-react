import { motion } from "framer-motion";
import { Home, Sparkles, Crown, Zap } from "lucide-react";
import { retreatHighlights } from "../../data/retreatData";

const iconMap = {
    Home,
    Sparkles,
    Crown
};

export function RetreatExperienceSection() {
    return (
        <section className="py-20 md:py-28 bg-[#232360]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                        The Experience
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                        Not Just Training. Transformation.
                    </h2>
                    <p className="text-lg text-[#faf8f5]/80 font-light max-w-2xl mx-auto">
                        This is a supportive working environment where every moment leads to growth
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {retreatHighlights.map((highlight, index) => {
                        const Icon = iconMap[highlight.icon as keyof typeof iconMap] || Zap;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="group bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl overflow-hidden hover:border-[#d4952a]/50 hover:bg-[#d4952a]/5 transition-all duration-300"
                            >
                                <div className="relative p-8">
                                    <div className="w-16 h-16 bg-[#d4952a]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-[#d4952a]" />
                                    </div>
                                    <h3 className="font-serif text-2xl text-[#faf8f5] mb-4">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-[#faf8f5]/70 font-light leading-relaxed">
                                        {highlight.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-[#1a1a4e]/50 border border-[#d4952a]/30 rounded-2xl p-8 md:p-12">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <Zap className="w-8 h-8 text-[#d4952a]" />
                            <h3 className="font-serif text-2xl md:text-3xl text-[#faf8f5]">
                                Every Activity Has Purpose
                            </h3>
                        </div>
                        <p className="text-lg text-[#faf8f5]/80 font-light max-w-3xl mx-auto leading-relaxed">
                            From focused work sessions to partner feedback, from pod integration to stage performance - every element is designed to build your confidence and prepare you for the spotlight.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
