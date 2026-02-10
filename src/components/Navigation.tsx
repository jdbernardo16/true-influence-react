import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
export function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navLinks = [
        {
            name: "The Method",
            href: "#method",
        },
        {
            name: "The Journey",
            href: "#journey",
        },
        {
            name: "Transformations",
            href: "#transformations",
        },
        {
            name: "Begin",
            href: "#contact",
        },
    ];

    return (
        <>
            <motion.nav
                initial={{
                    y: -100,
                }}
                animate={{
                    y: 0,
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#1a1a4e]/95 backdrop-blur-sm py-4 shadow-lg" : "bg-transparent py-6"}`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <a
                        href="#"
                        className="relative z-50 block w-12 opacity-90 hover:opacity-100 transition-opacity"
                    >
                        <img
                            src="/fulllogo_transparent_nobuffer.png"
                            alt="Joanna Horton McPherson"
                            className="w-full h-auto"
                        />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[#faf8f5] hover:text-[#d4952a] text-sm uppercase tracking-widest transition-colors duration-300 font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#faf8f5] z-50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className="fixed inset-0 z-40 bg-[#1a1a4e] flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col space-y-8 text-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-[#faf8f5] text-2xl font-serif hover:text-[#d4952a] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
