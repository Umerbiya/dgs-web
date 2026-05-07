import { QualityPhilosophySection } from "@/components/sections/quality-philosophy-section";
import { QualityProcessSection } from "@/components/sections/quality-process-section";
import { ComplianceSection } from "@/components/sections/compliance-section";
import Footer from "@/components/sections/footer";

export default function QualityPage() {
    return (
        <>
            <QualityPhilosophySection />
            <QualityProcessSection />
            <ComplianceSection />
            <Footer />
        </>
    );
}
