import { motion } from "framer-motion";
import { Target, Users, Play, BookOpen, Crown, Mic, TrendingUp, Award } from "lucide-react";
import { retreatFeatures } from "../../data/retreatData";

const iconMap = {
    Target,
    Users,
    Play,
    BookOpen,
    Crown,
    Mic,
    TrendingUp,
    Award
};

export function RetreatOverviewSection() {
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
                        Retreat Structure
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                        All Levels, One Container
                    </h2>
                    <p className="text-lg text-[#faf8f5]/80 font-light max-w-3xl mx-auto mb-8">
                        This is a supportive working environment, not a passive experience.
                    </p>
                    <div className="inline-block bg-[#d4952a]/10 border border-[#d4952a]/30 rounded-full px-6 py-3">
                        <span className="text-[#d4952a] font-medium">
                            Everything leads to Stage Day
                        </span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {retreatFeatures.map((feature, index) => {
                        const Icon = iconMap[feature.icon as keyof typeof iconMap] || Target;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl p-6 hover:border-[#d4952a]/50 hover:bg-[#d4952a]/5 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-[#d4952a]/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6 text-[#d4952a]" />
                                </div>
                                <h3 className="font-serif text-xl text-[#faf8f5] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-[#faf8f5]/70 font-light text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
