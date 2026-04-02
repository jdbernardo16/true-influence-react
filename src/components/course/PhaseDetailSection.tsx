import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { phases } from "../../data/courseData";
import { PhasePricingCard } from "./PhasePricingCard";

export function PhaseDetailSection() {
    const [openPhase, setOpenPhase] = useState<number>(1);

    const togglePhase = (phaseId: number) => {
        setOpenPhase(openPhase === phaseId ? 0 : phaseId);
    };

    return (
        <section className="py-20 md:py-28 bg-[#1a1a4e]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                        Detailed Phases
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                        Choose Your Level
                    </h2>
                    <p className="text-lg text-[#faf8f5]/80 font-light max-w-2xl mx-auto">
                        Each phase builds on the previous one, but you can start at any level that matches your current needs.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={phase.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`border rounded-2xl overflow-hidden ${
                                openPhase === phase.id
                                    ? 'border-[#d4952a]/50'
                                    : 'border-[#faf8f5]/10 hover:border-[#d4952a]/30'
                            } transition-all duration-300`}
                            id={`phase-${phase.id}`}
                        >
                            <button
                                onClick={() => togglePhase(phase.id)}
                                className="w-full text-left p-8 md:p-10 flex items-center justify-between group"
                                aria-expanded={openPhase === phase.id}
                            >
                                <div className="flex items-center gap-4 md:gap-6 flex-1">
                                    <span className="text-[#d4952a] text-4xl md:text-5xl font-serif opacity-50">
                                        0{phase.id}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="font-serif text-xl md:text-2xl text-[#faf8f5] mb-1">
                                            {phase.name}
                                        </h3>
                                        <p className="text-sm uppercase tracking-widest text-[#d4952a]/80">
                                            {phase.level}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-[#d4952a] ml-4">
                                    {openPhase === phase.id ? (
                                        <Minus size={24} strokeWidth={1.5} />
                                    ) : (
                                        <Plus size={24} strokeWidth={1.5} />
                                    )}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openPhase === phase.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 md:px-10 pb-10">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                                <div className="space-y-6">
                                                    <div>
                                                        <h4 className="text-[#d4952a] text-sm font-bold tracking-[0.2em] uppercase mb-3">
                                                            Goal
                                                        </h4>
                                                        <p className="text-[#faf8f5]/90 font-light leading-relaxed">
                                                            {phase.goal}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-[#d4952a] text-sm font-bold tracking-[0.2em] uppercase mb-3">
                                                            Problem
                                                        </h4>
                                                        <p className="text-[#faf8f5]/90 font-light leading-relaxed">
                                                            {phase.problem}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-[#d4952a] text-sm font-bold tracking-[0.2em] uppercase mb-3">
                                                            Solution
                                                        </h4>
                                                        <ul className="space-y-2 text-[#faf8f5]/80">
                                                            {phase.solution.map((item, idx) => (
                                                                <li key={idx} className="font-light leading-relaxed">
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="text-[#d4952a] text-sm font-bold tracking-[0.2em] uppercase mb-6">
                                                        Transformation
                                                    </h4>
                                                    <p className="text-[#faf8f5]/90 font-light leading-relaxed text-lg mb-6">
                                                        {phase.endResult}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="border-t border-[#faf8f5]/10 pt-8">
                                                <h4 className="text-[#d4952a] text-sm font-bold tracking-[0.2em] uppercase mb-6 text-center">
                                                    Choose Your Experience
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <PhasePricingCard
                                                        offer={phase.mastermind}
                                                        ctaLabel="Join Mastermind"
                                                    />
                                                    <PhasePricingCard
                                                        offer={phase.privateClient}
                                                        ctaLabel="Apply for Private"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
