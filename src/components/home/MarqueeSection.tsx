"use client";
// src/components/home/MarqueeSection.tsx

import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// The audiences GOOSEWAY is built for. Keep keys in sync with
// src/translations/{en,th}.ts.
const userTypeKeys = [
  "marquee_wheelchair_users",
  "marquee_seniors",
  "marquee_caregivers",
  "marquee_strollers",
  "marquee_injured",
  "marquee_pregnant",
  "marquee_travelers",
  "marquee_volunteers",
  "marquee_communities",
];

export default function MarqueeSection() {
  const { t } = useLanguage();
  const items = userTypeKeys.map((key) => t(key));

  return (
    <section className="relative bg-brand-dark-blue py-14">
      <p className="text-center text-blue-200 text-sm md:text-base font-medium mb-8 px-4">
        {t("marquee_heading")}
      </p>

      <div className="marquee-viewport relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-40 bg-gradient-to-r from-brand-dark-blue to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-40 bg-gradient-to-l from-brand-dark-blue to-transparent" />

        {/* Track: two identical halves so a -50% translate loops seamlessly */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1}
            >
              {items.map((label, i) => (
                <li key={i} className="flex items-center group">
                  <span className="px-6 md:px-10 text-3xl md:text-5xl font-extrabold text-white whitespace-nowrap cursor-default transition-all duration-300 hover:text-brand-yellow hover:scale-[1.02]">
                    {label}
                  </span>
                  <Star
                    className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-brand-yellow fill-brand-yellow transition-transform duration-500 group-hover:rotate-45"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
