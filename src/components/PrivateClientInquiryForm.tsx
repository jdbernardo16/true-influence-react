import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Google Form action URL for Private Client Inquiry
const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLScxaDXVN48iueQiOq9Q5kVcoHH-QI4V4Dz1STSpa-lVZgV1Bw/formResponse";

export function PrivateClientInquiryForm() {
    const navigate = useNavigate();

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        website: "",
        storyBlock: [] as string[],
        visionGoal: "",
        outcomeGoal: "",
        professionalPath: "",
        investment: "",
        additionalInfo: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value, type } = e.target;

        if (type === "checkbox") {
            const checkbox = e.target as HTMLInputElement;
            const checked = checkbox.checked;
            const checkboxValue = checkbox.value;

            setFormData((prev) => ({
                ...prev,
                [name]: checked
                    ? [
                          ...(prev[name as keyof typeof prev] as string[]),
                          checkboxValue,
                      ]
                    : (prev[name as keyof typeof prev] as string[]).filter(
                          (item) => item !== checkboxValue,
                      ),
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitError("");

        // Client-side validation
        const requiredFields = {
            fullName: "Full Name",
            email: "Email Address",
            phone: "Phone Number",
            visionGoal: "Primary Goal",
            outcomeGoal: "Desired Outcome",
            professionalPath: "Current Professional Path",
            investment: "Investment Level",
        };

        const missingFields: string[] = [];
        for (const [key, label] of Object.entries(requiredFields)) {
            const value = formData[key as keyof typeof formData];
            if (!value || (typeof value === "string" && value.trim() === "")) {
                missingFields.push(label);
            }
        }

        if (missingFields.length > 0) {
            setSubmitError(
                `Please fill in the following required fields: ${missingFields.join(
                    ", ",
                )}`,
            );
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitError("Please enter a valid email address.");
            return;
        }

        // Validate that at least one checkbox is selected for "Identifying the Block"
        if (formData.storyBlock.length === 0) {
            setSubmitError(
                "Please select at least one option for 'Identifying the Block'.",
            );
            return;
        }

        setIsSubmitting(true);

        // Create URLSearchParams directly for consistent behavior across environments
        const params = new URLSearchParams();

        // Required fields - always included
        params.append("entry.1752943827", formData.fullName);
        params.append("entry.1260464480", formData.email);
        params.append("entry.1997012052", formData.phone);

        // Optional fields - only append if they have values
        if (formData.website.trim()) {
            params.append("entry.1965474626", formData.website);
        }

        // Story Block is now required (at least one checkbox must be selected)
        // Include sentinel field for checkboxes
        params.append("entry.318364041_sentinel", "");
        // For Google Forms, each checkbox value must be appended separately
        formData.storyBlock.forEach((value) => {
            params.append("entry.318364041", value);
        });

        // Include sentinel fields for radio buttons
        params.append("entry.735352643_sentinel", "");
        params.append("entry.735352643", formData.visionGoal);

        params.append("entry.1836767856_sentinel", "");
        params.append("entry.1836767856", formData.outcomeGoal);

        params.append("entry.159948075_sentinel", "");
        params.append("entry.159948075", formData.professionalPath);

        params.append("entry.1391953150_sentinel", "");
        params.append("entry.1391953150", formData.investment);

        // Optional additional info - only append if it has a value
        if (formData.additionalInfo.trim()) {
            params.append("entry.2130249970", formData.additionalInfo);
        }

        // Submit to Google Forms using fetch
        fetch(GOOGLE_FORM_ACTION, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
        })
            .then(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    website: "",
                    storyBlock: [],
                    visionGoal: "",
                    outcomeGoal: "",
                    professionalPath: "",
                    investment: "",
                    additionalInfo: "",
                });
            })
            .catch(() => {
                // Fallback: open in new tab if fetch fails
                const url = new URL(GOOGLE_FORM_ACTION);
                url.searchParams.append("entry.1752943827", formData.fullName);
                url.searchParams.append("entry.1260464480", formData.email);
                url.searchParams.append("entry.1997012052", formData.phone);

                // Optional fields - only append if they have values
                if (formData.website.trim()) {
                    url.searchParams.append(
                        "entry.1965474626",
                        formData.website,
                    );
                }

                // Story Block is now required (at least one checkbox must be selected)
                // Include sentinel field for checkboxes
                url.searchParams.append("entry.318364041_sentinel", "");
                // For Google Forms, each checkbox value must be appended separately
                formData.storyBlock.forEach((value) => {
                    url.searchParams.append("entry.318364041", value);
                });

                // Include sentinel fields for radio buttons
                url.searchParams.append("entry.735352643_sentinel", "");
                url.searchParams.append("entry.735352643", formData.visionGoal);

                url.searchParams.append("entry.1836767856_sentinel", "");
                url.searchParams.append(
                    "entry.1836767856",
                    formData.outcomeGoal,
                );

                url.searchParams.append("entry.159948075_sentinel", "");
                url.searchParams.append(
                    "entry.159948075",
                    formData.professionalPath,
                );

                url.searchParams.append("entry.1391953150_sentinel", "");
                url.searchParams.append(
                    "entry.1391953150",
                    formData.investment,
                );

                // Optional additional info - only append if it has a value
                if (formData.additionalInfo.trim()) {
                    url.searchParams.append(
                        "entry.2130249970",
                        formData.additionalInfo,
                    );
                }

                window.open(url.toString(), "_blank");
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    website: "",
                    storyBlock: [],
                    visionGoal: "",
                    outcomeGoal: "",
                    professionalPath: "",
                    investment: "",
                    additionalInfo: "",
                });
            });
    };

    return (
        <div className="min-h-screen bg-[#1a1a4e]">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a4e]/80 backdrop-blur-md border-b border-[#faf8f5]/10">
                <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2"
                    >
                        <img
                            src="/icononly_transparent_nobuffer.png"
                            alt="Logo"
                            className="w-10 h-10"
                        />
                    </button>
                    <button
                        onClick={() => navigate("/")}
                        className="text-[#faf8f5]/60 hover:text-[#d4952a] transition-colors text-sm font-medium tracking-wide uppercase"
                    >
                        Back to Home
                    </button>
                </div>
            </nav>

            <div className="pt-24 pb-32 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="block text-[#d4952a] text-xs font-bold tracking-[0.2em] uppercase mb-6"
                        >
                            PRIVATE CLIENT INQUIRY
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="font-serif text-4xl md:text-5xl text-[#faf8f5] mb-6"
                        >
                            Find Your Story
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-[#faf8f5]/70 font-light leading-relaxed"
                        >
                            Phase 1 & Private Training Application
                        </motion.p>
                    </motion.div>

                    {/* Registration Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl p-8 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Question 1: The Essentials */}
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <h2 className="font-serif text-2xl text-[#d4952a] mb-1">
                                        Question 1: The Essentials
                                    </h2>
                                    <div className="h-0.5 w-20 bg-[#d4952a]/30"></div>
                                </motion.div>

                                <div className="text-left">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Full Name{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your full name"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    />
                                </div>

                                <div className="text-left">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Email Address{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    />
                                </div>

                                <div className="text-left">
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Phone Number{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+1 (555) 123-4567"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    />
                                </div>

                                <div className="text-left">
                                    <label
                                        htmlFor="website"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Website / LinkedIn Profile (Optional)
                                    </label>
                                    <input
                                        type="url"
                                        id="website"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        placeholder="https://yourwebsite.com or https://linkedin.com/in/yourprofile"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    />
                                </div>
                            </div>

                            {/* Question 2: Identifying the "Block" */}
                            <div className="space-y-6 pt-6 border-t border-[#faf8f5]/10">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <h2 className="font-serif text-2xl text-[#d4952a] mb-1">
                                        Question 2: Identifying the "Block"
                                    </h2>
                                    <div className="h-0.5 w-20 bg-[#d4952a]/30"></div>
                                </motion.div>
                                <p className="text-sm text-[#faf8f5]/70">
                                    Which of the following best describes your
                                    current relationship with your story?
                                    (Select all that apply)
                                </p>

                                <div className="space-y-3">
                                    {[
                                        "I feel fear or anxiety when I think about speaking in public.",
                                        "I'm entering a new chapter of my life/career, and I know my story is the key, but I feel stuck.",
                                        "I know I have a powerful story, but I don't know exactly what it is or how to structure it.",
                                        "I have a story, but I don't feel 'safe' or 'brave' enough to share the true version of it yet.",
                                    ].map((option) => (
                                        <label
                                            key={option}
                                            className="flex items-start gap-3 cursor-pointer group"
                                        >
                                            <input
                                                type="checkbox"
                                                name="storyBlock"
                                                value={option}
                                                checked={formData.storyBlock.includes(
                                                    option,
                                                )}
                                                onChange={handleChange}
                                                className="mt-1 w-5 h-5 rounded border-[#faf8f5]/20 bg-[#faf8f5]/5 text-[#d4952a] focus:ring-[#d4952a] focus:ring-offset-0 focus:ring-offset-[#1a1a4e] transition-all group-hover:border-[#d4952a]/50"
                                            />
                                            <span className="text-sm text-[#faf8f5]/80 leading-relaxed">
                                                {option}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Question 3: The Vision (The "Why") */}
                            <div className="space-y-6 pt-6 border-t border-[#faf8f5]/10">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <h2 className="font-serif text-2xl text-[#d4952a] mb-1">
                                        Question 3: The Vision (The "Why")
                                    </h2>
                                    <div className="h-0.5 w-20 bg-[#d4952a]/30"></div>
                                </motion.div>
                                <p className="text-sm text-[#faf8f5]/70">
                                    What is the primary goal for sharing this
                                    story?
                                </p>

                                <div className="text-left">
                                    <select
                                        id="visionGoal"
                                        name="visionGoal"
                                        value={formData.visionGoal}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    >
                                        <option
                                            value=""
                                            className="bg-[#1a1a4e]"
                                        >
                                            Select your primary goal
                                        </option>
                                        <option
                                            value="Building my business/personal brand"
                                            className="bg-[#1a1a4e]"
                                        >
                                            Building my business/personal brand
                                        </option>
                                        <option
                                            value="Writing a book"
                                            className="bg-[#1a1a4e]"
                                        >
                                            Writing a book
                                        </option>
                                        <option
                                            value="Securing high-level speaking engagements"
                                            className="bg-[#1a1a4e]"
                                        >
                                            Securing high-level speaking
                                            engagements
                                        </option>
                                        <option
                                            value="Establishing a global legacy/thought leadership"
                                            className="bg-[#1a1a4e]"
                                        >
                                            Establishing a global legacy/thought
                                            leadership
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {/* Question 4: Outcomes */}
                            <div className="space-y-6 pt-6 border-t border-[#faf8f5]/10">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    <h2 className="font-serif text-2xl text-[#d4952a] mb-1">
                                        Question 4: Outcomes
                                    </h2>
                                    <div className="h-0.5 w-20 bg-[#d4952a]/30"></div>
                                </motion.div>
                                <p className="text-sm text-[#faf8f5]/70">
                                    What does "success" look like for you 90
                                    days from now?
                                </p>

                                <div className="text-left">
                                    <select
                                        id="outcomeGoal"
                                        name="outcomeGoal"
                                        value={formData.outcomeGoal}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    >
                                        <option
                                            value=""
                                            className="bg-[#1a1a4e]"
                                        >
                                            Select your desired outcome
                                        </option>
                                        <option
                                            value="Clarity in my message, and how it connects to my business"
                                            className="bg-[#1a1a4e]"
                                        >
                                            Clarity in my message, and how it
                                            connects to my business
                                        </option>
                                        <option
                                            value="Standing on a stage with a polished 7-minute story"
                                            className="bg-[#1a1a4e]"
                                        >
                                            Standing on a stage with a polished
                                            7-minute story
                                        </option>
                                        <option
                                            value="Feeling total confidence in my body"
                                            className="bg-[#1a1a4e]"
                                        >
                                            Feeling total confidence in my body
                                        </option>
                                        <option
                                            value="Having safety around using my story to enhance my leadership"
                                            className="bg-[#1a1a4e]"
                                        >
                                            Having safety around using my story
                                            to enhance my leadership
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {/* Question 5: Current Scope & Legacy */}
                            <div className="space-y-6 pt-6 border-t border-[#faf8f5]/10">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.0 }}
                                >
                                    <h2 className="font-serif text-2xl text-[#d4952a] mb-1">
                                        Question 5: Current Scope & Legacy
                                    </h2>
                                    <div className="h-0.5 w-20 bg-[#d4952a]/30"></div>
                                </motion.div>
                                <p className="text-sm text-[#faf8f5]/70">
                                    Which best describes your current
                                    professional path?
                                </p>

                                <div className="text-left">
                                    <select
                                        id="professionalPath"
                                        name="professionalPath"
                                        value={formData.professionalPath}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    >
                                        <option
                                            value=""
                                            className="bg-[#1a1a4e]"
                                        >
                                            Select your professional path
                                        </option>
                                        <option
                                            value="Emerging Leader/Entrepreneur (Ready to master my message)"
                                            className="bg-[#1a1a4e]"
                                        >
                                            Emerging Leader/Entrepreneur (Ready
                                            to master my message)
                                        </option>
                                        <option
                                            value="Established Executive/Founder (Seeking 'Healed Leadership' and truth)"
                                            className="bg-[#1a1a4e]"
                                        >
                                            Established Executive/Founder
                                            (Seeking "Healed Leadership" and
                                            truth)
                                        </option>
                                        <option
                                            value="Global Visionary/Philanthropist (Building a multi-generational legacy)"
                                            className="bg-[#1a1a4e]"
                                        >
                                            Global Visionary/Philanthropist
                                            (Building a multi-generational
                                            legacy)
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {/* Section 6: Investment & Alignment */}
                            <div className="space-y-6 pt-6 border-t border-[#faf8f5]/10">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.1 }}
                                >
                                    <h2 className="font-serif text-2xl text-[#d4952a] mb-1">
                                        Section 6: Investment & Alignment
                                    </h2>
                                    <div className="h-0.5 w-20 bg-[#d4952a]/30"></div>
                                </motion.div>
                                <p className="text-sm text-[#faf8f5]/70 leading-relaxed">
                                    To provide the highest level of
                                    transformation, Phase 1 involves a 90-day
                                    Mastermind and Retreat experience. Pricing
                                    for this level of private and group training
                                    ranges from $6,000 to $20,000+. Is this an
                                    investment you are prepared to make to reach
                                    your goals?
                                </p>

                                <div className="space-y-3">
                                    {[
                                        "Yes, I am ready to invest in the $20,000 Beginning Private Training Experience.",
                                        "Yes, I am ready to invest in the $45,000 for the Advanced Private Training Experience.",
                                        "Yes, I am interested in the $6,000 90-Day Mastermind & Retreat.",
                                        "I would like to discuss which option is the best fit for my current needs.",
                                    ].map((option) => (
                                        <label
                                            key={option}
                                            className="flex items-start gap-3 cursor-pointer group"
                                        >
                                            <input
                                                type="radio"
                                                name="investment"
                                                value={option}
                                                checked={
                                                    formData.investment ===
                                                    option
                                                }
                                                onChange={handleChange}
                                                required
                                                className="mt-1 w-5 h-5 border-[#faf8f5]/20 bg-[#faf8f5]/5 text-[#d4952a] focus:ring-[#d4952a] focus:ring-offset-0 focus:ring-offset-[#1a1a4e] transition-all group-hover:border-[#d4952a]/50"
                                            />
                                            <span className="text-sm text-[#faf8f5]/80 leading-relaxed">
                                                {option}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Section 7: The Find Your Story Call */}
                            <div className="space-y-6 pt-6 border-t border-[#faf8f5]/10">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                >
                                    <h2 className="font-serif text-2xl text-[#d4952a] mb-1">
                                        Section 7: The Find Your Story Call
                                    </h2>
                                    <div className="h-0.5 w-20 bg-[#d4952a]/30"></div>
                                </motion.div>
                                <p className="text-sm text-[#faf8f5]/70">
                                    If you plan to become a private client, the
                                    first step is meeting with Joanna. Is there
                                    anything else Joanna should know before your
                                    session?
                                </p>

                                <div className="text-left">
                                    <textarea
                                        id="additionalInfo"
                                        name="additionalInfo"
                                        value={formData.additionalInfo}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Share any additional information that would be helpful for our session..."
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all resize-none"
                                    />
                                </div>
                            </div>

                            {/* Error Message */}
                            {submitError && (
                                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                                    <p className="text-red-400 text-sm font-medium">
                                        {submitError}
                                    </p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 bg-[#d4952a] hover:bg-[#e8a838] text-[#1a1a4e] font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#d4952a]/20 text-lg"
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : "Submit Your Application"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-[#faf8f5]/10 py-12 px-6 md:px-12">
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    <img
                        src="/icononly_transparent_nobuffer.png"
                        alt="Logo"
                        className="w-12 h-12 opacity-30 mb-6 grayscale"
                    />
                    <p className="text-xs text-[#faf8f5]/30 uppercase tracking-widest">
                        © {new Date().getFullYear()} Joanna Horton McPherson.
                        All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Success Modal */}
            <AnimatePresence>
                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setIsSubmitted(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 300,
                            }}
                            className="bg-[#1a1a4e] border border-[#d4952a]/30 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="absolute top-4 right-4 text-[#faf8f5]/60 hover:text-[#d4952a] transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        delay: 0.1,
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 200,
                                    }}
                                    className="w-16 h-16 bg-[#d4952a]/20 rounded-full flex items-center justify-center mb-6"
                                >
                                    <CheckCircle
                                        size={32}
                                        className="text-[#d4952a]"
                                    />
                                </motion.div>

                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="font-serif text-2xl text-[#faf8f5] mb-4"
                                >
                                    Application Submitted!
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-[#faf8f5]/70 mb-6 leading-relaxed"
                                >
                                    Success starts now. In our upcoming call, we
                                    will move past the "talk" and immediately
                                    begin the work of Naming Your Story. Please
                                    come prepared to dive deep.
                                </motion.p>

                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        navigate("/");
                                    }}
                                    className="px-8 py-3 bg-[#d4952a] hover:bg-[#e8a838] text-[#1a1a4e] font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-[#d4952a]/20"
                                >
                                    Back to Home
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
