import React from 'react';
import { motion } from 'framer-motion';
export function PhilosophySection() {
  return (
    <section className="h-screen w-full bg-[#1a1a4e] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95
        }}
        whileInView={{
          opacity: 1,
          scale: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 1.5,
          ease: 'easeOut'
        }}>

        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#d4952a] mb-8 leading-tight">
          Speak with Emotion.
        </h2>
        <p className="text-[#faf8f5] text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto opacity-80">
          The number one skill to influence and impact your industry.
        </p>
      </motion.div>
    </section>);

}