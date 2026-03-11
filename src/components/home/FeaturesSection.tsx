// src/components/home/FeaturesSection.tsx
"use client";

import Image from "next/image";
import { MapPin, Users, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FeaturesSectionProps {
  onLearnMoreClick: () => void;
}

const featureColors = [
  { bg: "bg-blue-50", icon: "bg-[#2563EB]", border: "border-[#2563EB]" },
  { bg: "bg-yellow-50", icon: "bg-[#F9C423]", border: "border-[#F9C423]" },
  { bg: "bg-teal-50", icon: "bg-[#4DB7AB]", border: "border-[#4DB7AB]" },
];

export default function FeaturesSection({ onLearnMoreClick }: FeaturesSectionProps) {
  const { t } = useLanguage();

  const features = [
    {
      title: t("feature_accessible_routes_title"),
      description: t("feature_accessible_routes_desc"),
      icon: <MapPin size={28} className="text-white" />,
      image: "/home/Accessible_Routes.png",
    },
    {
      title: t("feature_explore_title"),
      description: t("feature_explore_desc"),
      icon: <Shield size={28} className="text-[#231F20]" />,
      image: "/solutions/solution3.png",
    },
    {
      title: t("feature_inclusive_community_title"),
      description: t("feature_inclusive_community_desc"),
      icon: <Users size={28} className="text-white" />,
      image: "/home/Inclusive_Community.png",
    },
  ];

  return (
    <section className="py-20 bg-[#E7EFF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#231F20]">
            {t("making_mobility_accessible")}
          </h2>
          <div className="mt-3 w-16 h-1.5 bg-[#2563EB] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-t-4 ${featureColors[index].border}`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Icon badge */}
                <div className={`absolute top-4 left-4 w-11 h-11 ${featureColors[index].icon} rounded-2xl flex items-center justify-center shadow-md`}>
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#231F20] mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                <button
                  onClick={onLearnMoreClick}
                  className="mt-4 text-[#2563EB] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {t("learn_more")}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
