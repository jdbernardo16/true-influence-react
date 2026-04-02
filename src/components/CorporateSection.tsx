import { motion } from "framer-motion";
import { ArrowRight, Building2, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function CorporateSection() {
    return (
        <section className="py-20 md:py-28 bg-[#232360]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left: Visual Content */}
                    <div className="space-y-6">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase inline-block"
                        >
                            For Organizations
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="font-serif text-3xl md:text-5xl text-[#faf8f5] leading-tight"
                        >
                            Transform Executive Presentations Into
                            Revenue-Driving Assets
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-[#faf8f5]/80 font-light leading-relaxed max-w-xl"
                        >
                            The True Influence Method™ aligns leadership voice,
                            message clarity, and audience psychology for
                            measurable business outcomes.
                        </motion.p>

                        {/* Key Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
                        >
                            {[
                                {
                                    icon: Building2,
                                    label: "Corporate Training",
                                },
                                { icon: TrendingUp, label: "Revenue Growth" },
                                { icon: Users, label: "Team Impact" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-4 bg-[#faf8f5]/5 rounded-xl"
                                >
                                    <div className="w-10 h-10 bg-[#d4952a]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-5 h-5 text-[#d4952a]" />
                                    </div>
                                    <span className="text-[#faf8f5]/90 text-sm font-light">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="pt-4"
                        >
                            <Link
                                to="/corporate"
                                className="inline-flex items-center gap-2 bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <span className="uppercase tracking-wider">
                                    Explore Corporate Services
                                </span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative overflow-hidden rounded-2xl">
                                    <img
                                        src="/carousel/img3.webp"
                                        alt="Corporate leadership"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-2xl">
                                    <img
                                        src="/carousel/img4.webp"
                                        alt="Team collaboration"
                                        className="w-full h-32 md:h-40 object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative overflow-hidden rounded-2xl">
                                    <img
                                        src="/carousel/img5.webp"
                                        alt="Executive presentation"
                                        className="w-full h-32 md:h-40 object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-2xl">
                                    <img
                                        src="/carousel/img6.webp"
                                        alt="Business success"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4952a]/10 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
