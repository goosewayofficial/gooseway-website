"use client";
// src/components/home/HomeClient.tsx

import AppShowcaseSection from "@/components/home/AppShowcaseSection";
import StatsSection from "@/components/home/StatsSection";
import { useModal } from "@/context/ModalContext";

export default function HomeClient() {
  const { openComingSoon } = useModal();

  return (
    <>
      <AppShowcaseSection />
      <StatsSection />
    </>
  );
}
