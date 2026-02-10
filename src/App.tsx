import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { InvitationSection } from './components/InvitationSection';
import { MethodSection } from './components/MethodSection';
import { ResearchSection } from './components/ResearchSection';
import { JourneySection } from './components/JourneySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TransformationsSection } from './components/TransformationsSection';
import { WhoSection } from './components/WhoSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ExperienceSection } from './components/ExperienceSection';
import { CommunitySection } from './components/CommunitySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
export function App() {
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
        <WhoSection />
        <PhilosophySection />
        <ExperienceSection />
        <CommunitySection />
        <FaqSection />
        <ContactSection />
      </main>
    </div>);

}