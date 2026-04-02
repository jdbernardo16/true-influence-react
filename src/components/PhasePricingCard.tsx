import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { PhaseOffer } from '../data/courseData';

interface PhasePricingCardProps {
  offer: PhaseOffer;
  isPrivate?: boolean;
  phaseId: number;
}

export function PhasePricingCard({ offer, isPrivate = false, phaseId }: PhasePricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`group relative bg-[#faf8f5]/5 border rounded-2xl p-6 md:p-8 hover:scale-[1.02] transition-all duration-500 ${
        isPrivate
          ? 'border-2 border-[#d4952a]/50 bg-[#d4952a]/5'
          : 'border-[#faf8f5]/10 hover:border-[#d4952a]/50'
      }`}
    >
      {offer.badge && (
        <div className="absolute top-4 right-4 bg-[#d4952a] text-[#1a1a4e] px-3 py-1 text-xs font-bold tracking-[0.2em] uppercase rounded-full">
          {offer.badge}
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-serif text-xl text-[#faf8f5] mb-2">{offer.name}</h3>
        <div className="text-4xl md:text-5xl font-serif text-[#d4952a]">
          {offer.price}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {offer.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#d4952a] mt-0.5 flex-shrink-0" />
            <span className="text-[#faf8f5]/80 font-light text-sm md:text-base">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer w-full justify-center"
      >
        <span className="uppercase tracking-wider text-sm">
          Start at Phase {phaseId}
        </span>
        <ArrowRight className="w-4 h-4" />
      </motion.a>
    </motion.div>
  );
}
