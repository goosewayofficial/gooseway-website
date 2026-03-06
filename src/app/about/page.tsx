// src/app/about/page.tsx
"use client";

import { useEffect } from "react";
import StorySection from "../../components/about/StorySection";
import ValuesSection from "../../components/about/ValuesSection";
import TimelineSection from "../../components/about/TimelineSection";
import SponsorSection from "../../components/about/SponsorSection";
import StatsSection from "../../components/home/StatsSection";
import FadeInSection from "../../components/about/FadeInSection";
import AboutHeroSection from "../../components/about/AboutHeroSection";
import "../../components/home/animations.css";
import "../../components/about/animations.css";

export default function AboutPage() {
  useEffect(() => {
    const teamCards = document.querySelectorAll(".team-card");
    teamCards.forEach((card) => {
      card.classList.add("team-card");
    });
  }, []);

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
          <SponsorSection />
        </FadeInSection>

        <FadeInSection>
          <StatsSection />
        </FadeInSection>
      </div>
    </div>
  );
}
