import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import { entryOffers } from '../data/courseData';

export function EntryOffersSection() {
  return (
    <section id="entry-offers" className="py-20 md:py-28 bg-[#1a1a4e]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
            Get Started
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
            Choose Your Entry Point
          </h2>
          <p className="text-lg text-[#faf8f5]/80 font-light max-w-2xl mx-auto">
            Begin your journey with our free training or dive deeper with our
            breakthrough workshop.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {entryOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative bg-[#faf8f5]/5 border rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500 ${
                offer.isPopular
                  ? 'border-2 border-[#d4952a]/50 bg-[#d4952a]/5'
                  : 'border-[#faf8f5]/10 hover:border-[#d4952a]/50'
              }`}
            >
              {offer.isPopular && (
                <div className="absolute top-4 right-4 bg-[#d4952a] text-[#1a1a4e] px-3 py-1 text-xs font-bold tracking-[0.2em] uppercase rounded-full">
                  Popular
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#d4952a]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  {offer.icon === 'Play' ? (
                    <Play className="w-8 h-8 text-[#d4952a] fill-[#d4952a]/20" />
                  ) : (
                    <Star className="w-8 h-8 text-[#d4952a]" />
                  )}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#faf8f5] mb-1">
                    {offer.name}
                  </h3>
                  <span
                    className={`text-3xl md:text-4xl font-serif ${
                      offer.price === 'Free'
                        ? 'text-[#faf8f5]'
                        : 'text-[#d4952a]'
                    }`}
                  >
                    {offer.price}
                  </span>
                </div>
              </div>

              <p className="text-[#faf8f5]/70 font-light leading-relaxed mb-8 min-h-[80px]">
                {offer.description}
              </p>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer w-full justify-center"
              >
                <span className="uppercase tracking-wider">
                  {offer.price === 'Free' ? 'Get Free Training' : 'Get Started'}
                </span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
