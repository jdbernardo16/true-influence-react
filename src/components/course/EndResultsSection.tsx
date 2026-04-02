import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { endResults } from "../../data/courseData";

export function EndResultsSection() {
    return (
        <section className="py-20 md:py-28 bg-[#faf8f5] text-[#1a1a4e]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                        End Results
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl mb-6 text-[#1a1a4e]">
                        Your Transformation
                    </h2>
                    <p className="text-lg md:text-xl text-[#1a1a4e]/70 font-light">
                        From discovering your voice to leaving a lasting legacy
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {endResults.map((item, index) => (
                        <motion.div
                            key={item.phase}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group bg-[#faf8f5] border-2 border-[#1a1a4e]/10 rounded-2xl p-8 hover:border-[#d4952a]/50 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute top-4 right-4 w-10 h-10 bg-[#d4952a]/10 rounded-full flex items-center justify-center">
                                <span className="text-[#d4952a] font-bold">
                                    {item.phase}
                                </span>
                            </div>
                            <div className="w-16 h-16 bg-[#d4952a]/10 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-8 h-8 text-[#d4952a]" />
                            </div>
                            <h3 className="font-serif text-2xl text-[#1a1a4e] mb-4">
                                {item.result}
                            </h3>
                            <p className="text-[#1a1a4e]/80 font-light leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
