import { motion } from "framer-motion";
import { Globe, Instagram } from "lucide-react";
export function ContactSection() {
    return (
        <section
            id="contact"
            className="py-24 md:py-32 bg-[#1a1a4e] text-[#faf8f5] text-center relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl opacity-5 pointer-events-none">
                <div className="w-full h-full border border-[#d4952a] rounded-full scale-150" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.span
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="block text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase mb-6"
                >
                    Begin
                </motion.span>

                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="font-serif text-4xl md:text-6xl mb-8 text-[#faf8f5]"
                >
                    Begin the conversation.
                </motion.h2>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.2,
                    }}
                    className="text-xl font-light text-[#faf8f5]/60 mb-12"
                >
                    The work begins with a single honest conversation.
                </motion.p>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.4,
                    }}
                    className="flex flex-col items-center space-y-8"
                >
                    <a
                        href="mailto:joanna@joannahortonmcpherson.com"
                        className="text-2xl md:text-3xl font-serif italic text-[#d4952a] hover:text-[#e8a838] transition-colors border-b border-transparent hover:border-[#e8a838] pb-1"
                    >
                        joanna@joannahortonmcpherson.com
                    </a>

                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mt-8">
                        <a
                            href="https://instagram.com/joannahortonmcpherson"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#faf8f5]/60 hover:text-[#d4952a] transition-colors flex items-center gap-2"
                        >
                            <Instagram size={20} />
                            <span className="text-sm tracking-widest uppercase">
                                @joannahortonmcpherson
                            </span>
                        </a>

                        <a
                            href="https://joannahortonmcpherson.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#faf8f5]/60 hover:text-[#d4952a] transition-colors flex items-center gap-2"
                        >
                            <Globe size={20} />
                            <span className="text-sm tracking-widest uppercase">
                                joannahortonmcpherson.com
                            </span>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.8,
                    }}
                    className="mt-32 pt-12 border-t border-[#faf8f5]/10 flex flex-col items-center"
                >
                    <img
                        src="/icononly_transparent_nobuffer.png"
                        alt="Logo"
                        className="w-12 h-12 opacity-30 mb-6 grayscale"
                    />

                    <p className="text-xs text-[#faf8f5]/30 uppercase tracking-widest">
                        © {new Date().getFullYear()} Joanna Horton McPherson.
                        All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
