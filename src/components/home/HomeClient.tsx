"use client";
// src/components/home/HomeClient.tsx

import { useEffect, useState } from "react";
import FeaturesSection from "@/components/home/FeaturesSection";
import CtaSection from "@/components/home/CtaSection";
import ComingSoonModal from "@/components/home/ComingsoonModal";

export default function HomeClient() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Close modal on Escape key
  useEffect(() => {
    if (!showModal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [showModal]);

  return (
    <>
      <FeaturesSection onLearnMoreClick={handleShowModal} />
      <CtaSection onVideoClick={handleShowModal} />
      {showModal && <ComingSoonModal onClose={handleCloseModal} />}
    </>
  );
}
