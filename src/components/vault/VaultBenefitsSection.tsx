import { motion } from "framer-motion";
import { Calendar, Users, MessageCircle, Shield, Heart, Clock } from "lucide-react";

export function VaultBenefitsSection() {
    return (
        <section className="py-20 md:py-28 bg-[#232360]">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase mb-6 block"
                    >
                        Why Join?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6 leading-tight"
                    >
                        What You'll Experience
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {[
                        {
                            icon: Shield,
                            title: "Safe Environment",
                            description: "A judgment-free space where vulnerability is celebrated and confidentiality is honored.",
                        },
                        {
                            icon: MessageCircle,
                            title: "Story Practice",
                            description: "Practice your message and storytelling in front of a supportive audience.",
                        },
                        {
                            icon: Users,
                            title: "Community Connection",
                            description: "Build relationships with other women leaders who understand your journey.",
                        },
                        {
                            icon: Heart,
                            title: "Authentic Expression",
                            description: "Discover and express your authentic voice without fear or pretense.",
                        },
                        {
                            icon: Clock,
                            title: "Monthly Gathering",
                            description: "Regular opportunities to connect, practice, and grow with your community.",
                        },
                        {
                            icon: Calendar,
                            title: "Flexible Commitment",
                            description: "Attend as your schedule allows—no long-term commitment required.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                            className="p-6 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-xl hover:border-[#d4952a]/30 transition-colors duration-300"
                        >
                            <div className="w-12 h-12 bg-[#d4952a]/20 rounded-full flex items-center justify-center mb-4">
                                <item.icon className="w-6 h-6 text-[#d4952a]" />
                            </div>
                            <h3 className="font-serif text-xl text-[#faf8f5] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[#faf8f5]/70 font-light leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
