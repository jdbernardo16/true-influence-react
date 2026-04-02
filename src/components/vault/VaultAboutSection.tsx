import { motion } from "framer-motion";

export function VaultAboutSection() {
    return (
        <section className="py-20 md:py-28 bg-[#1a1a4e]">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase mb-6 block"
                    >
                        What is The Vault?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-8 leading-tight"
                    >
                        A Safe Space for Your Voice
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-[#faf8f5]/80 font-light leading-relaxed text-lg mb-8"
                    >
                        The Vault is Joanna's gift to women leaders seeking a supportive community to share their story, practice their message, and connect with like-minded peers. This complimentary monthly gathering provides a judgment-free environment where you can speak authentically and receive gentle guidance.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
                >
                    {[
                        {
                            title: "Story Sharing",
                            description: "Tell your story in a safe, supportive environment without judgment or pressure.",
                        },
                        {
                            title: "Peer Connection",
                            description: "Connect with other women leaders facing similar challenges and triumphs.",
                        },
                        {
                            title: "Expert Guidance",
                            description: "Receive gentle feedback and guidance from Joanna in an intimate setting.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                            className="p-8 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl text-center"
                        >
                            <h3 className="font-serif text-xl text-[#faf8f5] mb-4">
                                {item.title}
                            </h3>
                            <p className="text-[#faf8f5]/70 font-light leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
