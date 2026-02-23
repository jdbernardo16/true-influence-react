import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Google Form action URL for Private Application
const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSc50Q_kfTRfXM5BHHZqBzyfsweu8l4YtoNd_FryRNLeXK81XQ/formResponse";

// Google Form entry IDs (matching the actual Google Form structure)
const FORM_ENTRY_IDS = {
    firstName: "entry.1698058784",
    lastName: "entry.1178654855",
    email: "entry.885595271",
    phone: "entry.1748238758",
    website: "entry.729632185",
    socialMediaLinks: "entry.862719611",
    revenueRange: "entry.1710848327",
    yearsInBusiness: "entry.1351873553",
    preparingFor: "entry.446459776",
    blockedVoice: "entry.1636061298",
    whyNow: "entry.1161710152",
    changeForYou: "entry.462357243",
    investmentReady: "entry.351479601",
};

export function PrivateApplicationForm() {
    const navigate = useNavigate();

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        website: "",
        socialMediaLinks: "",
        revenueRange: "",
        yearsInBusiness: "",
        preparingFor: "",
        blockedVoice: "",
        whyNow: "",
        changeForYou: "",
        investmentReady: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

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
        const formDataObj = new FormData();
        formDataObj.append(FORM_ENTRY_IDS.firstName, formData.firstName);
        formDataObj.append(FORM_ENTRY_IDS.lastName, formData.lastName);
        formDataObj.append(FORM_ENTRY_IDS.email, formData.email);
        formDataObj.append(FORM_ENTRY_IDS.phone, formData.phone);
        formDataObj.append(FORM_ENTRY_IDS.website, formData.website);
        formDataObj.append(
            FORM_ENTRY_IDS.socialMediaLinks,
            formData.socialMediaLinks,
        );
        formDataObj.append(FORM_ENTRY_IDS.revenueRange, formData.revenueRange);
        formDataObj.append(
            FORM_ENTRY_IDS.yearsInBusiness,
            formData.yearsInBusiness,
        );
        formDataObj.append(FORM_ENTRY_IDS.preparingFor, formData.preparingFor);
        formDataObj.append(FORM_ENTRY_IDS.blockedVoice, formData.blockedVoice);
        formDataObj.append(FORM_ENTRY_IDS.whyNow, formData.whyNow);
        formDataObj.append(FORM_ENTRY_IDS.changeForYou, formData.changeForYou);
        formDataObj.append(
            FORM_ENTRY_IDS.investmentReady,
            formData.investmentReady,
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
                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    website: "",
                    socialMediaLinks: "",
                    revenueRange: "",
                    yearsInBusiness: "",
                    preparingFor: "",
                    blockedVoice: "",
                    whyNow: "",
                    changeForYou: "",
                    investmentReady: "",
                });
            })
            .catch(() => {
                // Fallback: open in new tab if fetch fails
                const url = new URL(GOOGLE_FORM_ACTION);
                url.searchParams.append(
                    FORM_ENTRY_IDS.firstName,
                    formData.firstName,
                );
                url.searchParams.append(
                    FORM_ENTRY_IDS.lastName,
                    formData.lastName,
                );
                url.searchParams.append(FORM_ENTRY_IDS.email, formData.email);
                url.searchParams.append(FORM_ENTRY_IDS.phone, formData.phone);
                url.searchParams.append(
                    FORM_ENTRY_IDS.website,
                    formData.website,
                );
                url.searchParams.append(
                    FORM_ENTRY_IDS.socialMediaLinks,
                    formData.socialMediaLinks,
                );
                url.searchParams.append(
                    FORM_ENTRY_IDS.revenueRange,
                    formData.revenueRange,
                );
                url.searchParams.append(
                    FORM_ENTRY_IDS.yearsInBusiness,
                    formData.yearsInBusiness,
                );
                url.searchParams.append(
                    FORM_ENTRY_IDS.preparingFor,
                    formData.preparingFor,
                );
                url.searchParams.append(
                    FORM_ENTRY_IDS.blockedVoice,
                    formData.blockedVoice,
                );
                url.searchParams.append(FORM_ENTRY_IDS.whyNow, formData.whyNow);
                url.searchParams.append(
                    FORM_ENTRY_IDS.changeForYou,
                    formData.changeForYou,
                );
                url.searchParams.append(
                    FORM_ENTRY_IDS.investmentReady,
                    formData.investmentReady,
                );
                window.open(url.toString(), "_blank");
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    website: "",
                    socialMediaLinks: "",
                    revenueRange: "",
                    yearsInBusiness: "",
                    preparingFor: "",
                    blockedVoice: "",
                    whyNow: "",
                    changeForYou: "",
                    investmentReady: "",
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
                <div className="max-w-2xl mx-auto">
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
                            PRIVATE ADVISORY
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="font-serif text-4xl md:text-5xl text-[#faf8f5] mb-6"
                        >
                            Application Form - Private
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-[#faf8f5]/70 font-light leading-relaxed"
                        >
                            Take the next step in your leadership journey with
                            private advisory support.
                        </motion.p>
                    </motion.div>

                    {/* Application Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl p-8 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Section 1: Basic Info */}
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <h2 className="font-serif text-2xl text-[#d4952a] mb-1">
                                        Section 1: Basic Info
                                    </h2>
                                    <div className="h-0.5 w-20 bg-[#d4952a]/30"></div>
                                </motion.div>

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

                                {/* Phone */}
                                <div className="text-left">
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Phone{" "}
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

                                {/* Website */}
                                <div className="text-left">
                                    <label
                                        htmlFor="website"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Website{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="url"
                                        id="website"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        required
                                        placeholder="https://yourwebsite.com"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    />
                                </div>

                                {/* Social Media Links */}
                                <div className="text-left">
                                    <label
                                        htmlFor="socialMediaLinks"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Social Media Links{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <textarea
                                        id="socialMediaLinks"
                                        name="socialMediaLinks"
                                        value={formData.socialMediaLinks}
                                        onChange={handleChange}
                                        rows={3}
                                        required
                                        placeholder="LinkedIn, Instagram, Twitter, etc."
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all resize-none"
                                    />
                                </div>
                            </div>

                            {/* Section 2: Leadership Profile */}
                            <div className="space-y-6 pt-6 border-t border-[#faf8f5]/10">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <h2 className="font-serif text-2xl text-[#d4952a] mb-1">
                                        Section 2: Leadership Profile
                                    </h2>
                                    <div className="h-0.5 w-20 bg-[#d4952a]/30"></div>
                                </motion.div>

                                {/* Current Revenue Range */}
                                <div className="text-left">
                                    <label
                                        htmlFor="revenueRange"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Current Revenue Range{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <select
                                        id="revenueRange"
                                        name="revenueRange"
                                        value={formData.revenueRange}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    >
                                        <option
                                            value=""
                                            className="bg-[#1a1a4e]"
                                        >
                                            Select an option
                                        </option>
                                        <option
                                            value="Under 100k"
                                            className="bg-[#1a1a4e]"
                                        >
                                            Under 100k
                                        </option>
                                        <option
                                            value="100k–500k"
                                            className="bg-[#1a1a4e]"
                                        >
                                            100k–500k
                                        </option>
                                        <option
                                            value="500k–1M"
                                            className="bg-[#1a1a4e]"
                                        >
                                            500k–1M
                                        </option>
                                        <option
                                            value="1M+"
                                            className="bg-[#1a1a4e]"
                                        >
                                            1M+
                                        </option>
                                    </select>
                                </div>

                                {/* Years in Business */}
                                <div className="text-left">
                                    <label
                                        htmlFor="yearsInBusiness"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Years in Business{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="yearsInBusiness"
                                        name="yearsInBusiness"
                                        value={formData.yearsInBusiness}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g., 5 years"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    />
                                </div>
                            </div>

                            {/* Section 3: Clarity & Desire */}
                            <div className="space-y-6 pt-6 border-t border-[#faf8f5]/10">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <h2 className="font-serif text-2xl text-[#d4952a] mb-1">
                                        Section 3: Clarity & Desire
                                    </h2>
                                    <div className="h-0.5 w-20 bg-[#d4952a]/30"></div>
                                </motion.div>

                                {/* What stage are you preparing for? */}
                                <div className="text-left">
                                    <label
                                        htmlFor="preparingFor"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        What stage are you preparing for?{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <textarea
                                        id="preparingFor"
                                        name="preparingFor"
                                        value={formData.preparingFor}
                                        onChange={handleChange}
                                        rows={3}
                                        required
                                        placeholder="Describe the stage or opportunity you're preparing for..."
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all resize-none"
                                    />
                                </div>

                                {/* What feels blocked in your voice right now? */}
                                <div className="text-left">
                                    <label
                                        htmlFor="blockedVoice"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        What feels blocked in your voice right
                                        now?{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <textarea
                                        id="blockedVoice"
                                        name="blockedVoice"
                                        value={formData.blockedVoice}
                                        onChange={handleChange}
                                        rows={3}
                                        required
                                        placeholder="Share what feels blocked or challenging about your voice..."
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all resize-none"
                                    />
                                </div>

                                {/* Why now? */}
                                <div className="text-left">
                                    <label
                                        htmlFor="whyNow"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Why now?{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <textarea
                                        id="whyNow"
                                        name="whyNow"
                                        value={formData.whyNow}
                                        onChange={handleChange}
                                        rows={3}
                                        required
                                        placeholder="Why is this the right time for you to take this step?"
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all resize-none"
                                    />
                                </div>

                                {/* What would working privately change for you? */}
                                <div className="text-left">
                                    <label
                                        htmlFor="changeForYou"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        What would working privately change for
                                        you?{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <textarea
                                        id="changeForYou"
                                        name="changeForYou"
                                        value={formData.changeForYou}
                                        onChange={handleChange}
                                        rows={3}
                                        required
                                        placeholder="Describe what would change in your life or business..."
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all resize-none"
                                    />
                                </div>
                            </div>

                            {/* Section 4: Investment */}
                            <div className="space-y-6 pt-6 border-t border-[#faf8f5]/10">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    <h2 className="font-serif text-2xl text-[#d4952a] mb-1">
                                        Section 4: Investment
                                    </h2>
                                    <div className="h-0.5 w-20 bg-[#d4952a]/30"></div>
                                </motion.div>

                                {/* Are you ready to invest at the private advisory level? */}
                                <div className="text-left">
                                    <label
                                        htmlFor="investmentReady"
                                        className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                    >
                                        Are you ready to invest at the private
                                        advisory level?{" "}
                                        <span className="text-[#d4952a]">
                                            *
                                        </span>
                                    </label>
                                    <select
                                        id="investmentReady"
                                        name="investmentReady"
                                        value={formData.investmentReady}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                    >
                                        <option
                                            value=""
                                            className="bg-[#1a1a4e]"
                                        >
                                            Select an option
                                        </option>
                                        <option
                                            value="Yes"
                                            className="bg-[#1a1a4e]"
                                        >
                                            Yes
                                        </option>
                                        <option
                                            value="No"
                                            className="bg-[#1a1a4e]"
                                        >
                                            No
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 bg-[#d4952a] hover:bg-[#e8a838] text-[#1a1a4e] font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#d4952a]/20 text-lg"
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : "Submit Application"}
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

            {/* Success Modal with Calendly */}
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
                                    Application Received
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-[#faf8f5]/70 mb-6"
                                >
                                    Your application has been received. The next
                                    step is to book your Private Strategy Call.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="w-full"
                                >
                                    <a
                                        href="https://calendly.com/joannahortonmcpherson/discovery"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-[#d4952a] hover:bg-[#e8a838] text-[#1a1a4e] font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-[#d4952a]/20"
                                    >
                                        Book Your Strategy Call
                                        <ExternalLink size={18} />
                                    </a>
                                </motion.div>

                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        navigate("/");
                                    }}
                                    className="mt-4 text-sm text-[#faf8f5]/60 hover:text-[#d4952a] transition-colors"
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
