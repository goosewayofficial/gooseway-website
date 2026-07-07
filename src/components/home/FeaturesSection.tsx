// src/components/home/FeaturesSection.tsx
"use client";

import Image from "next/image";
import { MapPin, Users, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FeaturesSectionProps {
  onLearnMoreClick: () => void;
}

export default function FeaturesSection({ onLearnMoreClick }: FeaturesSectionProps) {
  const { t } = useLanguage();

  const features = [
    {
      title: t("feature_accessible_routes_title"),
      description: t("feature_accessible_routes_desc"),
      icon: MapPin,
      image: "/home/Accessible_Routes.png",
      iconColor: "text-brand-blue",
      glowColor: "group-hover:border-brand-blue/30",
    },
    {
      title: t("feature_explore_title"),
      description: t("feature_explore_desc"),
      icon: Shield,
      image: "/home/Safe_Transportation.png",
      iconColor: "text-[#D97706]",
      glowColor: "group-hover:border-brand-yellow/30",
    },
    {
      title: t("feature_inclusive_community_title"),
      description: t("feature_inclusive_community_desc"),
      icon: Users,
      image: "/home/Inclusive_Community.png",
      iconColor: "text-brand-teal",
      glowColor: "group-hover:border-brand-teal/30",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#E7EFF3]/30 via-[#E7EFF3]/50 to-[#E7EFF3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#231F20]">
            {t("making_mobility_accessible")}
          </h2>
          <div className="mt-4 w-12 h-1 bg-[#2563EB] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100/80 ${feature.glowColor}`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Floating Glassmorphic Icon badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} className={feature.iconColor} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#231F20] mb-3 group-hover:text-[#2563EB] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{feature.description}</p>
                  
                  <button
                    onClick={onLearnMoreClick}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-blue-700 transition-colors group/btn"
                  >
                    {t("learn_more")}
                    <svg 
                      className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
