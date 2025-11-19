import { HeroSection } from "@/components/hero-section"
import { CredibilitySection } from "@/components/credibility-section"
import { TrustBadgeStrip } from "@/components/trust-badge-strip"
import { StorySection } from "@/components/story-section"
import { ProblemSection } from "@/components/problem-section"
import { InlineCtaSection } from "@/components/inline-cta-section"
import { TransformationSection } from "@/components/transformation-section"
import { AboutSection } from "@/components/about-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { FloatingCtaBar } from "@/components/floating-cta-bar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CredibilitySection />
      <TrustBadgeStrip />
      <StorySection />
      <ProblemSection />
      <InlineCtaSection />
      <TransformationSection />
      <AboutSection />
      <FinalCtaSection />
      <Footer />
      <ExitIntentPopup />
      <FloatingCtaBar />
    </main>
  )
}
