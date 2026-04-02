import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PhaseOffer } from "../../data/courseData";

interface PhasePricingCardProps {
    offer: PhaseOffer;
    ctaLabel: string;
}

export function PhasePricingCard({ offer, ctaLabel }: PhasePricingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`p-8 rounded-2xl text-center ${
                offer.isPopular
                    ? 'bg-[#d4952a]/10 border-2 border-[#d4952a]/50'
                    : 'bg-[#faf8f5]/5 border border-[#faf8f5]/10'
            }`}
        >
            {offer.badge && (
                <div className="inline-block bg-[#d4952a] text-[#1a1a4e] px-3 py-1 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4">
                    {offer.badge}
                </div>
            )}

            <h3 className="font-serif text-xl text-[#faf8f5] mb-6">
                {offer.name}
            </h3>

            <div className="text-4xl font-serif text-[#d4952a] mb-8">
                {offer.price}
            </div>

            <ul className="space-y-3 text-sm text-[#faf8f5]/80 mb-8 text-left">
                {offer.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#d4952a] mt-0.5 flex-shrink-0" />
                        <span className="font-light">{feature}</span>
                    </li>
                ))}
            </ul>

            <motion.a
                href="/#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer w-full"
            >
                {ctaLabel}
            </motion.a>
        </motion.div>
    );
}
