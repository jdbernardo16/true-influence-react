import { Navigation } from "./Navigation";
import { CourseHero } from "./course/CourseHero";
import { TargetAudienceSection } from "./course/TargetAudienceSection";
import { EntryOffersSection } from "./course/EntryOffersSection";
import { PhaseJourneySection } from "./course/PhaseJourneySection";
import { PhaseDetailSection } from "./course/PhaseDetailSection";
import { CourseTestimonialsSection } from "./course/CourseTestimonialsSection";
import { EndResultsSection } from "./course/EndResultsSection";
import { CourseCtaSection } from "./course/CourseCtaSection";

export function CoursePage() {
    return (
        <div className="bg-[#1a1a4e] min-h-screen w-full overflow-x-hidden">
            <Navigation />
            <main>
                <CourseHero />
                <TargetAudienceSection />
                <EntryOffersSection />
                <PhaseJourneySection />
                <PhaseDetailSection />
                <CourseTestimonialsSection />
                <EndResultsSection />
                <CourseCtaSection />
            </main>
        </div>
    );
}
