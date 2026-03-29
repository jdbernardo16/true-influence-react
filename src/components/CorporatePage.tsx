import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Target,
    Zap,
    TrendingUp,
    Award,
    Crown,
    Star,
} from "lucide-react";
import { Navigation } from "./Navigation";

export function CorporatePage() {
    return (
        <div className="bg-[#1a1a4e] min-h-screen w-full overflow-x-hidden">
            <Navigation />
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center py-24 md:py-32 bg-[#1a1a4e]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#232360] to-[#1a1a4e] opacity-50" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase">
                            For Organizations
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-[#faf8f5] mb-8"
                    >
                        Transform Executive Presentations Into Revenue-Driving
                        Assets
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-[#faf8f5]/80 font-light leading-relaxed max-w-4xl mx-auto mb-12"
                    >
                        The True Influence Method™ provides a structured,
                        results-driven approach to align leadership voice,
                        message clarity, and audience psychology for measurable
                        business outcomes.
                    </motion.p>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-24 md:py-32 bg-[#1a1a4e]">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-6">
                            The Challenge
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#faf8f5] mb-6">
                            Presentations That Inform But Don't Convert
                        </h2>
                        <p className="text-xl text-[#faf8f5]/80 font-light leading-relaxed">
                            Organizations investing in conferences, investor
                            presentations, and public-facing speaking
                            engagements consistently underperform on return.
                            Presentations are structured, data-driven, and
                            compliant—but they fail to convert.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Qualified audiences do not see themselves in the problem",
                            "Solutions are understood but not prioritized",
                            "Brand differentiation is lost in a crowded field",
                            "Revenue opportunities are left unrealized",
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                }}
                                className="p-6 border border-[#faf8f5]/10 bg-[#faf8f5]/5 hover:bg-[#faf8f5]/10 transition-colors duration-500"
                            >
                                <div className="text-[#d4952a] mb-4">
                                    <Target className="w-8 h-8" />
                                </div>
                                <p className="text-[#faf8f5]/90 font-light leading-relaxed">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-16 p-8 border-l-4 border-[#d4952a] bg-[#faf8f5]/5"
                    >
                        <p className="text-lg text-[#faf8f5]/90 font-light leading-relaxed">
                            In high-stakes environments such as investor
                            conferences, this gap directly impacts deal flow,
                            pipeline velocity, and revenue growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-24 md:py-32 bg-[#232360]">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-6">
                            The Solution
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#faf8f5] mb-6">
                            True Influence Method™
                        </h2>
                        <p className="text-xl text-[#faf8f5]/80 font-light leading-relaxed">
                            We align leadership voice, message clarity, and
                            audience psychology so that every presentation
                            drives measurable business outcomes.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "The audience clearly sees their problem",
                            "The organization's solution becomes the obvious choice",
                            "The speaker is positioned as the authentic authority",
                            "The presentation drives measurable business outcomes",
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -30 : 30,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                }}
                                className="flex items-start gap-4 p-6"
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-[#d4952a]/20 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-[#d4952a]" />
                                </div>
                                <p className="text-[#faf8f5]/90 font-light leading-relaxed pt-2">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-16 text-center p-8 bg-[#d4952a]/10 border border-[#d4952a]/30 rounded-lg"
                    >
                        <p className="text-2xl font-serif text-[#d4952a] italic">
                            "This is not presentation coaching. This is
                            revenue-aligned communication strategy applied to
                            speaking."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Scope of Services Section */}
            <section className="py-24 md:py-32 bg-[#1a1a4e]">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-6">
                            Scope of Services
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#faf8f5] mb-6">
                            Three Levels of Transformation
                        </h2>
                    </motion.div>

                    <div className="space-y-12">
                        {/* Level 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group p-8 md:p-10 border border-[#faf8f5]/10 bg-[#faf8f5]/5 hover:bg-[#faf8f5]/10 transition-colors duration-500 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#d4952a] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-[#d4952a]/20 rounded-full flex items-center justify-center">
                                    <Target className="w-8 h-8 text-[#d4952a]" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase">
                                            Level 1
                                        </span>
                                        <span className="text-[#faf8f5]/30">
                                            |
                                        </span>
                                        <span className="text-[#faf8f5]/60 text-sm">
                                            Signature Talk Development
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-2xl md:text-3xl text-[#faf8f5] mb-4">
                                        Increase Sales Through Message Alignment
                                    </h3>
                                    <p className="text-[#faf8f5]/70 font-light leading-relaxed mb-6">
                                        Objective: Increase sales by aligning
                                        message to the audience's core problem
                                        and positioning the organization's
                                        solution clearly.
                                    </p>
                                    <div className="space-y-2 mb-6">
                                        <p className="text-[#faf8f5]/60 text-sm font-medium">
                                            Services Include:
                                        </p>
                                        <ul className="space-y-2">
                                            {[
                                                "Identification of target audience pain and decision drivers",
                                                "Development of a structured, high-conversion narrative",
                                                "Integration of product/solution into a compelling story",
                                                "Executive delivery coaching",
                                            ].map((service, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2 text-[#faf8f5]/80 text-sm"
                                                >
                                                    <ArrowRight className="w-4 h-4 text-[#d4952a] mt-1 flex-shrink-0" />
                                                    <span>{service}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-[#d4952a]/10 border-l-2 border-[#d4952a]">
                                        <p className="text-[#faf8f5]/90 font-light">
                                            <span className="font-semibold text-[#d4952a]">
                                                Outcome:
                                            </span>{" "}
                                            A clear, differentiated presentation
                                            that moves the audience from
                                            understanding to action.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Level 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="group p-8 md:p-10 border border-[#faf8f5]/10 bg-[#faf8f5]/5 hover:bg-[#faf8f5]/10 transition-colors duration-500 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#d4952a] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-[#d4952a]/20 rounded-full flex items-center justify-center">
                                    <Award className="w-8 h-8 text-[#d4952a]" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase">
                                            Level 2
                                        </span>
                                        <span className="text-[#faf8f5]/30">
                                            |
                                        </span>
                                        <span className="text-[#faf8f5]/60 text-sm">
                                            Speaker Mastery & Authority
                                            Positioning
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-2xl md:text-3xl text-[#faf8f5] mb-4">
                                        Establish Your Speaker as a Recognized
                                        Authority
                                    </h3>
                                    <p className="text-[#faf8f5]/70 font-light leading-relaxed mb-6">
                                        Objective: Increase sales and brand
                                        visibility by establishing the speaker
                                        as a recognized authority.
                                    </p>
                                    <div className="space-y-2 mb-6">
                                        <p className="text-[#faf8f5]/60 text-sm font-medium">
                                            Services Include:
                                        </p>
                                        <ul className="space-y-2">
                                            {[
                                                "Refinement of signature talk for multiple audiences",
                                                "Authority positioning and expertise articulation",
                                                "Messaging for consistency across platforms (stage, meetings, media)",
                                                "Advanced delivery and presence training",
                                            ].map((service, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2 text-[#faf8f5]/80 text-sm"
                                                >
                                                    <ArrowRight className="w-4 h-4 text-[#d4952a] mt-1 flex-shrink-0" />
                                                    <span>{service}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-[#d4952a]/10 border-l-2 border-[#d4952a]">
                                        <p className="text-[#faf8f5]/90 font-light">
                                            <span className="font-semibold text-[#d4952a]">
                                                Outcome:
                                            </span>{" "}
                                            A scalable communication asset that
                                            drives both revenue and brand
                                            recognition.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Level 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="group p-8 md:p-10 border border-[#faf8f5]/10 bg-[#faf8f5]/5 hover:bg-[#faf8f5]/10 transition-colors duration-500 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#d4952a] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-[#d4952a]/20 rounded-full flex items-center justify-center">
                                    <Crown className="w-8 h-8 text-[#d4952a]" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase">
                                            Level 3
                                        </span>
                                        <span className="text-[#faf8f5]/30">
                                            |
                                        </span>
                                        <span className="text-[#faf8f5]/60 text-sm">
                                            Executive Visibility & Strategic
                                            Amplification
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-2xl md:text-3xl text-[#faf8f5] mb-4">
                                        Expand Market Visibility and Demand
                                    </h3>
                                    <p className="text-[#faf8f5]/70 font-light leading-relaxed mb-6">
                                        Objective: Expand market visibility and
                                        demand through strategic exposure and
                                        content integration.
                                    </p>
                                    <div className="space-y-2 mb-6">
                                        <p className="text-[#faf8f5]/60 text-sm font-medium">
                                            Services Include:
                                        </p>
                                        <ul className="space-y-2">
                                            {[
                                                "Private, curated speaking event with live audience",
                                                "Professional video and content capture",
                                                "Strategic brand positioning for marketing campaigns",
                                                "Integration into social and media channels",
                                            ].map((service, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2 text-[#faf8f5]/80 text-sm"
                                                >
                                                    <ArrowRight className="w-4 h-4 text-[#d4952a] mt-1 flex-shrink-0" />
                                                    <span>{service}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-[#d4952a]/10 border-l-2 border-[#d4952a]">
                                        <p className="text-[#faf8f5]/90 font-light">
                                            <span className="font-semibold text-[#d4952a]">
                                                Outcome:
                                            </span>{" "}
                                            Increased inbound demand, enhanced
                                            brand authority, and sustained
                                            market visibility.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Measurable Results Section */}
            <section className="py-24 md:py-32 bg-[#232360]">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-6">
                            Measurable Results
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#faf8f5] mb-6">
                            Tangible Outcomes That Drive Growth
                        </h2>
                        <p className="text-xl text-[#faf8f5]/80 font-light leading-relaxed">
                            Engagements are designed to produce tangible
                            outcomes that directly impact your bottom line.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            {
                                icon: Zap,
                                label: "Increased audience engagement and post-event conversations",
                            },
                            {
                                icon: TrendingUp,
                                label: "Improved conversion from presentation to opportunity pipeline",
                            },
                            {
                                icon: Star,
                                label: "Strengthened brand positioning in competitive environments",
                            },
                            {
                                icon: Award,
                                label: "Documented increases in sales activity and revenue",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                }}
                                className="p-6 text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4952a]/20 rounded-full mb-4">
                                    <item.icon className="w-8 h-8 text-[#d4952a]" />
                                </div>
                                <p className="text-[#faf8f5]/90 font-light leading-relaxed">
                                    {item.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-4xl mx-auto p-8 bg-[#faf8f5]/5 border border-[#d4952a]/30 rounded-lg"
                    >
                        <div className="text-center mb-6">
                            <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase">
                                Real Results
                            </span>
                        </div>
                        <p className="text-[#faf8f5]/80 font-light leading-relaxed mb-6">
                            A recent client presenting at a national investor
                            conference achieved:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-4">
                                <div className="text-3xl font-serif text-[#d4952a] mb-2">
                                    Significant
                                </div>
                                <p className="text-[#faf8f5]/70 text-sm">
                                    increase in audience engagement
                                </p>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-3xl font-serif text-[#d4952a] mb-2">
                                    Dozens
                                </div>
                                <p className="text-[#faf8f5]/70 text-sm">
                                    new qualified conversations
                                </p>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-3xl font-serif text-[#d4952a] mb-2">
                                    40%+
                                </div>
                                <p className="text-[#faf8f5]/70 text-sm">
                                    increase in sales activity within one week
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Differentiation Section */}
            <section className="py-24 md:py-32 bg-[#1a1a4e]">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-6">
                            Differentiation
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#faf8f5] mb-6">
                            What Sets Us Apart
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Direct Alignment to Revenue Outcomes",
                                description:
                                    "Speaking is structured as a sales and decision-making tool, not a performance exercise",
                            },
                            {
                                title: "Proprietary Methodology – TrueInfluenceMethod™",
                                description:
                                    "Converts expertise into clear, compelling, and actionable messaging",
                            },
                            {
                                title: "Executive-Level Application",
                                description:
                                    "Designed for leaders operating in high-stakes, high-visibility environments",
                            },
                            {
                                title: "Authority Positioning Through Voice",
                                description:
                                    "Establishes the speaker as the trusted, obvious choice in the room",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                }}
                                className="group p-8 border border-[#faf8f5]/10 bg-[#faf8f5]/5 hover:bg-[#faf8f5]/10 transition-colors duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#d4952a] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                                <h3 className="font-serif text-xl md:text-2xl text-[#faf8f5] mb-4 group-hover:text-[#d4952a] transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-[#faf8f5]/70 font-light leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value to Client Section */}
            <section className="py-24 md:py-32 bg-[#232360]">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-6">
                            Value to Client
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#faf8f5] mb-6">
                            More Than a Presentation
                        </h2>
                        <p className="text-xl text-[#faf8f5]/80 font-light leading-relaxed mb-12">
                            You gain a leadership asset that drives revenue,
                            differentiates your organization, positions your
                            solution clearly in the market, and converts
                            attention into action.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Drives Revenue",
                            "Differentiates Your Organization",
                            "Positions Your Solution Clearly",
                            "Converts Attention Into Action",
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                }}
                                className="p-8 text-center border border-[#d4952a]/30 bg-[#d4952a]/5 hover:bg-[#d4952a]/10 transition-all duration-500 rounded-lg"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#d4952a]/20 rounded-full mb-4">
                                    <CheckCircle2 className="w-6 h-6 text-[#d4952a]" />
                                </div>
                                <p className="text-[#faf8f5] font-medium">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement Model Section */}
            <section className="py-24 md:py-32 bg-[#1a1a4e]">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-6">
                            Engagement Model
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#faf8f5] mb-6">
                            Investment in Your Success
                        </h2>
                        <p className="text-xl text-[#faf8f5]/80 font-light leading-relaxed">
                            Choose the level of engagement that aligns with your
                            organization's goals and timeline.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Level 1 Pricing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group p-8 border border-[#faf8f5]/10 bg-[#faf8f5]/5 hover:bg-[#faf8f5]/10 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#d4952a] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4952a]/20 rounded-full mb-4">
                                    <Target className="w-8 h-8 text-[#d4952a]" />
                                </div>
                                <h3 className="font-serif text-2xl text-[#faf8f5] mb-2">
                                    Level 1
                                </h3>
                                <p className="text-[#faf8f5]/60 text-sm mb-4">
                                    Signature Talk
                                </p>
                                <div className="text-4xl font-serif text-[#d4952a] mb-2">
                                    $35,000
                                </div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Target audience pain identification",
                                    "High-conversion narrative development",
                                    "Product/solution story integration",
                                    "Executive delivery coaching",
                                ].map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2 text-[#faf8f5]/80 text-sm"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-[#d4952a] mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Level 2 Pricing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="group p-8 border-2 border-[#d4952a]/50 bg-[#d4952a]/5 hover:bg-[#d4952a]/10 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#d4952a] to-transparent" />
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#d4952a] text-[#1a1a4e] px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase rounded-full">
                                Most Popular
                            </div>
                            <div className="text-center mb-8 mt-4">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4952a]/20 rounded-full mb-4">
                                    <Award className="w-8 h-8 text-[#d4952a]" />
                                </div>
                                <h3 className="font-serif text-2xl text-[#faf8f5] mb-2">
                                    Level 2
                                </h3>
                                <p className="text-[#faf8f5]/60 text-sm mb-4">
                                    Speaker Mastery
                                </p>
                                <div className="text-4xl font-serif text-[#d4952a] mb-2">
                                    $75,000
                                </div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Multi-audience talk refinement",
                                    "Authority positioning strategy",
                                    "Cross-platform messaging",
                                    "Advanced presence training",
                                    "Everything in Level 1",
                                ].map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2 text-[#faf8f5]/80 text-sm"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-[#d4952a] mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Level 3 Pricing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="group p-8 border border-[#faf8f5]/10 bg-[#faf8f5]/5 hover:bg-[#faf8f5]/10 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#d4952a] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4952a]/20 rounded-full mb-4">
                                    <Crown className="w-8 h-8 text-[#d4952a]" />
                                </div>
                                <h3 className="font-serif text-2xl text-[#faf8f5] mb-2">
                                    Level 3
                                </h3>
                                <p className="text-[#faf8f5]/60 text-sm mb-4">
                                    Executive Visibility & Amplification
                                </p>
                                <div className="text-4xl font-serif text-[#d4952a] mb-2">
                                    $250,000
                                </div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Private curated speaking event",
                                    "Professional video capture",
                                    "Strategic brand positioning",
                                    "Social & media integration",
                                    "Everything in Level 1 & 2",
                                ].map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2 text-[#faf8f5]/80 text-sm"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-[#d4952a] mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-32 bg-[#232360]">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-serif text-4xl md:text-5xl text-[#faf8f5] mb-6">
                            Ready to Transform Your Executive Communications?
                        </h2>
                        <p className="text-xl text-[#faf8f5]/80 font-light leading-relaxed mb-12">
                            Let's discuss how the True Influence Method™ can
                            help you achieve measurable business outcomes
                            through strategic speaking.
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
