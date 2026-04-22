"use client";
// src/components/home/AppShowcaseSection.tsx

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [currentIndex, setCurrentIndex] = useState(1); // Start with featured one

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screens.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

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

        {/* Mobile: Slider · Desktop: Side-by-side */}
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:flex md:items-end md:justify-center gap-8">
            {screens.map((screen, i) => (
              <div
                key={i}
                className={`flex flex-col items-center
                            ${screen.featured ? "md:-translate-y-6" : "md:opacity-90"}`}
              >
                <div
                  className={`relative drop-shadow-2xl transition-transform duration-300 hover:-translate-y-2
                              ${screen.featured ? "md:w-64" : "md:w-52"}`}
                >
                  <div className="relative w-full aspect-[9/19.5] bg-gray-900 rounded-[40px] shadow-xl overflow-hidden border-[8px] border-gray-900">
                    <div className="w-full h-full rounded-[32px] overflow-hidden bg-gray-50 relative">
                      <Image
                        src={screen.src}
                        alt={t(screen.titleKey)}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center max-w-[13rem]">
                  <h3 className="mt-2 text-base font-bold text-[#231F20]">
                    {t(screen.titleKey)}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {t(screen.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View (Slider) */}
          <div className="md:hidden relative px-4">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {screens.map((screen, i) => (
                  <div key={i} className="min-w-full flex flex-col items-center px-2">
                    <div className="relative w-56 drop-shadow-xl">
                      <div className="relative w-full aspect-[9/19.5] bg-gray-900 rounded-[32px] shadow-xl overflow-hidden border-[6px] border-gray-900">
                        <div className="w-full h-full rounded-[24px] overflow-hidden bg-gray-50 relative">
                          <Image
                            src={screen.src}
                            alt={t(screen.titleKey)}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <h3 className="mt-2 text-lg font-bold text-[#231F20]">
                        {t(screen.titleKey)}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-[250px]">
                        {t(screen.descKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/3 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md z-10 text-gray-600"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/3 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md z-10 text-gray-600"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "bg-[#2563EB] w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
