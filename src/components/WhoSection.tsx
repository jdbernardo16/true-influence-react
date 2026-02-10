import React from 'react';
import { motion } from 'framer-motion';
export function WhoSection() {
  const items = [
  'Visionary founders stewarding a business, capital, or legacy across commerce, philanthropy, or global initiatives.',
  'High-profile figures developing a personal, truthful, and authentic message to resonate with their audience.',
  'Women leaders called to elevate their work by going deep — ending the negotiation with their worth so they can lead visibly.'];

  return (
    <section className="py-24 md:py-32 bg-[#faf8f5] text-[#1a1a4e]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
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

            Who This Is For
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

            You already know.
          </motion.h2>
        </div>

        <div className="space-y-10">
          {items.map((item, index) =>
          <motion.div
            key={index}
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
              delay: index * 0.2,
              duration: 0.8
            }}
            className="flex items-start">

              <span className="text-[#d4952a] mr-6 mt-2 text-xl">—</span>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[#1a1a4e]/80">
                {item}
              </p>
            </motion.div>
          )}
        </div>

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
            delay: 0.8,
            duration: 1
          }}
          className="mt-20 text-center">

          <p className="font-serif text-2xl md:text-3xl italic text-[#d4952a]">
            Your voice becomes something people recognize, trust, and follow.
          </p>
        </motion.div>
      </div>
    </section>);

}