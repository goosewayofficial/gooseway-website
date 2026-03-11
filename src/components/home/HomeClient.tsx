"use client";
// src/components/home/HomeClient.tsx

import FeaturesSection from "@/components/home/FeaturesSection";
import AppShowcaseSection from "@/components/home/AppShowcaseSection";
import { useModal } from "@/context/ModalContext";

export default function HomeClient() {
  const { openComingSoon } = useModal();

  return (
    <>
      <AppShowcaseSection />
      <FeaturesSection onLearnMoreClick={openComingSoon} />
    </>
  );
}
