import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function CourseHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a4e]">
      <div className="absolute inset-0">
        <img
          src="/carousel/img1.webp"
          alt="Course background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a4e]/80 via-[#1a1a4e]/60 to-[#1a1a4e]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="/icononly_transparent_nobuffer.png"
            alt="Logo Mark"
            className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-8"
          />
          <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase">
            True Influence Method™
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-[#faf8f5] mb-6"
        >
          The True Influence Method™
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-[#faf8f5]/80 font-light leading-relaxed max-w-3xl mx-auto mb-12"
        >
          The leadership path from self-doubt to global influence
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-[#d4952a] w-6 h-6 opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
