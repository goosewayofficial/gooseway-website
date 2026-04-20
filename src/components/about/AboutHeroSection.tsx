// src/components/about/AboutHeroSection.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import CommonHeroSection from "../CommonHeroSection";

export default function AboutHeroSection() {
  const { language } = useLanguage();
  const { openDownloadModal } = useModal();

  return (
    <CommonHeroSection
      title={language === "th" ? "เกี่ยวกับเรา" : "About Us"}
      subtitle={
        language === "th"
          ? "ค้นหาว่าเราเป็นใคร และทำไมเราถึงมุ่งมั่นที่จะทำให้การเดินทางเข้าถึงได้สำหรับทุกคน"
          : "Discover who we are and why we're committed to making travel accessible for everyone"
      }
      buttonText={language === "th" ? "ดาวน์โหลดแอป" : "Download App"}
      onButtonClick={(e) => {
        e.preventDefault();
        openDownloadModal();
      }}
      mascotImage="/mascot/White/GooseMascotWhite-1.png"
    />
  );
}
