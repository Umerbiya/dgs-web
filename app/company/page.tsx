import { AboutSection } from "@/components/sections/about-section";
import Footer from "@/components/sections/footer";
import { LeadershipSection } from "@/components/sections/leadership-section";
import { OrganizationStructureSection } from "@/components/sections/organization-structure-section";

export default function CompanyPage() {
    return (
        <>
            <div id="about" className="scroll-mt-20">
                <AboutSection />
            </div>
            <div id="leadership" className="scroll-mt-20">
                <LeadershipSection />
            </div>
            <div id="organization" className="scroll-mt-20">
                <OrganizationStructureSection />
            </div>
            <Footer />
        </>
    );
}
