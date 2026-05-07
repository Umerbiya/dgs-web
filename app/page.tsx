import { HeroSection } from "@/components/sections/hero-section";
import { CapabilitiesGridSection } from "@/components/sections/capabilities-grid-section";
import { MetricsSection } from "@/components/sections/metrics-section";
import { TrustStatementSection } from "@/components/sections/trust-statement-section";
import { CTAStripSection } from "@/components/sections/cta-strip-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CapabilitiesGridSection />
      <div id="metrics" className="scroll-mt-20">
        <MetricsSection />
      </div>
      <TrustStatementSection />
      <CTAStripSection />
      <Footer />
    </>
  );
}
