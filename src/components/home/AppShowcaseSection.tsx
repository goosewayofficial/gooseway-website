"use client";
// src/components/home/AppShowcaseSection.tsx

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const screens = [
  {
    src: "/solutions/solution1.png",
    titleKey: "showcase1_title",
    descKey: "showcase1_desc",
    align: "left" as const,
  },
  {
    src: "/solutions/solution2.png",
    titleKey: "showcase2_title",
    descKey: "showcase2_desc",
    align: "right" as const,
  },
  {
    src: "/solutions/solution3.png",
    titleKey: "showcase3_title",
    descKey: "showcase3_desc",
    align: "left" as const,
  },
];

export default function AppShowcaseSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#E7EFF3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#231F20]">
            {t("app_showcase_title")}
          </h2>
          <div className="mt-3 w-16 h-1.5 bg-[#F9C423] rounded-full mx-auto" />
          <p className="mt-4 text-gray-500 text-base">
            {t("app_showcase_subtitle")}
          </p>
        </div>

        {/* Alternating rows */}
        <div className="space-y-20">
          {screens.map((screen, i) => {
            const isRight = screen.align === "right";
            return (
              <div
                key={i}
                className={`flex flex-col ${isRight ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16`}
              >
                {/* Phone mockup */}
                <div className="flex-shrink-0 w-56 md:w-64 drop-shadow-2xl">
                  <Image
                    src={screen.src}
                    alt={t(screen.titleKey)}
                    width={260}
                    height={530}
                    className="rounded-[2.5rem] w-full h-auto object-contain"
                  />
                </div>

                {/* Text */}
                <div className={`flex-1 ${isRight ? "md:text-right" : ""}`}>
                  <div
                    className={`inline-flex items-center gap-2 bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${isRight ? "md:float-right md:clear-both" : ""}`}
                  >
                    {String(i + 1).padStart(2, "0")} / 03
                  </div>
                  <h3
                    className={`text-2xl md:text-3xl font-extrabold text-[#231F20] mb-4 clear-both`}
                  >
                    {t(screen.titleKey)}
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-md">
                    {t(screen.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
