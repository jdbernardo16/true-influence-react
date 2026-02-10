import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  question: 'How is this different from other speaking programs?',
  answer:
  'Most programs focus on sounding professional. This method focuses on authenticity and distinctiveness — who you actually are beneath the performance — to increase income, impact, and influence.'
},
{
  question: 'Why train with Joanna?',
  answer:
  'The process helps clients sound more like themselves and builds authentic presence. Speaking is treated as a leadership skill rather than just a marketing tactic.'
},
{
  question: 'Is it worth the investment?',
  answer:
  'Yes, for leaders ready to scale, grow revenue, and increase visibility. This work changes how you lead, not just how you speak.'
},
{
  question: 'What is the return on investment?',
  answer:
  'Data shows speakers can realize 13% or more revenue growth within a year. Clients consistently report increased visibility, stronger audience connection, and new business opportunities.'
},
{
  question: 'How long does it take to become a global speaker?',
  answer:
  'Typically under two years across five phases, progressing from message clarity to global visibility and executive-level opportunities.'
}];

function FaqItem({
  question,
  answer,
  index




}: {question: string;answer: string;index: number;}) {
  const [isOpen, setIsOpen] = useState(false);
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
        duration: 0.8,
        delay: index * 0.1
      }}
      className="border-b border-[#1a1a4e]/10">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between py-8 text-left group"
        aria-expanded={isOpen}>

        <h3 className="font-serif text-xl md:text-2xl text-[#1a1a4e] pr-8 leading-snug group-hover:text-[#d4952a] transition-colors duration-300">
          {question}
        </h3>
        <span className="text-[#d4952a] mt-1 shrink-0">
          {isOpen ?
          <Minus size={20} strokeWidth={1.5} /> :

          <Plus size={20} strokeWidth={1.5} />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen &&
        <motion.div
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut'
          }}
          className="overflow-hidden">

            <p className="pb-8 text-lg font-light leading-relaxed text-[#1a1a4e]/70 max-w-3xl">
              {answer}
            </p>
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>);

}
export function FaqSection() {
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

            Questions
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

            What you may be wondering.
          </motion.h2>
        </div>

        <div className="border-t border-[#1a1a4e]/10">
          {faqs.map((faq, index) =>
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index} />

          )}
        </div>
      </div>
    </section>);

}