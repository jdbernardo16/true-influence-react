import { motion } from "framer-motion";
import { phases } from "../../data/courseData";

export function PhaseJourneySection() {
    const scrollToPhase = (phaseId: number) => {
        const element = document.getElementById(`phase-${phaseId}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="py-20 md:py-28 bg-[#faf8f5] text-[#1a1a4e]">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <span className="text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase block mb-6">
                        The Journey
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl mb-6 text-[#1a1a4e]">
                        Five Phases to Transformation
                    </h2>
                    <p className="text-lg md:text-xl text-[#1a1a4e]/70 font-light">
                        Choose your starting point and begin your leadership journey
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#d4952a]/30" />

                    <div className="space-y-20 md:space-y-32">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={phase.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-start md:items-start gap-8 md:gap-16 relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#d4952a] rounded-full ring-4 ring-[#faf8f5] z-10 mt-2 md:mt-0" />

                                <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                                    <span className="block text-[#d4952a] text-4xl md:text-5xl font-serif opacity-30 mb-2">
                                        0{phase.id}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a4e] mb-1">
                                        {phase.name}
                                    </h3>
                                    <h4 className="text-sm uppercase tracking-widest text-[#d4952a] mb-4 font-medium">
                                        {phase.level}
                                    </h4>
                                    <p className="text-[#1a1a4e]/80 leading-relaxed text-lg font-light mb-6">
                                        {phase.goal}
                                    </p>
                                    <motion.button
                                        onClick={() => scrollToPhase(phase.id)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`inline-flex items-center gap-2 bg-[#d4952a] hover:bg-[#b87d1f] text-[#1a1a4e] px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                                            index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                                        }`}
                                    >
                                        <span>Explore Phase {phase.id}</span>
                                    </motion.button>
                                </div>

                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
