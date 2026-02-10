import React from 'react';
import { motion } from 'framer-motion';
const phases = [
{
  id: '01',
  name: 'DEEP',
  subtitle: 'Leader Foundation',
  description: 'Personal insights on your why story and purpose.',
  details: [
  'Defining moments from your lived experience.',
  'Core insight and foundational message.',
  'Clarifying what you know because you lived it.',
  'Identifying what your story is actually about beneath the events.']

},
{
  id: '02',
  name: 'BRAVE',
  subtitle: 'Talk Development',
  description: 'A signature talk that commands attention.',
  details: [
  'Signature talk in a clear, repeatable framework.',
  'Talk framework and narrative arc.',
  'Problem-solution set the audience can recognize themselves in.',
  'Your story and core insight.']

},
{
  id: '03',
  name: 'CLEAR',
  subtitle: 'Talk Delivery',
  description: 'Expert messaging for greater audience influence.',
  details: [
  'Expert messaging and embodied communication.',
  'Speaker rehearsal and audience avatar.',
  'Emotional anchors and key phrases.',
  'Natural stage presence and intuitive delivery.']

},
{
  id: '04',
  name: 'POWERFUL',
  subtitle: 'Speaker Mastery',
  description: 'Booking and delivery for speaking engagements.',
  details: [
  'Booking, brand positioning, and in-demand readiness.',
  'Social media messaging and video assets.',
  'Social proof and lived examples.',
  'Professional speaker positioning and booking readiness.']

},
{
  id: '05',
  name: 'UNSTOPPABLE',
  subtitle: 'Global Leader',
  description: 'TED stages, media, and elevated networks.',
  details: [
  'Expanded reach, influence, and legacy beyond the room.',
  'TED and major stage preparation.',
  'Media, summits, and elevated networks.',
  'Speaking as a service leader, owning your role as a solution the world needs.']

}];

export function JourneySection() {
  return (
    <section
      id="journey"
      className="py-24 md:py-32 bg-[#faf8f5] text-[#1a1a4e]">

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-24">
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

            The Journey
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
            className="font-serif text-3xl md:text-5xl mb-6 text-[#1a1a4e]">

            Five Phases to Becoming a Global Thought Leader
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
              duration: 0.8,
              delay: 0.2
            }}
            className="text-lg md:text-xl text-[#1a1a4e]/70 font-light">

            Move from lived experience to meaning to message to presence to
            influence.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#d4952a]/30" />

          <div className="space-y-20 md:space-y-32">
            {phases.map((phase, index) =>
            <motion.div
              key={phase.id}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1
              }}
              className={`flex flex-col md:flex-row items-start md:items-start gap-8 md:gap-16 relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Number Marker */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#d4952a] rounded-full ring-4 ring-[#faf8f5] z-10 mt-2 md:mt-0" />

                {/* Content Side */}
                <div
                className={`pl-12 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>

                  <span className="block text-[#d4952a] text-4xl md:text-5xl font-serif opacity-30 mb-2">
                    {phase.id}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a4e] mb-1">
                    {phase.name}
                  </h3>
                  <h4 className="text-sm uppercase tracking-widest text-[#d4952a] mb-4 font-medium">
                    {phase.subtitle}
                  </h4>
                  <p className="text-[#1a1a4e]/80 leading-relaxed text-lg font-light mb-6">
                    {phase.description}
                  </p>

                  {/* Detailed Bullets */}
                  <ul
                  className={`space-y-2 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>

                    {phase.details.map((detail, i) =>
                  <li
                    key={i}
                    className={`text-sm text-[#1a1a4e]/60 font-light flex items-center gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4952a]/40 shrink-0" />
                        <span>{detail}</span>
                      </li>
                  )}
                  </ul>
                </div>

                {/* Empty Side for Layout Balance */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}