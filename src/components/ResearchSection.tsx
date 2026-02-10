import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Eye, Sparkles, Mic, TrendingUp } from 'lucide-react';
const pillars = [
{
  icon: Brain,
  title: 'Neuroscience',
  description:
  'Integrating research on mirror neurons and nervous system responses to explore emotion, meaning, and identity as encoded in the mind and body.'
},
{
  icon: Shield,
  title: 'Human Development',
  description:
  'Leveraging safety, trust, and positive connection to create conditions for examining truth without threat.'
},
{
  icon: Eye,
  title: 'The Subconscious',
  description:
  'Accessing meaning, memory, and identity through lived experiences and future vision using timeline therapy and narrative identity frameworks.'
},
{
  icon: Sparkles,
  title: 'Provoking Insights',
  description:
  'Using genuine connection and real-time attention to help leaders feel heard, validated, and emotionally available to their audience.'
},
{
  icon: Mic,
  title: 'Stage Presence',
  description:
  'Rooted in performance theory and emotional honesty techniques to create authentic expression and natural delivery.'
},
{
  icon: TrendingUp,
  title: 'Measurable Impact',
  description:
  'Emotionally aligned communication outperforms competitors by up to 40%. Presentation skills training can increase revenue by approximately 20%.'
}];

export function ResearchSection() {
  return (
    <section className="py-24 md:py-32 bg-[#1a1a4e] text-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center md:text-left">
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

            The Foundation
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

            Where science meets intuition.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) =>
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
              delay: index * 0.1
            }}
            className="group p-8 border border-[#faf8f5]/10 bg-[#faf8f5]/5 hover:bg-[#faf8f5]/10 transition-colors duration-500 relative overflow-hidden">

              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#d4952a] to-transparent opacity-30 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="mb-6 text-[#d4952a]">
                <pillar.icon size={32} strokeWidth={1.5} />
              </div>

              <h3 className="font-serif text-xl mb-4 text-[#d4952a] tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-[#faf8f5]/70 font-light leading-relaxed text-sm md:text-base">
                {pillar.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}