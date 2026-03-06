// src/components/home/HeroSection.tsx
"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#2563EB] overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-[#F9C423]/15 rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5 animate-fade-down">
              🦢 {t("tagline")}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight animate-fade-down">
              {t("welcome")}
            </h1>
            <p
              className="mt-5 text-lg md:text-xl text-blue-100 max-w-lg animate-fade-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              {t("tagline")}
            </p>

            {/* CTAs */}
            <div
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start animate-fade-up"
              style={{ animationDelay: "0.35s", opacity: 0 }}
            >
              <a
                href="https://lin.ee/K6cFkWW"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#F9C423] hover:bg-yellow-400 text-[#231F20] font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t("get_started")}
              </a>
              <a
                href="/solutions"
                className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 border border-white/30 text-base"
              >
                {t("learn_more")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* App store badges */}
            <div
              className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start animate-fade-up"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/store/App_Store.svg" alt="App Store" width={120} height={40} className="object-contain h-10 w-auto" />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/store/Google_Play.png" alt="Google Play" width={120} height={40} className="object-contain h-10 w-auto" />
              </a>
            </div>
          </div>

          {/* Mascot */}
          <div className="flex-shrink-0 w-52 h-52 md:w-72 md:h-72 animate-float">
            <Image
              src="/mascot/GooseMascot-6.png"
              alt="Gooseway Mascot"
              width={288}
              height={288}
              className="object-contain w-full h-full drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="w-full overflow-hidden leading-none -mb-px">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
          <path d="M0,35 C480,70 960,0 1440,35 L1440,70 L0,70 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
