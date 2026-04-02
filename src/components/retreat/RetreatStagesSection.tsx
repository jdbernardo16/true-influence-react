import { motion } from "framer-motion";
import { Mic, TrendingUp, Award, Users, CheckCircle2, Trophy } from "lucide-react";
import { retreatAwards } from "../../data/retreatData";

export function RetreatStagesSection() {
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
                        Stage Day
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                        Be Seen and Celebrated
                    </h2>
                    <p className="text-lg text-[#faf8f5]/80 font-light max-w-2xl mx-auto">
                        The culmination of your journey - deliver your talk with real-time feedback and recognition
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-[#d4952a]/20 rounded-full flex items-center justify-center">
                                <Mic className="w-6 h-6 text-[#d4952a]" />
                            </div>
                            <h3 className="font-serif text-2xl text-[#faf8f5]">
                                The Stage Experience
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Set intention & feedback framework",
                                "Each participant delivers their talk",
                                "Audience scans QR code & completes rubric in real time",
                                "Scores populated instantly"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#d4952a] mt-0.5 flex-shrink-0" />
                                    <p className="text-[#faf8f5]/80 font-light">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-[#d4952a]/20 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-[#d4952a]" />
                            </div>
                            <h3 className="font-serif text-2xl text-[#faf8f5]">
                                Qualification
                            </h3>
                        </div>
                        <p className="text-[#faf8f5]/80 font-light leading-relaxed mb-6">
                            Scores determine your advancement through the program, recognize top speakers, and identify promotions to the next level.
                        </p>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            {[
                                { icon: Trophy, label: "Top Speakers" },
                                { icon: TrendingUp, label: "Advancement" },
                                { icon: Users, label: "Next Level" }
                            ].map((item, index) => (
                                <div key={index} className="p-4 bg-[#d4952a]/10 rounded-xl">
                                    <item.icon className="w-6 h-6 text-[#d4952a] mx-auto mb-2" />
                                    <p className="text-xs text-[#faf8f5]/80 font-medium">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="text-center mb-10">
                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase">
                            Awards & Recognition
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {retreatAwards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                                className="bg-[#232360]/50 border border-[#faf8f5]/10 rounded-2xl p-6 text-center hover:border-[#d4952a]/50 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-[#d4952a]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8 text-[#d4952a]" />
                                </div>
                                <h4 className="font-serif text-xl text-[#faf8f5] mb-3">
                                    {award.title}
                                </h4>
                                <p className="text-[#faf8f5]/70 font-light text-sm leading-relaxed">
                                    {award.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
