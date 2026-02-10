import React from 'react';
import { motion } from 'framer-motion';
const testimonials = [
'Joanna is a game changer in speaker coaching.',
'Her work has been life changing, transformational, and deeply clarifying.',
'I experienced increased revenue, deeper audience connection, and stronger leadership presence.'];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#faf8f5] text-[#1a1a4e]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
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

            Voices
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
            className="font-serif text-4xl md:text-5xl text-[#1a1a4e]">

            In their words.
          </motion.h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {testimonials.map((quote, index) =>
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
              duration: 1,
              delay: index * 0.2
            }}
            className="relative pl-8 md:pl-12 border-l-2 border-[#d4952a]/30">

              <p className="font-serif text-2xl md:text-4xl italic text-[#1a1a4e] leading-tight">
                "{quote}"
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}