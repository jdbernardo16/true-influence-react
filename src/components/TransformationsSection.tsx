import React from 'react';
import { motion } from 'framer-motion';
export function TransformationsSection() {
  return (
    <section
      id="transformations"
      className="py-24 md:py-32 bg-[#1a1a4e] text-[#faf8f5]">

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
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

            Transformations
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

            What becomes possible.
          </motion.h2>
        </div>

        <div className="space-y-24">
          {/* Story 1: Monique */}
          <TransformationStory
            name="Monique"
            before="Monique had transformed her company culture and increased revenue by 20% in her first year. But she experienced severe physical pain and fear when speaking publicly."
            shift="Through reflective work, she identified an early-formed belief that had remained unexamined. As awareness increased, the nervous system response resolved — without exposure-based training."
            after="Monique now hosts a popular podcast, speaks regularly on public stages, and reports no fear or physical pain. Her visibility has led to more awards, media features, and unprecedented business growth."
            domain="Embodied leadership. Public visibility. Financial performance." />


          {/* Story 2: Andrea */}
          <TransformationStory
            name="Andrea"
            before="After her own business exit, Andrea took a senior leadership role but felt aimless. She described herself as nothing special and dismissed the idea that her experience held broader meaning."
            shift="Through sustained inquiry, she articulated a discrepancy between her dismissal of purpose and the emotional imprint of her early experiences."
            after="Within a year, Andrea left her VP role, launched a new company, built an active client base, and entered the speaking circuit — including the TEDx stage."
            domain="Entrepreneurial leadership. Wealth identity. Elevated public speaking." />

        </div>
      </div>
    </section>);

}
function TransformationStory({
  name,
  before,
  shift,
  after,
  domain






}: {name: string;before: string;shift: string;after: string;domain: string;}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-100px'
      }}
      transition={{
        duration: 1
      }}
      className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 p-8 md:p-12">

      <h3 className="font-serif text-3xl mb-8 text-[#d4952a]">{name}</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
        {/* Before */}
        <div className="relative">
          <span className="block text-xs uppercase tracking-widest text-[#faf8f5]/40 mb-3">
            The Constraint
          </span>
          <p className="text-[#faf8f5]/80 font-light leading-relaxed">
            {before}
          </p>
        </div>

        {/* Shift */}
        <div className="relative">
          {/* Divider for mobile */}
          <div className="md:hidden w-8 h-[1px] bg-[#d4952a] mb-6 opacity-50" />
          {/* Divider for desktop */}
          <div className="hidden md:block absolute -left-6 top-0 bottom-0 w-[1px] bg-[#d4952a]/20" />

          <span className="block text-xs uppercase tracking-widest text-[#d4952a] mb-3">
            The Shift
          </span>
          <p className="text-[#faf8f5] font-normal leading-relaxed italic">
            {shift}
          </p>
        </div>

        {/* After */}
        <div className="relative">
          {/* Divider for mobile */}
          <div className="md:hidden w-8 h-[1px] bg-[#d4952a] mb-6 opacity-50" />
          {/* Divider for desktop */}
          <div className="hidden md:block absolute -left-6 top-0 bottom-0 w-[1px] bg-[#d4952a]/20" />

          <span className="block text-xs uppercase tracking-widest text-[#faf8f5]/40 mb-3">
            The Outcome
          </span>
          <p className="text-[#faf8f5]/80 font-light leading-relaxed">
            {after}
          </p>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-[#faf8f5]/10 text-center md:text-left">
        <span className="text-sm font-serif italic text-[#d4952a]/80">
          {domain}
        </span>
      </div>
    </motion.div>);

}