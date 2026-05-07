import { StorySection } from "@/components/sections/story-section";
import { TeamSection } from "@/components/sections/team-section";
import { StandardsSection } from "@/components/sections/standards-section";
import { OrgChartSection } from "@/components/sections/org-chart-section";
import { TrustSection } from "@/components/sections/trust-section";
import Footer from "@/components/sections/footer";

export default function AboutPage() {
    return (
        <>
            <div id="story" className="scroll-mt-20">
                <StorySection />
            </div>
            <div id="team" className="scroll-mt-20">
                <TeamSection />
            </div>
            <div id="org-chart" className="scroll-mt-20">
                <OrgChartSection />
            </div>
            <div id="standards" className="scroll-mt-20">
                <StandardsSection />
            </div>
            <div id="trust" className="scroll-mt-20">
                <TrustSection />
            </div>
            <Footer />
        </>
    );
}
