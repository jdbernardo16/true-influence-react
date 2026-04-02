import { motion } from "framer-motion";
import { ArrowRight, Users, MessageCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export function VaultSection() {
    return (
        <section className="py-20 md:py-28 bg-[#1a1a4e]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left: Visual Content */}
                    <div className="space-y-6 order-2 lg:order-1">
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
                                            alt="Community gathering"
                                            className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="relative overflow-hidden rounded-2xl">
                                        <img
                                            src="/carousel/img5.webp"
                                            alt="Women sharing stories"
                                            className="w-full h-32 md:h-40 object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="relative overflow-hidden rounded-2xl">
                                        <img
                                            src="/carousel/img6.webp"
                                            alt="Safe space environment"
                                            className="w-full h-32 md:h-40 object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="relative overflow-hidden rounded-2xl">
                                        <img
                                            src="/carousel/img8.webp"
                                            alt="Connection and growth"
                                            className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Element */}
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#d4952a]/10 rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-6 order-1 lg:order-2">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase inline-block"
                        >
                            Complimentary
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="font-serif text-3xl md:text-5xl text-[#faf8f5] leading-tight"
                        >
                            Enter The Vault
                            <br />
                            Free Session
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-[#faf8f5]/80 font-light leading-relaxed max-w-xl"
                        >
                            A free monthly safe space for women leaders to tell their story, connect with peers, and unlock your authentic voice. Join our First Friday gatherings at 12 PM MST.
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
                                    icon: Shield,
                                    label: "Safe Space",
                                },
                                { icon: MessageCircle, label: "Story Sharing" },
                                { icon: Users, label: "Community" },
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
                                to="/vault"
                                className="inline-flex items-center gap-2 bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <span className="uppercase tracking-wider">
                                    Enter The Vault
                                </span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
