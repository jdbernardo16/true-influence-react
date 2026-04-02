import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { phases } from '../data/courseData';

export function EndResultsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#faf8f5] text-[#1a1a4e]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
            Results
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1a1a4e] mb-6">
            The Transformation Journey
          </h2>
          <p className="text-lg text-[#1a1a4e]/70 font-light max-w-2xl mx-auto">
            From discovering your voice to building a lasting legacy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#1a1a4e]/5 border border-[#1a1a4e]/10 rounded-2xl p-6 hover:border-[#d4952a]/50 transition-all duration-500 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#d4952a]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4952a]/30 transition-colors">
                  <span className="text-[#d4952a] font-serif text-lg font-bold">
                    0{phase.id}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-[#1a1a4e] mb-2">
                    {phase.name}
                  </h3>
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-widest ${
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

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4952a] mt-0.5 flex-shrink-0" />
                <p className="text-[#1a1a4e]/80 font-light text-base leading-relaxed">
                  {phase.endResult}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
