import { motion } from 'framer-motion';
import { phases } from '../data/courseData';

export function PhaseJourneySection() {

  const scrollToPhase = (phaseId: number) => {
    const element = document.getElementById(`phase-${phaseId}`);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#faf8f5] text-[#1a1a4e]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
            The Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Five Phases to Global Influence
          </h2>
          <p className="text-lg text-[#1a1a4e]/70 font-light max-w-2xl mx-auto">
            Click on any phase to learn more about your path to leadership
            excellence.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#d4952a]/30" />

          <div className="space-y-16 md:space-y-24">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-start gap-8 md:gap-16 relative ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#d4952a] rounded-full ring-4 ring-[#faf8f5] z-10 mt-2 md:mt-0 cursor-pointer hover:scale-125 transition-transform"
                  onClick={() => scrollToPhase(phase.id)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      scrollToPhase(phase.id);
                    }
                  }}
                />

                <div
                  className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'
                  }`}
                >
                  <span className="block text-[#d4952a] text-4xl md:text-5xl font-serif opacity-30 mb-2">
                    0{phase.id}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a4e] mb-2">
                    {phase.name}
                  </h3>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${
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
                  <p className="text-[#1a1a4e]/80 leading-relaxed text-lg font-light mb-4">
                    {phase.endResult}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToPhase(phase.id)}
                    className="text-[#d4952a] font-medium hover:text-[#b87d1f] transition-colors"
                  >
                    Learn more →
                  </motion.button>
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
