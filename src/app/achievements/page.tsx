// src/app/achievements/page.tsx
"use client";

import { useState } from "react";
import AchievementCard from "../../components/achievements/AchievementCard";
import AchievementModal from "../../components/achievements/AchievementModal";
import AchievementFilter from "../../components/achievements/AchievementFilter";
import { getAchievements } from "../../data/achievements";
import { Achievement } from "../interfaces";
import CommonHeroSection from "@/components/CommonHeroSection";
import "../../components/achievements/animations.css";
import { useLanguage } from "@/context/LanguageContext";

export default function AchievementPage() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { t, language } = useLanguage();

  const achievements = getAchievements(language as "th" | "en");
  const categories = [...new Set(achievements.map((a) => a.category))];
  const filteredAchievements =
    selectedCategory === "all"
      ? achievements
      : achievements.filter((a) => a.category === selectedCategory);

  return (
    <div>
      <CommonHeroSection
        title={t("achievements_title")}
        subtitle={t("achievements_subtitle")}
        mascotImage="/mascot/White/GooseMascotWhite-6.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Filter + Grid */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#231F20] mb-4">
            {t("all_achievements")}
          </h2>
          <AchievementFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredAchievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                {...achievement}
                onClick={() => setSelectedAchievement(achievement)}
                animationDelay={index % 5}
              />
            ))}
          </div>
        </div>

        {/* Footer message */}
        <div className="text-center bg-[#E7EFF3] py-12 rounded-3xl">
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            {t("achievements_footer")}
            <br />
            <span className="text-[#2563EB] font-semibold">{t("follow_updates")}</span>
          </p>
        </div>
      </div>

      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}
    </div>
  );
}
