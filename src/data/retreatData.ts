export interface RetreatFeature {
    title: string;
    description: string;
    icon: string;
}

export interface RetreatDay {
    day: number;
    title: string;
    theme: string;
    sessions: Session[];
}

export interface Session {
    period: string;
    time?: string;
    activities: Activity[];
}

export interface Activity {
    time?: string;
    title: string;
    description?: string;
    highlight?: boolean;
    specialNote?: string;
}

export interface Award {
    title: string;
    description: string;
}

export const retreatFeatures: RetreatFeature[] = [
    {
        title: "Focused Work",
        description: "Intensive, productive time to develop your message",
        icon: "Target"
    },
    {
        title: "Partner Feedback",
        description: "Real-time feedback from peers",
        icon: "Users"
    },
    {
        title: "Live Application",
        description: "Apply training frameworks in real-time",
        icon: "Play"
    },
    {
        title: "Deep Integration",
        description: "Reflect and integrate learning",
        icon: "BookOpen"
    },
    {
        title: "VIP Access",
        description: "Private dinner for private clients",
        icon: "Crown"
    },
    {
        title: "Stage Performance",
        description: "Deliver your talk with real evaluation",
        icon: "Mic"
    },
    {
        title: "Advancement Scoring",
        description: "Progress through scoring system",
        icon: "TrendingUp"
    },
    {
        title: "Recognition",
        description: "Celebrate completion and growth",
        icon: "Award"
    }
];

export const retreatDays: RetreatDay[] = [
    {
        day: 1,
        title: "Arrival Day",
        theme: "Break the Performance",
        sessions: [
            {
                period: "ARRIVAL & PM SESSION",
                activities: [
                    {
                        time: "3:00 PM",
                        title: "Welcome + Container Setting",
                        description: "Journals, agenda, and norms"
                    },
                    {
                        time: "",
                        title: "Define the Work",
                        description: "Expectations with rubric & advancement"
                    },
                    {
                        time: "",
                        title: "Focused Work",
                        description: "Story + message clarity"
                    },
                    {
                        time: "",
                        title: "Opening Intentions",
                        description: "Meet & connect"
                    },
                    {
                        time: "",
                        title: "Cohort Meet-up",
                        description: "Same-phase students - review advancement goals & peer feedback structure"
                    },
                    {
                        time: "5:30 PM",
                        title: "Dinner",
                        description: "Sit with Pod [Green, Blue, Orange or Purple w/ room] - circle of mixed level students, with guide",
                        highlight: true
                    },
                    {
                        time: "",
                        title: "Free Time",
                        description: "Evening relaxation and connection"
                    }
                ]
            }
        ]
    },
    {
        day: 2,
        title: "Build + Refine Day",
        theme: "Say It So It Lands",
        sessions: [
            {
                period: "AM SESSION",
                activities: [
                    {
                        time: "",
                        title: "Breakfast & Welcome Remarks",
                        description: "Start the day with connection"
                    },
                    {
                        time: "",
                        title: "Pods: Story Circle & Integration",
                        description: "Share insights and reflections"
                    },
                    {
                        time: "",
                        title: "Full Group Discussion",
                        description: "Collective learning and exchange"
                    }
                ]
            },
            {
                period: "PM SESSION",
                activities: [
                    {
                        time: "",
                        title: "Self-Advancement Session 1",
                        description: "Focused work: design, structure & message"
                    },
                    {
                        time: "",
                        title: "Partners: Practice & Feedback",
                        description: "Apply learnings with peer review"
                    },
                    {
                        time: "",
                        title: "Self-Advancement Session 2",
                        description: "Refined work: design, structure & message"
                    },
                    {
                        time: "",
                        title: "Pods: Live Practice",
                        description: "Small group practice sessions"
                    },
                    {
                        time: "",
                        title: "Private 1:1 with Joanna",
                        description: "Individual advisory session",
                        highlight: true
                    }
                ]
            },
            {
                period: "EVENING",
                time: "After Dinner",
                activities: [
                    {
                        time: "",
                        title: "VIP Dinner",
                        description: "Private clients only - deeper conversation, proximity to Joanna, identity expansion",
                        highlight: true,
                        specialNote: "Private clients exclusive"
                    }
                ]
            }
        ]
    },
    {
        day: 3,
        title: "Promotion Day",
        theme: "Be Seen and Celebrated",
        sessions: [
            {
                period: "AM SESSION",
                activities: [
                    {
                        time: "",
                        title: "Breakfast & Welcome Remarks",
                        description: "Final day preparations"
                    },
                    {
                        time: "",
                        title: "Pod: Expectations + Rubric Review",
                        description: "Stage Day preparation"
                    },
                    {
                        time: "",
                        title: "Partner: Final Practice",
                        description: "Last rehearsal before stage"
                    }
                ]
            },
            {
                period: "PM SESSION - STAGE DAY",
                activities: [
                    {
                        time: "",
                        title: "Set Intention & Feedback",
                        description: "Begin Stage Day with purpose"
                    },
                    {
                        time: "",
                        title: "Participant Talks",
                        description: "Each participant delivers their talk",
                        highlight: true
                    },
                    {
                        time: "",
                        title: "Real-Time Scoring",
                        description: "Audience scans QR code & completes rubric in real time. Scores populated instantly.",
                        highlight: true
                    },
                    {
                        time: "",
                        title: "Qualification",
                        description: "Scores determine: Advancement, Top speakers, Promotions to next level",
                        highlight: true
                    }
                ]
            },
            {
                period: "AWARDS + RECOGNITION",
                activities: [
                    {
                        time: "",
                        title: "Top 3 Appreciation Awards",
                        description: "Recognize outstanding performances",
                        highlight: true
                    },
                    {
                        time: "",
                        title: "Peer Kudos",
                        description: "Celebrate in the app",
                        highlight: true
                    },
                    {
                        time: "",
                        title: "Acknowledgment",
                        description: "Celebrate growth and risk-taking",
                        highlight: true
                    }
                ]
            },
            {
                period: "CLOSING CIRCLE",
                activities: [
                    {
                        time: "",
                        title: "Pods: Reflection & Integration",
                        description: "Identity anchoring"
                    },
                    {
                        time: "",
                        title: "Next Steps & Exit Survey",
                        description: "Plan your continued journey"
                    }
                ]
            }
        ]
    }
];

export const retreatAwards: Award[] = [
    {
        title: "Top 3 Appreciation Awards",
        description: "Recognize the highest-scoring performances on Stage Day"
    },
    {
        title: "Peer Kudos",
        description: "Celebrate each other's growth and courage in the app"
    },
    {
        title: "Growth Acknowledgment",
        description: "Honor those who took meaningful risks and showed significant development"
    }
];

export const retreatHighlights = [
    {
        title: "Relaxation Room",
        description: "Open 9am-8pm - A downtime room for relaxing, conversation and showing up as you are. Guides are present and available for connection and reflection. Intended to be a safe space that supports growth in what you're building.",
        icon: "Home"
    },
    {
        title: "Stage Day",
        description: "The culmination of the retreat where all work leads to - each participant delivers their talk with real-time feedback and scoring.",
        icon: "Sparkles"
    },
    {
        title: "VIP Dinner",
        description: "Exclusive private client dinner featuring deeper conversation, proximity to Joanna, and identity expansion.",
        icon: "Crown"
    }
];
