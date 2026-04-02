import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CourseCtaSection() {
    return (
        <section className="py-20 md:py-28 bg-[#1a1a4e] relative overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="/carousel/img1.webp"
                    alt="Begin your journey"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4e] via-[#1a1a4e]/90 to-[#1a1a4e]" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                        Ready to Begin Your Journey?
                    </h2>
                    <p className="text-lg text-[#faf8f5]/80 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                        Whether you're just starting or ready for advanced transformation, the True Influence Method™ meets you where you are.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="/#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            <span className="uppercase tracking-wider">
                                Get Free Training
                            </span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
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
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
