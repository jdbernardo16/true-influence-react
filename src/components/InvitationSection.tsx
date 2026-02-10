import { motion } from "framer-motion";
export function InvitationSection() {
    return (
        <section className="py-24 md:py-32 bg-[#faf8f5] text-[#1a1a4e] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            margin: "-100px",
                        }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                        }}
                        className="relative"
                    >
                        <div className="aspect-[3/4] overflow-hidden relative">
                            <div className="absolute inset-0 bg-[#1a1a4e] opacity-10 mix-blend-multiply z-10" />
                            <img
                                src="joanna-hero.webp"
                                alt="Professional woman leader"
                                className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-[#d4952a] opacity-50" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            margin: "-100px",
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                    >
                        <span className="block text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                            The Invitation
                        </span>

                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-10 text-[#1a1a4e]">
                            A private advisor for leaders who speak.
                        </h2>

                        <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-[#1a1a4e]/80">
                            <p>
                                Joanna Horton McPherson serves founders and
                                public figures in global brands up to $1B in
                                revenue. Her True Influence Method has promoted
                                thousands to stages, magazine covers, and
                                multi-million-dollar success. Mostly, it has
                                changed lives by healing from within.
                            </p>
                            <p>
                                Her work bridges art, leadership, and capital —
                                spanning professional acting, contemplative
                                practice, entrepreneurship, and Harvard-trained
                                education.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
