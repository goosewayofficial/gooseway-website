"use client";
// src/components/home/AppShowcaseSection.tsx

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const screens = [
  {
    src: "/solutions/solution1.png",
    titleKey: "showcase1_title",
    descKey: "showcase1_desc",
  },
  {
    src: "/solutions/solution2.png",
    titleKey: "showcase2_title",
    descKey: "showcase2_desc",
    featured: true,
  },
  {
    src: "/solutions/solution3.png",
    titleKey: "showcase3_title",
    descKey: "showcase3_desc",
  },
];

export default function AppShowcaseSection() {
  const { t } = useLanguage();

  return (
    <section className="py-14 md:py-20 bg-[#E7EFF3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#231F20]">
            {t("app_showcase_title")}
          </h2>
          <div className="mt-3 w-16 h-1.5 bg-[#F9C423] rounded-full mx-auto" />
          <p className="mt-4 text-gray-500 text-sm md:text-base">
            {t("app_showcase_subtitle")}
          </p>
        </div>

        {/* Mobile: horizontal scroll · Desktop: side-by-side aligned bottom */}
        <div className="flex md:items-end md:justify-center gap-4 md:gap-8
                        overflow-x-auto md:overflow-x-visible
                        snap-x snap-mandatory md:snap-none
                        pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0
                        scrollbar-hide">
          {screens.map((screen, i) => (
            <div
              key={i}
              className={`flex-none snap-center flex flex-col items-center
                          w-52 md:w-auto
                          ${screen.featured ? "md:-translate-y-6" : "md:opacity-90"}`}
            >
              {/* Phone */}
              <div
                className={`drop-shadow-xl md:drop-shadow-2xl transition-transform duration-300 md:hover:-translate-y-2
                            w-44 md:w-auto
                            ${screen.featured ? "md:w-64" : "md:w-52"}`}
              >
                <Image
                  src={screen.src}
                  alt={t(screen.titleKey)}
                  width={260}
                  height={530}
                  className="rounded-[2rem] md:rounded-[2.5rem] w-full h-auto object-contain"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center w-44 md:max-w-[13rem] md:w-auto">
                <span className="text-xs font-bold text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-1 rounded-full">
                  {String(i + 1).padStart(2, "0")} / 03
                </span>
                <h3 className="mt-2 text-sm md:text-base font-bold text-[#231F20]">
                  {t(screen.titleKey)}
                </h3>
                <p className="mt-1 text-xs md:text-sm text-gray-500 leading-relaxed">
                  {t(screen.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint (mobile only) */}
        <p className="md:hidden text-center text-xs text-gray-400 mt-4">
          ← เลื่อนดูเพิ่มเติม →
        </p>
      </div>
    </section>
  );
}
