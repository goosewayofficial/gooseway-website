"use client";
// src/components/home/HeroSection.tsx

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#2563EB] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-[#F9C423]/15 rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left: Text content */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5 animate-fade-down">
              ♿ {t("tagline").split("—")[0].trim()}
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight animate-fade-down">
              {t("welcome")}
            </h1>

            {/* What the app does */}
            <p
              className="mt-5 text-lg md:text-xl text-blue-100 max-w-lg animate-fade-up leading-relaxed"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              {t("tagline")}
            </p>

            {/* Target users chips */}
            <div
              className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start animate-fade-up"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              {["♿ Wheelchair Users", "🦯 Visual Impairment", "👴 Elderly", "🤰 Pregnant", "🧳 Luggage"].map((label) => (
                <span key={label} className="bg-white/10 text-white/90 text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                  {label}
                </span>
              ))}
            </div>

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

          {/* Right: Phone mockup */}
          <div className="flex-shrink-0 flex items-end justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
            {/* Main phone — map screen */}
            <div className="w-52 md:w-60 drop-shadow-2xl">
              <Image
                src="/solutions/solution1.png"
                alt="GOOSEWAY accessible map"
                width={240}
                height={490}
                className="rounded-[2.5rem] w-full h-auto object-contain"
                priority
              />
            </div>
            {/* Secondary phone — community feed, slightly offset */}
            <div className="hidden lg:block w-44 drop-shadow-xl mb-6 opacity-80">
              <Image
                src="/solutions/solution2.png"
                alt="GOOSEWAY community"
                width={176}
                height={360}
                className="rounded-[2rem] w-full h-auto object-contain"
              />
            </div>
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
