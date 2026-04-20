// src/app/solutions/page.tsx

"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Solution } from "../interfaces";
import AppShowcase from "@/components/solutions/AppShowcase";
import CommonHeroSection from "@/components/CommonHeroSection";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

const solutions: Solution[] = [
  {
    id: 1,
    title: "Map",
    description:
      "Provide information on accessible locations with routes and method.",
    features: [
      "Real-time location tracking",
      "Accessible route planning",
      "Obstacle reporting system",
      "Community-verified paths",
    ],
    benefits: [
      "Find wheelchair-friendly routes easily",
      "Save time on journey planning",
      "Access reliable accessibility information",
      "Contribute to community knowledge",
    ],
    image: "/solutions/solution1.png",
    category: "Navigation",
  },
  {
    id: 2,
    title: "Explore",
    description:
      "Provide suitable cost-saving transportation options (GOOSEWAY Carpool service/other choices for transport) which fit with their wheelchair.",
    features: [
      "Wheelchair-friendly vehicle matching",
      "Real-time ride tracking",
      "Secure payment system",
      "Driver verification",
    ],
    benefits: [
      "Reduce transportation costs",
      "Access reliable transport options",
      "Ensure safety and comfort",
      "Support from verified drivers",
    ],
    image: "/solutions/solution3.png",
    category: "Explore",
  },
  {
    id: 3,
    title: "Community",
    description:
      "Provide information, situation happened in society, leading people aware and change into UD places.",
    features: [
      "Social networking platform",
      "Experience sharing",
      "Location reviews",
      "Accessibility awareness",
    ],
    benefits: [
      "Connect with like-minded people",
      "Share valuable experiences",
      "Promote inclusive design",
      "Build supportive community",
    ],
    image: "/solutions/solution2.png",
    category: "Social",
  },
];

export default function SolutionPage() {
  const { t } = useLanguage();
  const { openDownloadModal } = useModal();

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openDownloadModal();
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <CommonHeroSection
        title={t("our_solutions")}
        subtitle={t("solutions_hero_subtitle")}
        mascotImage="/mascot/GooseMascot-4.png"
      />

      {/* App Showcase */}
      <AppShowcase solutions={solutions} />

      {/* Call to Action */}
      <section className="text-center bg-[#E7EFF3] py-14 rounded-3xl mx-4">
        <h2 className="text-2xl font-bold mb-4">
          {t("ready_to_make_mobility_accessible")}
        </h2>
        <p className="text-gray-600 mb-6">{t("join_inclusive_community")}</p>
        <button
          onClick={handleDownloadClick}
          className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg inline-block"
        >
          {t("get_started")}
        </button>
      </section>

      {/* Decorative Elements */}
      <div className="fixed -z-10 top-20 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="fixed -z-10 bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
    </div>
  );
}
