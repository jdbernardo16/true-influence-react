import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { entryOffers } from "../../data/courseData";

export function EntryOffersSection() {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Play':
                return Play;
            case 'Star':
                return Star;
            default:
                return Play;
        }
    };

    return (
        <section className="py-20 md:py-28 bg-[#232360]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                        Entry Offers
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                        Start Your Journey
                    </h2>
                    <p className="text-lg text-[#faf8f5]/80 font-light max-w-2xl mx-auto">
                        Begin with our free training or low-ticket offer to discover your true influence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {entryOffers.map((offer, index) => {
                        const Icon = getIcon(offer.icon);
                        return (
                            <motion.div
                                key={offer.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`relative bg-[#faf8f5]/5 border rounded-2xl overflow-hidden group hover:border-[#d4952a]/50 transition-all duration-500 ${
                                    offer.isPopular
                                        ? 'border-2 border-[#d4952a]/50'
                                        : 'border border-[#faf8f5]/10'
                                }`}
                            >
                                {offer.isPopular && (
                                    <div className="absolute top-4 right-4 bg-[#d4952a] text-[#1a1a4e] px-3 py-1 text-xs font-bold tracking-[0.2em] uppercase rounded-full">
                                        Popular
                                    </div>
                                )}
                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-[#d4952a]/20 rounded-full flex items-center justify-center">
                                            <Icon className="w-8 h-8 text-[#d4952a]" />
                                        </div>
                                        <div>
                                            <div className="text-3xl font-serif text-[#d4952a] mb-1">
                                                {offer.price}
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="font-serif text-2xl text-[#faf8f5] mb-4">
                                        {offer.name}
                                    </h3>
                                    <p className="text-[#faf8f5]/70 font-light leading-relaxed mb-8">
                                        {offer.description}
                                    </p>
                                    <motion.a
                                        href={offer.ctaLink}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-2 bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer"
                                    >
                                        <span>{offer.cta}</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
