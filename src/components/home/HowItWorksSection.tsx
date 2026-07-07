"use client";
// src/components/home/HowItWorksSection.tsx

import { useLanguage } from "@/context/LanguageContext";
import { Download, Search, Share2, Gift } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    titleKey: "step1_title",
    descKey: "step1_desc",
    badgeColor: "bg-brand-blue/10 text-brand-blue border-brand-blue/15",
    iconBg: "bg-brand-blue/10 border-brand-blue/20 text-brand-blue",
    glow: "shadow-brand-blue/5 hover:bg-brand-blue/[0.02]",
    hoverText: "group-hover:text-brand-blue",
  },
  {
    number: "02",
    icon: Search,
    titleKey: "step2_title",
    descKey: "step2_desc",
    badgeColor: "bg-brand-yellow/15 text-[#D97706] border-brand-yellow/20",
    iconBg: "bg-brand-yellow/10 border-brand-yellow/20 text-[#D97706]",
    glow: "shadow-brand-yellow/5 hover:bg-brand-yellow/[0.02]",
    hoverText: "group-hover:text-[#D97706]",
  },
  {
    number: "03",
    icon: Share2,
    titleKey: "step3_title",
    descKey: "step3_desc",
    badgeColor: "bg-brand-teal/10 text-brand-teal border-brand-teal/15",
    iconBg: "bg-brand-teal/10 border-brand-teal/20 text-brand-teal",
    glow: "shadow-brand-teal/5 hover:bg-brand-teal/[0.02]",
    hoverText: "group-hover:text-brand-teal",
  },
  {
    number: "04",
    icon: Gift,
    titleKey: "step4_title",
    descKey: "step4_desc",
    badgeColor: "bg-brand-red/10 text-brand-red border-brand-red/15",
    iconBg: "bg-brand-red/10 border-brand-red/20 text-brand-red",
    glow: "shadow-brand-red/5 hover:bg-brand-red/[0.02]",
    hoverText: "group-hover:text-brand-red",
  },
];

export default function HowItWorksSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Premium background radial glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#231F20] tracking-tight">
            {t("how_it_works_title")}
          </h2>
          <div className="mt-4 w-10 h-1 bg-[#2563EB] rounded-full mx-auto" />
          <p className="mt-5 text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {t("how_it_works_subtitle")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-12 pb-8">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[138px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-brand-blue/10 via-brand-yellow/10 via-brand-teal/10 to-brand-red/10 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className={`relative z-10 flex flex-col items-center text-center group bg-white/80 backdrop-blur-md border border-gray-100/80 rounded-[36px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-3 lg:group-hover:translate-y-0 transition-all duration-500 lg:even:translate-y-6 ${step.glow}`}
              >
                {/* Big watermark number */}
                <div className="absolute top-4 right-6 text-7xl font-extrabold text-gray-100/50 select-none group-hover:text-gray-200/40 transition-colors duration-500 font-poppins">
                  {step.number}
                </div>

                {/* Step badge */}
                <span className={`mb-5 px-3 py-1 border rounded-full text-xs font-bold shadow-sm relative z-10 ${step.badgeColor}`}>
                  {language === "th" ? `ขั้นตอนที่ ${i + 1}` : `Step ${i + 1}`}
                </span>

                {/* Icon circle */}
                <div
                  className={`w-20 h-20 rounded-3xl flex items-center justify-center border shadow-md transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 mb-8 relative z-10 ${step.iconBg}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className={`text-lg font-bold text-[#231F20] mb-3 transition-colors duration-300 relative z-10 ${step.hoverText}`}>
                  {t(step.titleKey)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs relative z-10">
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
