import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Google Form action URL for Speak & Rise Enrollment
// TODO: Replace with actual Google Form URL
const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/formResponse";

export function SpeakAndRiseEnrollmentForm() {
    const navigate = useNavigate();

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        company: "",
        titleRole: "",
        linkedinProfile: "",
        yearsInLeadership: "",
        spokenOnStage: "",
        typeOfRooms: "",
        messageUnclear: "",
        whyChoosingNow: "",
        privateGroupTraining: false,
        vipStageExperience: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Calculate subtotal
    const subtotal =
        (formData.privateGroupTraining ? 1800 : 0) +
        (formData.vipStageExperience ? 375 : 0);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]:
                type === "checkbox"
                    ? (e.target as HTMLInputElement).checked
                    : value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create hidden inputs for Google Form submission
        // TODO: Replace these entry IDs with actual Google Form entry IDs
        const formDataObj = new FormData();
        formDataObj.append("entry.1234567890", formData.firstName);
        formDataObj.append("entry.2345678901", formData.lastName);
        formDataObj.append("entry.3456789012", formData.email);
        formDataObj.append("entry.4567890123", formData.mobileNumber);
        formDataObj.append("entry.5678901234", formData.company);
        formDataObj.append("entry.6789012345", formData.titleRole);
        formDataObj.append("entry.7890123456", formData.linkedinProfile);
        formDataObj.append("entry.8901234567", formData.yearsInLeadership);
        formDataObj.append("entry.9012345678", formData.spokenOnStage);
        formDataObj.append("entry.0123456789", formData.typeOfRooms);
        formDataObj.append("entry.1234567891", formData.messageUnclear);
        formDataObj.append("entry.2345678910", formData.whyChoosingNow);
        formDataObj.append(
            "entry.3456789120",
            formData.privateGroupTraining
                ? "Speak & Rise Private Group Training"
                : "",
        );
        formDataObj.append(
            "entry.4567891230",
            formData.vipStageExperience ? "VIP Stage Experience" : "",
        );

        // Submit to Google Forms using fetch
        fetch(GOOGLE_FORM_ACTION, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(formDataObj as any).toString(),
        })
            .then(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobileNumber: "",
                    company: "",
                    titleRole: "",
                    linkedinProfile: "",
                    yearsInLeadership: "",
                    spokenOnStage: "",
                    typeOfRooms: "",
                    messageUnclear: "",
                    whyChoosingNow: "",
                    privateGroupTraining: false,
                    vipStageExperience: false,
                });
            })
            .catch(() => {
                // Fallback: open in new tab if fetch fails
                const url = new URL(GOOGLE_FORM_ACTION);
                url.searchParams.append("entry.1234567890", formData.firstName);
                url.searchParams.append("entry.2345678901", formData.lastName);
                url.searchParams.append("entry.3456789012", formData.email);
                url.searchParams.append(
                    "entry.4567890123",
                    formData.mobileNumber,
                );
                url.searchParams.append("entry.5678901234", formData.company);
                url.searchParams.append("entry.6789012345", formData.titleRole);
                url.searchParams.append(
                    "entry.7890123456",
                    formData.linkedinProfile,
                );
                url.searchParams.append(
                    "entry.8901234567",
                    formData.yearsInLeadership,
                );
                url.searchParams.append(
                    "entry.9012345678",
                    formData.spokenOnStage,
                );
                url.searchParams.append(
                    "entry.0123456789",
                    formData.typeOfRooms,
                );
                url.searchParams.append(
                    "entry.1234567891",
                    formData.messageUnclear,
                );
                url.searchParams.append(
                    "entry.2345678910",
                    formData.whyChoosingNow,
                );
                url.searchParams.append(
                    "entry.3456789120",
                    formData.privateGroupTraining
                        ? "Speak & Rise Private Group Training"
                        : "",
                );
                url.searchParams.append(
                    "entry.4567891230",
                    formData.vipStageExperience ? "VIP Stage Experience" : "",
                );
                window.open(url.toString(), "_blank");
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobileNumber: "",
                    company: "",
                    titleRole: "",
                    linkedinProfile: "",
                    yearsInLeadership: "",
                    spokenOnStage: "",
                    typeOfRooms: "",
                    messageUnclear: "",
                    whyChoosingNow: "",
                    privateGroupTraining: false,
                    vipStageExperience: false,
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
                            🔐 ENROLLMENT FORM
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="font-serif text-4xl md:text-5xl text-[#faf8f5] mb-6"
                        >
                            Speak & Rise
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-[#faf8f5]/70 font-light leading-relaxed"
                        >
                            C-Suite Private Group Training – Transform your
                            message and command the stage with confidence.
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
                            {/* Section 1 – Basic Info */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-serif text-[#d4952a] border-b border-[#d4952a]/20 pb-3">
                                    Section 1 – Basic Info
                                </h2>

                                {/* First Name */}
                                <div className="text-left">
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        First Name{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your first name"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="text-left">
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Last Name{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your last name"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    />
                                </div>

                                {/* Email */}
                                <div className="text-left">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Email{" "}
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

                                {/* Mobile Number */}
                                <div className="text-left">
                                    <label
                                        htmlFor="mobileNumber"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Mobile Number{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="mobileNumber"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        required
                                        placeholder="+1 (555) 123-4567"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    />
                                </div>

                                {/* Company */}
                                <div className="text-left">
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Company{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your company name"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    />
                                </div>

                                {/* Title / Role */}
                                <div className="text-left">
                                    <label
                                        htmlFor="titleRole"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Title / Role{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="titleRole"
                                        name="titleRole"
                                        value={formData.titleRole}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g., CEO, VP Marketing, Founder"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    />
                                </div>

                                {/* LinkedIn Profile */}
                                <div className="text-left">
                                    <label
                                        htmlFor="linkedinProfile"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        LinkedIn Profile{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="url"
                                        id="linkedinProfile"
                                        name="linkedinProfile"
                                        value={formData.linkedinProfile}
                                        onChange={handleChange}
                                        required
                                        placeholder="https://linkedin.com/in/yourprofile"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    />
                                </div>
                            </div>

                            {/* Section 2 – Leadership Profile */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-serif text-[#d4952a] border-b border-[#d4952a]/20 pb-3">
                                    Section 2 – Leadership Profile
                                </h2>

                                {/* Years in Leadership */}
                                <div className="text-left">
                                    <label
                                        htmlFor="yearsInLeadership"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Years in Leadership{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <select
                                        id="yearsInLeadership"
                                        name="yearsInLeadership"
                                        value={formData.yearsInLeadership}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    >
                                        <option
                                            value=""
                                            className="bg-[#1a1a4e]"
                                        >
                                            Select years of experience
                                        </option>
                                        <option
                                            value="0-2 years"
                                            className="bg-[#1a1a4e]"
                                        >
                                            0-2 years
                                        </option>
                                        <option
                                            value="3-5 years"
                                            className="bg-[#1a1a4e]"
                                        >
                                            3-5 years
                                        </option>
                                        <option
                                            value="6-10 years"
                                            className="bg-[#1a1a4e]"
                                        >
                                            6-10 years
                                        </option>
                                        <option
                                            value="10+ years"
                                            className="bg-[#1a1a4e]"
                                        >
                                            10+ years
                                        </option>
                                    </select>
                                </div>

                                {/* Have you spoken on stage before? */}
                                <div className="text-left">
                                    <label className="block text-sm font-medium text-[#faf8f5]/80 mb-3">
                                        Have you spoken on stage before?{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <div className="flex gap-6">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="spokenOnStage"
                                                value="Yes"
                                                checked={
                                                    formData.spokenOnStage ===
                                                    "Yes"
                                                }
                                                onChange={handleChange}
                                                required
                                                className="w-5 h-5 rounded border-[#faf8f5]/20 bg-[#faf8f5]/5 text-[#d4952a] focus:ring-[#d4952a] focus:ring-offset-0 focus:ring-offset-[#1a1a4e]"
                                            />
                                            <span className="text-[#faf8f5]">
                                                Yes
                                            </span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="spokenOnStage"
                                                value="No"
                                                checked={
                                                    formData.spokenOnStage ===
                                                    "No"
                                                }
                                                onChange={handleChange}
                                                className="w-5 h-5 rounded border-[#faf8f5]/20 bg-[#faf8f5]/5 text-[#d4952a] focus:ring-[#d4952a] focus:ring-offset-0 focus:ring-offset-[#1a1a4e]"
                                            />
                                            <span className="text-[#faf8f5]">
                                                No
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                {/* What type of rooms do you want to speak in? */}
                                <div className="text-left">
                                    <label
                                        htmlFor="typeOfRooms"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        What type of rooms do you want to speak
                                        in?
                                    </label>
                                    <textarea
                                        id="typeOfRooms"
                                        name="typeOfRooms"
                                        value={formData.typeOfRooms}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="e.g., Corporate events, Industry conferences, TEDx stages, Internal team meetings..."
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all resize-none"
                                    />
                                </div>
                            </div>

                            {/* Section 3 – Message Clarity */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-serif text-[#d4952a] border-b border-[#d4952a]/20 pb-3">
                                    Section 3 – Message Clarity
                                </h2>

                                {/* What feels unclear about your message right now? */}
                                <div className="text-left">
                                    <label
                                        htmlFor="messageUnclear"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        What feels unclear about your message
                                        right now?
                                    </label>
                                    <textarea
                                        id="messageUnclear"
                                        name="messageUnclear"
                                        value={formData.messageUnclear}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="Share what you're struggling with in crafting your message..."
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all resize-none"
                                    />
                                </div>

                                {/* Why are you choosing this program now? */}
                                <div className="text-left">
                                    <label
                                        htmlFor="whyChoosingNow"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Why are you choosing this program now?
                                    </label>
                                    <textarea
                                        id="whyChoosingNow"
                                        name="whyChoosingNow"
                                        value={formData.whyChoosingNow}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="What's driving your decision to join at this time?"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all resize-none"
                                    />
                                </div>
                            </div>

                            {/* Section 4 – Enrollment Options */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-serif text-[#d4952a] border-b border-[#d4952a]/20 pb-3">
                                    Section 4 – Enrollment Options
                                </h2>

                                {/* Private Group Training */}
                                <div className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg p-6">
                                    <label className="flex items-start gap-4 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="privateGroupTraining"
                                            checked={
                                                formData.privateGroupTraining
                                            }
                                            onChange={handleChange}
                                            required
                                            className="mt-1 w-5 h-5 rounded border-[#faf8f5]/20 bg-[#faf8f5]/5 text-[#d4952a] focus:ring-[#d4952a] focus:ring-offset-0 focus:ring-offset-[#1a1a4e]"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[#faf8f5] font-medium">
                                                    Speak & Rise Private Group
                                                    Training
                                                </span>
                                                <span className="text-[#d4952a] font-bold text-lg">
                                                    $1,800
                                                </span>
                                            </div>
                                            <p className="text-sm text-[#faf8f5]/60">
                                                One-time payment for C-Suite
                                                Private Group Training
                                            </p>
                                        </div>
                                    </label>
                                </div>

                                {/* VIP Stage Experience */}
                                <div className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg p-6">
                                    <label className="flex items-start gap-4 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="vipStageExperience"
                                            checked={
                                                formData.vipStageExperience
                                            }
                                            onChange={handleChange}
                                            className="mt-1 w-5 h-5 rounded border-[#faf8f5]/20 bg-[#faf8f5]/5 text-[#d4952a] focus:ring-[#d4952a] focus:ring-offset-0 focus:ring-offset-[#1a1a4e]"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[#faf8f5] font-medium">
                                                    Add VIP Stage Experience
                                                </span>
                                                <span className="text-[#d4952a] font-bold text-lg">
                                                    $375
                                                </span>
                                            </div>
                                            <p className="text-sm text-[#faf8f5]/60">
                                                Stage + A/V rental fees
                                                (Optional)
                                            </p>
                                        </div>
                                    </label>
                                </div>

                                {/* Checkout Summary */}
                                <div className="bg-[#d4952a]/10 border border-[#d4952a]/30 rounded-lg p-6 space-y-3">
                                    <div className="flex justify-between text-[#faf8f5]/80">
                                        <span>
                                            Speak & Rise: C-Suite Private Group
                                            Training
                                        </span>
                                        <span>
                                            $
                                            {formData.privateGroupTraining
                                                ? "1,800"
                                                : "0"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-[#faf8f5]/80">
                                        <span>
                                            VIP Stage Experience (Optional)
                                        </span>
                                        <span>
                                            $
                                            {formData.vipStageExperience
                                                ? "375"
                                                : "0"}
                                        </span>
                                    </div>
                                    <div className="border-t border-[#d4952a]/30 pt-3 mt-3">
                                        <div className="flex justify-between text-[#faf8f5] font-bold text-lg">
                                            <span>Subtotal</span>
                                            <span className="text-[#d4952a]">
                                                ${subtotal.toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Promo Code Field */}
                                <div className="text-left">
                                    <label
                                        htmlFor="promoCode"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Apply Code (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        id="promoCode"
                                        name="promoCode"
                                        placeholder="Enter promo code"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting || subtotal === 0}
                                    className="w-full py-4 px-6 bg-[#d4952a] hover:bg-[#e8a838] text-[#1a1a4e] font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#d4952a]/20 text-lg"
                                >
                                    {isSubmitting
                                        ? "Processing..."
                                        : `Complete Enrollment - $${subtotal.toLocaleString()}`}
                                </button>

                                <p className="text-xs text-center text-[#faf8f5]/50">
                                    Secure payment powered by Stripe
                                </p>
                            </div>
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
                                    className="font-serif text-2xl text-[#faf8f5] mb-3"
                                >
                                    You are officially enrolled!
                                </motion.h3>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-left w-full bg-[#faf8f5]/5 rounded-lg p-6 mb-6"
                                >
                                    <p className="text-[#faf8f5]/80 mb-4 font-medium">
                                        Watch your inbox for:
                                    </p>
                                    <ul className="space-y-2 text-[#faf8f5]/70 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#d4952a] mt-1">
                                                •
                                            </span>
                                            <span>
                                                Session calendar invites
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#d4952a] mt-1">
                                                •
                                            </span>
                                            <span>Zoom link</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#d4952a] mt-1">
                                                •
                                            </span>
                                            <span>Preparation materials</span>
                                        </li>
                                        {formData.vipStageExperience && (
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#d4952a] mt-1">
                                                    •
                                                </span>
                                                <span>Stage details</span>
                                            </li>
                                        )}
                                    </ul>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-[#d4952a] font-semibold mb-6"
                                >
                                    We begin Friday.
                                </motion.p>

                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
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
