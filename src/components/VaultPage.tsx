import { Navigation } from "./Navigation";
import { VaultHero } from "./vault/VaultHero";
import { VaultAboutSection } from "./vault/VaultAboutSection";
import { VaultBenefitsSection } from "./vault/VaultBenefitsSection";
import { VaultCtaSection } from "./vault/VaultCtaSection";

export function VaultPage() {
    return (
        <div className="bg-[#1a1a4e] min-h-screen w-full overflow-x-hidden">
            <Navigation />
            <main>
                <VaultHero />
                <VaultAboutSection />
                <VaultBenefitsSection />
                <VaultCtaSection />
            </main>
        </div>
    );
}
