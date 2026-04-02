import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles, Star } from "lucide-react";
import { retreatDays } from "../../data/retreatData";

const dayColors = [
    {
        bg: "from-green-900/20 to-green-900/5",
        border: "border-green-500/30",
        accent: "text-green-400"
    },
    {
        bg: "from-blue-900/20 to-blue-900/5",
        border: "border-blue-500/30",
        accent: "text-blue-400"
    },
    {
        bg: "from-yellow-900/20 to-yellow-900/5",
        border: "border-yellow-500/30",
        accent: "text-yellow-400"
    }
];

export function RetreatDayScheduleSection() {
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
                        The Journey
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f5] mb-6">
                        Three Days to Transformation
                    </h2>
                    <p className="text-lg text-[#faf8f5]/80 font-light max-w-2xl mx-auto">
                        From arrival to stage day, every moment is designed for growth
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {retreatDays.map((day, dayIndex) => {
                        const colors = dayColors[dayIndex];
                        return (
                            <motion.div
                                key={day.day}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
                                className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-3xl overflow-hidden`}
                            >
                                <div className="p-8 md:p-12">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-2xl flex items-center justify-center`}>
                                                <span className="text-2xl font-serif font-bold text-[#faf8f5]">
                                                    0{day.day}
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="font-serif text-2xl md:text-3xl text-[#faf8f5] mb-1">
                                                    {day.title}
                                                </h3>
                                                <p className={`text-sm font-medium ${colors.accent} tracking-wider uppercase`}>
                                                    {day.theme}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {day.sessions.map((session, sessionIndex) => (
                                            <div key={sessionIndex} className="space-y-4">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <Calendar className={`w-5 h-5 ${colors.accent}`} />
                                                    <h4 className="text-lg font-medium text-[#faf8f5] uppercase tracking-wider">
                                                        {session.period}
                                                    </h4>
                                                    {session.time && (
                                                        <div className="flex items-center gap-2 ml-auto">
                                                            <Clock className="w-4 h-4 text-[#faf8f5]/60" />
                                                            <span className="text-sm text-[#faf8f5]/60">
                                                                {session.time}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="grid grid-cols-1 gap-3">
                                                    {session.activities.map((activity, activityIndex) => (
                                                        <motion.div
                                                            key={activityIndex}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: (dayIndex * 0.2) + (sessionIndex * 0.1) + (activityIndex * 0.05) }}
                                                            className={`relative p-4 rounded-xl transition-all duration-300 ${
                                                                activity.highlight
                                                                    ? "bg-[#d4952a]/10 border-2 border-[#d4952a]/50"
                                                                    : "bg-[#faf8f5]/5 border border-[#faf8f5]/10 hover:border-[#faf8f5]/30"
                                                            }`}
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                {activity.highlight && (
                                                                    <Sparkles className={`w-5 h-5 ${colors.accent} mt-0.5 flex-shrink-0`} />
                                                                )}
                                                                <div className="flex-1">
                                                                    <div className="flex items-center gap-2 mb-1">
                                                                        {activity.time && (
                                                                            <span className={`text-xs ${colors.accent} font-medium`}>
                                                                                {activity.time}
                                                                            </span>
                                                                        )}
                                                                        <h5 className="font-medium text-[#faf8f5]">
                                                                            {activity.title}
                                                                        </h5>
                                                                        {activity.specialNote && (
                                                                            <Star className="w-4 h-4 text-[#d4952a]" />
                                                                        )}
                                                                    </div>
                                                                    {activity.description && (
                                                                        <p className="text-[#faf8f5]/70 font-light text-sm">
                                                                            {activity.description}
                                                                        </p>
                                                                    )}
                                                                    {activity.specialNote && (
                                                                        <span className="inline-block mt-2 text-xs text-[#d4952a] font-medium tracking-wider uppercase">
                                                                            {activity.specialNote}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
