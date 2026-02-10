import React from 'react';
import { motion } from 'framer-motion';
const cards = [
{
  title: 'Brave Emotional Honesty',
  description: 'Moving past performance into authentic expression.'
},
{
  title: 'Subconscious Awareness',
  description: 'Accessing the meaning beneath your story.'
},
{
  title: 'Embodied Presence',
  description: 'Bringing your message into the body, out of performativity.'
}];

export function MethodSection() {
  return (
    <section id="method" className="py-24 md:py-32 bg-[#1a1a4e] text-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <motion.span
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
            transition={{
              duration: 0.8
            }}
            className="block text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase mb-6">

            The Method
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
            transition={{
              duration: 0.8,
              delay: 0.1
            }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-[#faf8f5]">

            True Influence begins within.
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, index) =>
          <motion.div
            key={index}
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
              delay: index * 0.2
            }}
            className="group p-8 md:p-10 border border-[#faf8f5]/10 bg-[#faf8f5]/5 hover:bg-[#faf8f5]/10 transition-colors duration-500 relative overflow-hidden">

              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#d4952a] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="font-serif text-2xl mb-4 text-[#faf8f5] group-hover:text-[#d4952a] transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-[#faf8f5]/70 font-light leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Summary Paragraph */}
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1,
            delay: 0.6
          }}
          className="max-w-4xl mx-auto text-center">

          <p className="text-xl md:text-2xl font-light leading-relaxed text-[#faf8f5]/90 font-serif italic">
            "Grounded in brave emotional honesty, subconscious awareness, and
            self-awareness, Joanna's hyper-present style pulls trapped doubts
            into felt sense in the body, where they enter conscious awareness
            and evolve into learning and insight."
          </p>
        </motion.div>
      </div>
    </section>);

}