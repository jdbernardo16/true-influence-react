import { motion } from 'framer-motion';
import { targetAudience } from '../data/courseData';

export function TargetAudienceSection() {
  const audience = targetAudience[0];
  const strugglesData = targetAudience[1];

  return (
    <section className="py-20 md:py-28 bg-[#232360]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
            Who This Is For
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
            {audience.who}
          </h2>
          <p className="text-lg text-[#faf8f5]/80 font-light max-w-3xl mx-auto">
            {audience.details.join(', ')} — who have success, but still feel
            hesitation around fully owning their voice, story, and leadership.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl p-8 md:p-12 mb-12"
        >
          <h3 className="text-[#d4952a] text-xl font-semibold mb-8 text-center">
            {strugglesData.who}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strugglesData.details.map((struggle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 bg-[#d4952a] rounded-full mt-2 flex-shrink-0" />
                <p className="text-[#faf8f5]/90 font-light text-base md:text-lg">
                  {struggle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <p className="font-serif text-2xl md:text-3xl italic text-[#d4952a]">
            Your voice becomes something people recognize, trust, and follow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
