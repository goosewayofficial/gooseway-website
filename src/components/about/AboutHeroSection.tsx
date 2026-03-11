// src/components/about/AboutHeroSection.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import CommonHeroSection from "../CommonHeroSection";

export default function AboutHeroSection() {
  const { language } = useLanguage();

  return (
    <CommonHeroSection
      title={language === "th" ? "เกี่ยวกับเรา" : "About Us"}
      subtitle={
        language === "th"
          ? "ค้นหาว่าเราเป็นใคร และทำไมเราถึงมุ่งมั่นที่จะทำให้การเดินทางเข้าถึงได้สำหรับทุกคน"
          : "Discover who we are and why we're committed to making travel accessible for everyone"
      }
      buttonText={language === "th" ? "ทำความรู้จักเรา" : "Get to Know Us"}
      buttonLink="https://lin.ee/K6cFkWW"
      mascotImage="/mascot/GooseMascot-1.png"
    />
  );
}
