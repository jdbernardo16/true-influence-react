import { motion } from "framer-motion";
import { testimonials } from "../../data/courseData";

export function CourseTestimonialsSection() {
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
                        Testimonials
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                        Stories of Transformation
                    </h2>
                    <p className="text-lg text-[#faf8f5]/80 font-light max-w-2xl mx-auto">
                        Hear from leaders who have experienced the True Influence Method™
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl p-8 hover:border-[#d4952a]/50 transition-all duration-500"
                        >
                            <div className="mb-6">
                                <div className="text-[#d4952a] text-6xl font-serif opacity-30 leading-none">
                                    "
                                </div>
                            </div>
                            <p className="text-[#faf8f5]/90 font-light leading-relaxed mb-8">
                                {testimonial.quote}
                            </p>
                            <div>
                                <p className="text-[#faf8f5] font-medium mb-1">
                                    {testimonial.author}
                                </p>
                                <p className="text-[#d4952a]/80 text-sm">
                                    {testimonial.title}
                                </p>
                                {testimonial.phase && (
                                    <p className="text-[#faf8f5]/60 text-xs mt-2">
                                        Phase {testimonial.phase} Graduate
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
