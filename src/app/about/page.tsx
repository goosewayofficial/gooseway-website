"use client";
// src/app/about/page.tsx

import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TimelineSection from "@/components/about/TimelineSection";
import SponsorSection from "@/components/about/SponsorSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FadeInSection from "@/components/about/FadeInSection";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import "@/components/about/animations.css";

export default function AboutPage() {

  return (
    <div>
      <AboutHeroSection />

      <div className="max-w-7xl mx-auto space-y-16 px-4 py-12">
        <FadeInSection>
          <StorySection />
        </FadeInSection>

        <FadeInSection>
          <ValuesSection />
        </FadeInSection>

        <FadeInSection>
          <TimelineSection />
        </FadeInSection>

        <FadeInSection>
          <TestimonialsSection />
        </FadeInSection>

        <FadeInSection>
          <SponsorSection />
        </FadeInSection>
      </div>
    </div>
  );
}
