// src/app/page.tsx

import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FaqSection from "@/components/home/FaqSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import CtaSection from "@/components/home/CtaSection";
import HomeClient from "@/components/home/HomeClient";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Who it's for — reinforce audience right under the hero */}
      <MarqueeSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* App Showcase + Features + Modal (client islands) */}
      <HomeClient />

      {/* FAQ — address objections before final CTA */}
      <FaqSection />

      {/* CTA — final conversion push */}
      <CtaSection />

      <div className="fixed -z-10 bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl" />
    </div>
  );
}
