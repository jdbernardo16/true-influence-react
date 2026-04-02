import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Target, Award, Crown } from "lucide-react";
import { Navigation } from "./Navigation";

export function CorporatePage() {
    return (
        <div className="bg-[#1a1a4e] min-h-screen w-full overflow-x-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="/carousel/img1.webp"
                        alt="Corporate leadership"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a4e]/70 via-[#1a1a4e]/50 to-[#1a1a4e]" />
                </div>
                <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6"
                    >
                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase">
                            For Organizations
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-[#faf8f5] mb-6"
                    >
                        Transform Presentations
                        <br />
                        Into Revenue
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-[#faf8f5]/80 font-light leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        The True Influence Method™ aligns leadership voice,
                        message clarity, and audience psychology for measurable
                        business outcomes.
                    </motion.p>
                    <motion.a
                        href="#services"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                    >
                        <span className="uppercase tracking-wider">
                            Explore Services
                        </span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </div>
            </section>

            {/* Problem Section - Visual */}
            <section className="py-20 md:py-28 bg-[#1a1a4e]">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                            The Challenge
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                            Presentations That Inform But Don't Convert
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src="/carousel/img2.webp"
                                alt="Presentation challenge"
                                className="w-full h-64 md:h-80 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a4e] to-transparent" />
                        </div>
                        <div className="flex flex-col justify-center space-y-6">
                            {[
                                "Audiences don't see their problem",
                                "Solutions understood but not prioritized",
                                "Brand differentiation lost",
                                "Revenue opportunities unrealized",
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    className="flex items-center gap-4 p-4 bg-[#faf8f5]/5 rounded-xl hover:bg-[#faf8f5]/10 transition-colors"
                                >
                                    <div className="w-10 h-10 bg-[#d4952a]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Target className="w-5 h-5 text-[#d4952a]" />
                                    </div>
                                    <p className="text-[#faf8f5]/90 font-light">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section - Visual */}
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
                            The Solution
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                            True Influence Method™
                        </h2>
                        <p className="text-lg text-[#faf8f5]/80 font-light max-w-2xl mx-auto">
                            Every presentation drives measurable business
                            outcomes
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                img: "/carousel/img7.webp",
                                title: "Audience Sees Their Problem",
                            },
                            {
                                img: "/carousel/img4.webp",
                                title: "Solution Becomes Obvious Choice",
                            },
                            {
                                img: "/carousel/img5.webp",
                                title: "Speaker as Authentic Authority",
                            },
                            {
                                img: "/carousel/img6.webp",
                                title: "Measurable Business Outcomes",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a4e] via-[#1a1a4e]/50 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 bg-[#d4952a]/20 rounded-full flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-[#d4952a]" />
                                        </div>
                                        <h3 className="font-serif text-xl text-[#faf8f5]">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section - Visual Cards */}
            <section id="services" className="py-20 md:py-28 bg-[#1a1a4e]">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                            Services
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                            Three Levels of Transformation
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Level 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl overflow-hidden hover:border-[#d4952a]/50 transition-all duration-500"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src="/carousel/img7.webp"
                                    alt="Level 1"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a4e] to-transparent" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#d4952a]/20 rounded-full flex items-center justify-center">
                                        <Target className="w-6 h-6 text-[#d4952a]" />
                                    </div>
                                    <div>
                                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase">
                                            Level 1
                                        </span>
                                        <h3 className="font-serif text-xl text-[#faf8f5]">
                                            Signature Talk
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-[#faf8f5]/70 font-light text-sm mb-4">
                                    Increase sales through message alignment
                                </p>
                                <ul className="space-y-2 text-sm text-[#faf8f5]/80">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-[#d4952a] mt-0.5 flex-shrink-0" />
                                        <span>
                                            Target audience identification
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-[#d4952a] mt-0.5 flex-shrink-0" />
                                        <span>High-conversion narrative</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-[#d4952a] mt-0.5 flex-shrink-0" />
                                        <span>Executive delivery coaching</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Level 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="group bg-[#d4952a]/5 border-2 border-[#d4952a]/50 rounded-2xl overflow-hidden relative"
                        >
                            <div className="absolute top-4 right-4 bg-[#d4952a] text-[#1a1a4e] px-3 py-1 text-xs font-bold tracking-[0.2em] uppercase rounded-full">
                                Popular
                            </div>
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src="/carousel/img8.webp"
                                    alt="Level 2"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a4e] to-transparent" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#d4952a]/20 rounded-full flex items-center justify-center">
                                        <Award className="w-6 h-6 text-[#d4952a]" />
                                    </div>
                                    <div>
                                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase">
                                            Level 2
                                        </span>
                                        <h3 className="font-serif text-xl text-[#faf8f5]">
                                            Speaker Mastery
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-[#faf8f5]/70 font-light text-sm mb-4">
                                    Establish recognized authority
                                </p>
                                <ul className="space-y-2 text-sm text-[#faf8f5]/80">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-[#d4952a] mt-0.5 flex-shrink-0" />
                                        <span>Multi-audience refinement</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-[#d4952a] mt-0.5 flex-shrink-0" />
                                        <span>Authority positioning</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-[#d4952a] mt-0.5 flex-shrink-0" />
                                        <span>Advanced presence training</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Level 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="group bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl overflow-hidden hover:border-[#d4952a]/50 transition-all duration-500"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src="/carousel/img1.webp"
                                    alt="Level 3"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a4e] to-transparent" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#d4952a]/20 rounded-full flex items-center justify-center">
                                        <Crown className="w-6 h-6 text-[#d4952a]" />
                                    </div>
                                    <div>
                                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase">
                                            Level 3
                                        </span>
                                        <h3 className="font-serif text-xl text-[#faf8f5]">
                                            Executive Visibility
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-[#faf8f5]/70 font-light text-sm mb-4">
                                    Expand market visibility
                                </p>
                                <ul className="space-y-2 text-sm text-[#faf8f5]/80">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-[#d4952a] mt-0.5 flex-shrink-0" />
                                        <span>Private speaking event</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-[#d4952a] mt-0.5 flex-shrink-0" />
                                        <span>Professional video capture</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-[#d4952a] mt-0.5 flex-shrink-0" />
                                        <span>Strategic brand positioning</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Results Section - Visual */}
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
                            Results
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                            Tangible Outcomes
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            { value: "40%+", label: "Sales Activity Increase" },
                            { value: "Dozens", label: "New Conversations" },
                            { value: "High", label: "Audience Engagement" },
                            { value: "Strong", label: "Brand Positioning" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="text-center p-8 bg-[#faf8f5]/5 border border-[#d4952a]/30 rounded-2xl"
                            >
                                <div className="text-4xl md:text-5xl font-serif text-[#d4952a] mb-3">
                                    {item.value}
                                </div>
                                <p className="text-[#faf8f5]/80 font-light">
                                    {item.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative rounded-2xl overflow-hidden"
                    >
                        <img
                            src="/carousel/img2.webp"
                            alt="Success story"
                            className="w-full h-64 md:h-[80vh] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4e]/90 to-[#1a1a4e]/60 flex items-center">
                            <div className="px-6 md:px-12 max-w-2xl">
                                <p className="text-2xl md:text-3xl font-serif text-[#faf8f5] italic mb-4">
                                    "This is not presentation coaching. This is
                                    revenue-aligned communication strategy."
                                </p>
                                <p className="text-[#d4952a] font-medium">
                                    — True Influence Method™
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Investment Section - Clean Pricing */}
            <section className="py-20 md:py-28 bg-[#1a1a4e]">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                            Investment
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                            Choose Your Level
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                price: "$35,000",
                                level: "Level 1",
                                name: "Signature Talk",
                                icon: Target,
                            },
                            {
                                price: "$75,000",
                                level: "Level 2",
                                name: "Speaker Mastery",
                                icon: Award,
                                popular: true,
                            },
                            {
                                price: "$250,000",
                                level: "Level 3",
                                name: "Executive Visibility",
                                icon: Crown,
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className={`p-8 rounded-2xl text-center ${
                                    item.popular
                                        ? "bg-[#d4952a]/10 border-2 border-[#d4952a]/50"
                                        : "bg-[#faf8f5]/5 border border-[#faf8f5]/10"
                                }`}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4952a]/20 rounded-full mb-4">
                                    <item.icon className="w-8 h-8 text-[#d4952a]" />
                                </div>
                                <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                                    {item.level}
                                </span>
                                <h3 className="font-serif text-xl text-[#faf8f5] mb-4">
                                    {item.name}
                                </h3>
                                <div className="text-4xl font-serif text-[#d4952a] mb-6">
                                    {item.price}
                                </div>
                                <motion.a
                                    href="/#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer"
                                >
                                    Get Started
                                </motion.a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-28 bg-[#232360]">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                            Ready to Transform?
                        </h2>
                        <p className="text-lg text-[#faf8f5]/80 font-light leading-relaxed mb-10">
                            Let's discuss how the True Influence Method™ can
                            help you achieve measurable business outcomes.
                        </p>
                        <motion.a
                            href="/#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            <span className="uppercase tracking-wider">
                                Schedule a Consultation
                            </span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
