import { Navigation } from "./Navigation";
import { RetreatHero } from "./retreat/RetreatHero";
import { RetreatOverviewSection } from "./retreat/RetreatOverviewSection";
import { RetreatDayScheduleSection } from "./retreat/RetreatDayScheduleSection";
import { RetreatExperienceSection } from "./retreat/RetreatExperienceSection";
import { RetreatStagesSection } from "./retreat/RetreatStagesSection";
import { RetreatCtaSection } from "./retreat/RetreatCtaSection";

export function RetreatPage() {
    return (
        <div className="bg-[#1a1a4e] min-h-screen w-full overflow-x-hidden">
            <Navigation />
            <main>
                <RetreatHero />
                <RetreatOverviewSection />
                <RetreatDayScheduleSection />
                <RetreatExperienceSection />
                <RetreatStagesSection />
                <RetreatCtaSection />
            </main>
        </div>
    );
}
