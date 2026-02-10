import React from 'react';
import { motion } from 'framer-motion';
import { Users, Route, Award } from 'lucide-react';
export function ExperienceSection() {
  return (
    <section className="py-24 md:py-32 bg-[#faf8f5] text-[#1a1a4e]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
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

          The Experience
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
          className="font-serif text-4xl md:text-5xl lg:text-6xl mb-10 text-[#1a1a4e]">

          Private. Virtual. Transformative.
        </motion.h2>

        <motion.p
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
            delay: 0.2
          }}
          className="text-xl md:text-2xl font-light leading-relaxed text-[#1a1a4e]/70 max-w-3xl mx-auto mb-16">

          Virtual private one-on-one training intensives across all five phases.
          Two to three sessions per month with in-depth feedback, custom
          assignments, and guaranteed stage features.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Feature icon={Users} title="One-on-One Intensives" delay={0.3} />
          <Feature icon={Route} title="Custom Development Path" delay={0.4} />
          <Feature icon={Award} title="Stage Features Guaranteed" delay={0.5} />
        </div>

        <motion.p
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
            delay: 0.8
          }}
          className="mt-16 text-[#1a1a4e]/50 text-sm uppercase tracking-widest">

          Optional retreats, courses, and elevated network access
        </motion.p>
      </div>
    </section>);

}
function Feature({
  icon: Icon,
  title,
  delay




}: {icon: any;title: string;delay: number;}) {
  return (
    <motion.div
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
        delay,
        duration: 0.8
      }}
      className="flex flex-col items-center">

      <div className="w-16 h-16 rounded-full bg-[#1a1a4e]/5 flex items-center justify-center mb-6 text-[#d4952a]">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-xl text-[#1a1a4e]">{title}</h3>
    </motion.div>);

}