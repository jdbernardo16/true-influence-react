import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function CommunitySection() {
  return (
    <section className="py-24 md:py-32 bg-[#1a1a4e] text-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.span
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            className="block text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase mb-6">

            Enter The Room
          </motion.span>
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="font-serif text-4xl md:text-5xl text-[#faf8f5]">

            Ways to begin.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Card 1 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="group p-10 border border-[#faf8f5]/10 bg-[#faf8f5]/5 hover:bg-[#faf8f5]/10 transition-colors duration-500 relative overflow-hidden flex flex-col">

            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#d4952a] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="font-serif text-3xl mb-4 text-[#faf8f5]">
              Virtual Sessions: First Fridays
            </h3>
            <p className="text-[#faf8f5]/70 font-light leading-relaxed mb-8 flex-grow">
              A free monthly safe space for women leaders to tell their story.
              First Fridays at 12 PM MST.
            </p>

            <div className="flex items-center justify-between mt-auto pt-8 border-t border-[#faf8f5]/10">
              <span className="text-xs uppercase tracking-widest text-[#d4952a]">
                Complimentary
              </span>
              <a
                href="#contact"
                className="text-[#d4952a] hover:text-[#e8a838] transition-colors flex items-center gap-2 text-sm font-medium tracking-wide uppercase">

                Join the Circle <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="group p-10 border border-[#faf8f5]/10 bg-[#faf8f5]/5 hover:bg-[#faf8f5]/10 transition-colors duration-500 relative overflow-hidden flex flex-col">

            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#d4952a] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="font-serif text-3xl mb-4 text-[#faf8f5]">
              Speak & Rise
            </h3>
            <p className="text-[#faf8f5]/70 font-light leading-relaxed mb-8 flex-grow">
              Group training program covering your why, talk development, and
              stage presence. Phases one through three in a supported cohort.
            </p>

            <div className="flex items-center justify-between mt-auto pt-8 border-t border-[#faf8f5]/10">
              <span className="text-xs uppercase tracking-widest text-[#d4952a]">
                Investment: $4,000
              </span>
              <a
                href="#contact"
                className="text-[#d4952a] hover:text-[#e8a838] transition-colors flex items-center gap-2 text-sm font-medium tracking-wide uppercase">

                Learn More <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}