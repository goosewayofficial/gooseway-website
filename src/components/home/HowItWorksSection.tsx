"use client";
// src/components/home/HowItWorksSection.tsx

import { useLanguage } from "@/context/LanguageContext";
import { Download, Search, Share2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    color: "bg-[#2563EB]",
    titleKey: "step1_title",
    descKey: "step1_desc",
  },
  {
    number: "02",
    icon: Search,
    color: "bg-[#F9C423]",
    titleKey: "step2_title",
    descKey: "step2_desc",
  },
  {
    number: "03",
    icon: Share2,
    color: "bg-[#4DB7AB]",
    titleKey: "step3_title",
    descKey: "step3_desc",
  },
];

export default function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#231F20]">
            {t("how_it_works_title")}
          </h2>
          <div className="mt-3 w-16 h-1.5 bg-[#2563EB] rounded-full mx-auto" />
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            {t("how_it_works_subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gray-200 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div
                  className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center shadow-lg mb-5`}
                >
                  <Icon size={32} className="text-white" />
                </div>

                {/* Step number badge */}
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-gray-200 rounded-full text-xs font-bold text-gray-400 flex items-center justify-center shadow-sm">
                  {step.number}
                </span>

                <h3 className="text-lg font-bold text-[#231F20] mb-2">
                  {t(step.titleKey)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {t(step.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
