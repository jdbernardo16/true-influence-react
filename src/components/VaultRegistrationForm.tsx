import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Google Form action URL for Vault Registration
const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSe8yexExg44QIH3_ldsoCVhyILqMMebZg143mzfYAa3czTcwQ/formResponse";

export function VaultRegistrationForm() {
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
        role: "",
        speakingChallenge: "",
        consentUpdates: false,
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
        formDataObj.append("entry.1236685653", formData.firstName);
        formDataObj.append("entry.524612617", formData.lastName);
        formDataObj.append("entry.923382681", formData.email);
        formDataObj.append("entry.1065204788", formData.mobileNumber);
        formDataObj.append("entry.422065520", formData.role);
        formDataObj.append("entry.1486497591", formData.speakingChallenge);
        formDataObj.append(
            "entry.1236456241",
            formData.consentUpdates ? "Check this box to agree" : "",
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
                    role: "",
                    speakingChallenge: "",
                    consentUpdates: false,
                });
            })
            .catch(() => {
                // Fallback: open in new tab if fetch fails
                const url = new URL(GOOGLE_FORM_ACTION);
                url.searchParams.append("entry.1236685653", formData.firstName);
                url.searchParams.append("entry.524612617", formData.lastName);
                url.searchParams.append("entry.923382681", formData.email);
                url.searchParams.append(
                    "entry.1065204788",
                    formData.mobileNumber,
                );
                url.searchParams.append("entry.422065520", formData.role);
                url.searchParams.append(
                    "entry.1486497591",
                    formData.speakingChallenge,
                );
                url.searchParams.append(
                    "entry.1236456241",
                    formData.consentUpdates ? "Check this box to agree" : "",
                );
                window.open(url.toString(), "_blank");
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobileNumber: "",
                    role: "",
                    speakingChallenge: "",
                    consentUpdates: false,
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
                            FREE THE VAULT
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="font-serif text-4xl md:text-5xl text-[#faf8f5] mb-6"
                        >
                            Unlock The Vault
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-[#faf8f5]/70 font-light leading-relaxed"
                        >
                            Join our free monthly safe space for women leaders
                            to tell their story. First Fridays at 12 PM MST.
                        </motion.p>
                    </motion.div>

                    {/* Registration Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-2xl p-8 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* First Name */}
                            <div className="text-left">
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                >
                                    First Name{" "}
                                    <span className="text-[#d4952a]">*</span>
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
                                    <span className="text-[#d4952a]">*</span>
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
                                    <span className="text-[#d4952a]">*</span>
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
                                    Mobile Number (for reminders){" "}
                                    <span className="text-[#d4952a]">*</span>
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

                            {/* Role Dropdown */}
                            <div className="text-left">
                                <label
                                    htmlFor="role"
                                    className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                >
                                    What best describes you?{" "}
                                    <span className="text-[#d4952a]">*</span>
                                </label>
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all"
                                >
                                    <option value="" className="bg-[#1a1a4e]">
                                        Select an option
                                    </option>
                                    <option
                                        value="Founder / CEO"
                                        className="bg-[#1a1a4e]"
                                    >
                                        Founder / CEO
                                    </option>
                                    <option
                                        value="Speaker"
                                        className="bg-[#1a1a4e]"
                                    >
                                        Speaker
                                    </option>
                                    <option
                                        value="Coach / Consultant"
                                        className="bg-[#1a1a4e]"
                                    >
                                        Coach / Consultant
                                    </option>
                                    <option
                                        value="Executive"
                                        className="bg-[#1a1a4e]"
                                    >
                                        Executive
                                    </option>
                                    <option
                                        value="Aspiring Leader"
                                        className="bg-[#1a1a4e]"
                                    >
                                        Aspiring Leader
                                    </option>
                                </select>
                            </div>

                            {/* Speaking Challenge */}
                            <div className="text-left">
                                <label
                                    htmlFor="speakingChallenge"
                                    className="block text-sm font-medium text-[#faf8f5]/80 mb-2"
                                >
                                    What is your biggest speaking challenge
                                    right now? (Short answer)
                                </label>
                                <textarea
                                    id="speakingChallenge"
                                    name="speakingChallenge"
                                    value={formData.speakingChallenge}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Tell us about your speaking challenge..."
                                    className="w-full px-4 py-3 bg-[#faf8f5]/5 border border-[#faf8f5]/10 rounded-lg text-[#faf8f5] placeholder-[#faf8f5]/40 focus:outline-none focus:border-[#d4952a] focus:ring-1 focus:ring-[#d4952a] transition-all resize-none"
                                />
                            </div>

                            {/* Consent Checkbox */}
                            <div className="text-left">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="consentUpdates"
                                        checked={formData.consentUpdates}
                                        onChange={handleChange}
                                        className="mt-1 w-5 h-5 rounded border-[#faf8f5]/20 bg-[#faf8f5]/5 text-[#d4952a] focus:ring-[#d4952a] focus:ring-offset-0 focus:ring-offset-[#1a1a4e]"
                                    />
                                    <span className="text-sm text-[#faf8f5]/70">
                                        I agree to receive updates and
                                        leadership content from Joanna Horton
                                        McPherson.
                                    </span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 bg-[#d4952a] hover:bg-[#e8a838] text-[#1a1a4e] font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#d4952a]/20 text-lg"
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : "Unlock The Vault"}
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
                            className="bg-[#1a1a4e] border border-[#d4952a]/30 rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
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
                                    Welcome to The Vault!
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-[#faf8f5]/70 mb-6"
                                >
                                    Your registration has been submitted
                                    successfully. We'll send you the meeting
                                    details for our next First Friday session.
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
