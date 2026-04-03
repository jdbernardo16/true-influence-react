import { Navigation } from "./Navigation";
import { CombinedHeroSection } from "./combined/CombinedHeroSection";
import { TargetAudienceSection } from "./course/TargetAudienceSection";
import { EntryOffersSection } from "./course/EntryOffersSection";
import { PhaseJourneySection } from "./course/PhaseJourneySection";
import { PhaseDetailSection } from "./course/PhaseDetailSection";
import { RetreatDayScheduleSection } from "./retreat/RetreatDayScheduleSection";
import { RetreatExperienceSection } from "./retreat/RetreatExperienceSection";
import { RetreatStagesSection } from "./retreat/RetreatStagesSection";
import { CourseTestimonialsSection } from "./course/CourseTestimonialsSection";
import { EndResultsSection } from "./course/EndResultsSection";
import { CombinedCtaSection } from "./combined/CombinedCtaSection";

export function CourseRetreatPage() {
    return (
        <div className="bg-[#1a1a4e] min-h-screen w-full overflow-x-hidden">
            <Navigation />
            <main id="main-content" tabIndex={-1}>
                <CombinedHeroSection />
                <TargetAudienceSection />
                <EntryOffersSection />
                <PhaseJourneySection />
                <PhaseDetailSection />
                <RetreatDayScheduleSection />
                <RetreatExperienceSection />
                <RetreatStagesSection />
                <CourseTestimonialsSection />
                <EndResultsSection />
                <CombinedCtaSection />
            </main>
        </div>
    );
}
