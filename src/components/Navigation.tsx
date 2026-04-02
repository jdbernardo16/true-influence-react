import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
export function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setDrawerOpen(false);
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
                setDrawerOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinks = [
        {
            name: "The Method",
            href: "/#method",
            priority: true,
        },
        {
            name: "The Journey",
            href: "/#journey",
            priority: true,
        },
        {
            name: "Transformations",
            href: "/#transformations",
            priority: true,
        },
        {
            name: "Begin",
            href: "/#contact",
            priority: true,
        },
        {
            name: "Course",
            href: "/course",
            priority: false,
        },
        {
            name: "Retreat",
            href: "/retreat",
            priority: false,
        },
        {
            name: "Corporate",
            href: "/corporate",
            priority: false,
        },
        {
            name: "The Vault",
            href: "/vault",
            priority: false,
        },
    ];

    const priorityLinks = navLinks.filter((link) => link.priority);
    const secondaryLinks = navLinks.filter((link) => !link.priority);

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
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? "bg-[#1a1a4e]/95 backdrop-blur-sm py-4 shadow-lg"
                        : "bg-transparent py-6"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <a
                        href="/#"
                        className="relative z-50 block w-12 opacity-90 hover:opacity-100 transition-opacity"
                    >
                        <img
                            src="/fulllogo_transparent_nobuffer.png"
                            alt="Joanna Horton McPherson"
                            className="w-full h-auto"
                        />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {priorityLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[#faf8f5] hover:text-[#d4952a] text-sm uppercase tracking-widest transition-colors duration-300 font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => setDrawerOpen(!drawerOpen)}
                            className="text-[#faf8f5] hover:text-[#d4952a] text-sm uppercase tracking-widest transition-colors duration-300 font-medium flex items-center gap-2"
                            aria-label="Programs menu"
                        >
                            Programs
                            <Menu size={18} />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-[#faf8f5] z-50"
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

            {/* Desktop Drawer */}
            <AnimatePresence>
                {drawerOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                            onClick={() => setDrawerOpen(false)}
                        />
                        <motion.div
                            ref={drawerRef}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 z-50 h-full w-80 bg-[#1a1a4e] border-l border-[#faf8f5]/10 shadow-2xl"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase">
                                        Programs
                                    </span>
                                    <button
                                        onClick={() => setDrawerOpen(false)}
                                        className="text-[#faf8f5]/60 hover:text-[#d4952a] transition-colors"
                                        aria-label="Close programs"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>
                                <nav className="flex flex-col space-y-2">
                                    {secondaryLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() => setDrawerOpen(false)}
                                            className="text-[#faf8f5] hover:text-[#d4952a] text-lg font-serif py-3 px-4 rounded-lg hover:bg-[#faf8f5]/5 transition-all duration-300"
                                        >
                                            {link.name}
                                        </motion.a>
                                    ))}
                                </nav>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-[#faf8f5]/10">
                                <p className="text-[#faf8f5]/40 text-xs uppercase tracking-widest text-center">
                                    Joanna Horton McPherson
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
