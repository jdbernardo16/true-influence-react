import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronDown } from 'lucide-react';
import { phases } from '../data/courseData';
import { PhasePricingCard } from './PhasePricingCard';
import { useState, useEffect } from 'react';

function PhaseDetailAccordionItem({ phase, index, isOpen, onToggle }: {
  phase: typeof phases[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="border-b border-[#faf8f5]/10"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between py-8 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-[#d4952a] text-4xl font-serif opacity-30">
              0{phase.id}
            </span>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#faf8f5] group-hover:text-[#d4952a] transition-colors duration-300">
                {phase.name}
              </h3>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mt-2 ${
                  phase.level === 'Beginner'
                    ? 'bg-[#d4952a]/10 text-[#d4952a]'
                    : phase.level === 'Intermediate'
                    ? 'bg-[#232360]/10 text-[#232360]'
                    : phase.level === 'Advanced'
                    ? 'bg-[#1a1a4e]/10 text-[#1a1a4e]'
                    : 'bg-[#d4952a] text-[#faf8f5]'
                }`}
              >
                {phase.level}
              </span>
            </div>
          </div>
        </div>
        <span className="text-[#d4952a] mt-4 shrink-0 ml-4">
          {isOpen ? (
            <Minus size={24} strokeWidth={1.5} />
          ) : (
            <Plus size={24} strokeWidth={1.5} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#d4952a] text-sm font-bold tracking-[0.2em] uppercase mb-3">
                    Goal
                  </h4>
                  <p className="text-[#faf8f5]/90 font-light text-lg leading-relaxed">
                    {phase.goal}
                  </p>
                </div>

                <div>
                  <h4 className="text-[#d4952a] text-sm font-bold tracking-[0.2em] uppercase mb-3">
                    Problem
                  </h4>
                  <p className="text-[#faf8f5]/70 font-light text-base leading-relaxed">
                    {phase.problem}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-[#d4952a] text-sm font-bold tracking-[0.2em] uppercase mb-3">
                  Solution
                </h4>
                <ul className="space-y-2">
                  {phase.solution.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ChevronDown className="w-5 h-5 text-[#d4952a] mt-1 flex-shrink-0" />
                      <span className="text-[#faf8f5]/80 font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[#d4952a] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                  Choose Your Experience
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PhasePricingCard
                    offer={phase.mastermind}
                    isPrivate={false}
                    phaseId={phase.id}
                  />
                  <PhasePricingCard
                    offer={phase.privateClient}
                    isPrivate={true}
                    phaseId={phase.id}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function PhaseDetailSection() {
  const [openPhase, setOpenPhase] = useState<number>(1);
  const [scrollToPhase, setScrollToPhase] = useState<number | null>(null);

  useEffect(() => {
    if (scrollToPhase !== null) {
      setOpenPhase(scrollToPhase);
      setScrollToPhase(null);
    }
  }, [scrollToPhase]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/#phase-(\d+)/);
      if (match) {
        const phaseId = parseInt(match[1], 10);
        if (phaseId >= 1 && phaseId <= phases.length) {
          setScrollToPhase(phaseId);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#232360]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
            Detailed Program
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
            Phase-by-Phase Breakdown
          </h2>
          <p className="text-lg text-[#faf8f5]/80 font-light max-w-2xl mx-auto">
            Explore each phase in detail and choose the entry point that aligns
            with your current leadership journey.
          </p>
        </motion.div>

        <div className="border-t border-[#faf8f5]/10">
          {phases.map((phase, index) => (
            <div key={phase.id} id={`phase-${phase.id}`}>
              <PhaseDetailAccordionItem
                phase={phase}
                index={index}
                isOpen={openPhase === phase.id}
                onToggle={() =>
                  setOpenPhase(openPhase === phase.id ? 0 : phase.id)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
