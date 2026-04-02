import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function VaultCtaSection() {
    return (
        <section className="py-20 md:py-28 bg-[#1a1a4e]">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="p-12 md:p-16 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-3xl"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase mb-6 block"
                    >
                        Complimentary
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6 leading-tight"
                    >
                        Ready to Enter The Vault?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-[#faf8f5]/80 font-light leading-relaxed text-lg mb-8"
                    >
                        Join our next First Friday gathering and take the first
                        step toward unlocking your authentic voice in a
                        supportive community of women leaders.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="/vault-registration"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <span className="uppercase tracking-wider">
                                Register Now
                            </span>
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <Link
                            to="/"
                            className="text-[#faf8f5]/70 hover:text-[#d4952a] transition-colors text-sm font-medium tracking-wide uppercase"
                        >
                            Explore Other Offerings
                        </Link>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-8 text-[#faf8f5]/50 text-sm"
                    >
                        First Fridays at 12 PM MST • Free for all women leaders
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
