import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CommunitySection } from "./components/CommunitySection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { FaqSection } from "./components/FaqSection";
import { HeroSection } from "./components/HeroSection";
import { InvitationSection } from "./components/InvitationSection";
import { JourneySection } from "./components/JourneySection";
import { MethodSection } from "./components/MethodSection";
import { Navigation } from "./components/Navigation";
import { PhilosophySection } from "./components/PhilosophySection";
import { PhotoGalleryCarousel } from "./components/PhotoGalleryCarousel";
import { PrivateApplicationForm } from "./components/PrivateApplicationForm";
import { ResearchSection } from "./components/ResearchSection";
// import { SpeakAndRiseEnrollmentForm } from "./components/SpeakAndRiseEnrollmentForm";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TransformationsSection } from "./components/TransformationsSection";
import { VaultRegistrationForm } from "./components/VaultRegistrationForm";
import { WhoSection } from "./components/WhoSection";

function HomePage() {
    // Sample photo gallery data - replace with your actual photos
    const galleryPhotos = [
        {
            src: "/carousel/img1.webp",
            alt: "Gallery image 1",
            caption: "Moments of transformation",
        },
        {
            src: "/carousel/img2.webp",
            alt: "Gallery image 2",
            caption: "Creating impact together",
        },
        {
            src: "/carousel/img3.webp",
            alt: "Gallery image 3",
            caption: "Empowering voices",
        },
        {
            src: "/carousel/img4.webp",
            alt: "Gallery image 4",
            caption: "Building connections",
        },
        {
            src: "/carousel/img5.webp",
            alt: "Gallery image 5",
            caption: "Leading with purpose",
        },
        {
            src: "/carousel/img6.webp",
            alt: "Gallery image 6",
            caption: "Inspiring change",
        },
        {
            src: "/carousel/img7.webp",
            alt: "Gallery image 7",
            caption: "Making a difference",
        },
        {
            src: "/carousel/img8.webp",
            alt: "Gallery image 8",
            caption: "Celebrating success",
        },
    ];

    return (
        <div className="bg-[#1a1a4e] min-h-screen w-full overflow-x-hidden">
            <Navigation />
            <main>
                <HeroSection />
                <InvitationSection />
                <MethodSection />
                <ResearchSection />
                <JourneySection />
                <TestimonialsSection />
                <TransformationsSection />
                <PhotoGalleryCarousel
                    photos={galleryPhotos}
                    title="Moments of Impact"
                    subtitle="Visual stories of transformation in action"
                    autoPlay={true}
                    autoPlayInterval={5000}
                />
                <WhoSection />
                <PhilosophySection />
                <ExperienceSection />
                <CommunitySection />
                <FaqSection />
                <ContactSection />
            </main>
        </div>
    );
}

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/vault-registration"
                    element={<VaultRegistrationForm />}
                />
                <Route
                    path="/private-application"
                    element={<PrivateApplicationForm />}
                />
                {/* <Route
                    path="/speak-rise-enrollment"
                    element={<SpeakAndRiseEnrollmentForm />}
                /> */}
            </Routes>
        </Router>
    );
}
