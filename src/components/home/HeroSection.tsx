"use client";
// src/components/home/HeroSection.tsx

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const [showAltMascot, setShowAltMascot] = useState(false);

  return (
    <section className="relative bg-[#2563EB] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-[#F9C423]/15 rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-40 lg:pb-4">
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
              {[
                "♿ Wheelchair Users",
                "🦯 Visual Impairment",
                "👴 Elderly",
                "🤰 Pregnant",
                "🧳 Luggage",
              ].map((label) => (
                <span
                  key={label}
                  className="bg-white/10 text-white/90 text-xs font-medium px-3 py-1 rounded-full border border-white/20"
                >
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
                href="/solutions"
                className="flex items-center justify-center gap-2 bg-[#F9C423] hover:bg-yellow-400 text-[#231F20] font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                {t("learn_more")}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>

            <div
              className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start animate-fade-up"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              <a
                href="https://apps.apple.com/us/app/gooseway/id6760458094"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity focus:outline-none"
              >
                <Image
                  src="/store/App_Store.svg"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="object-contain h-10 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=co.gooseway.mobileapp"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity focus:outline-none"
              >
                <Image
                  src="/store/Google_Play.png"
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="object-contain h-10 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div
            className="flex-shrink-0 flex items-end justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.15s", opacity: 0 }}
          >
            {/* Main phone — map screen */}
            <div className="relative w-52 md:w-64 drop-shadow-2xl">
              {/* Phone Frame */}
              <div className="relative w-full aspect-[9/19.5] bg-gray-900 rounded-[32px] sm:rounded-[40px] shadow-xl overflow-hidden border-[6px] sm:border-[8px] border-gray-900">
                <div className="w-full h-full rounded-[24px] overflow-hidden bg-gray-50 relative">
                  <Image
                    src="/solutions/solution1.png"
                    alt="GOOSEWAY accessible map"
                    fill
                    sizes="(max-width: 768px) 13rem, 16rem"
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Hardware buttons */}
                <div className="absolute -right-[6px] sm:-right-[8px] top-24 w-1 h-12 bg-gray-800 rounded-l-lg z-[-1]"></div>
                <div className="absolute -left-[6px] sm:-left-[8px] top-20 w-1 h-8 bg-gray-800 rounded-r-lg z-[-1]"></div>
                <div className="absolute -left-[6px] sm:-left-[8px] top-32 w-1 h-12 bg-gray-800 rounded-r-lg z-[-1]"></div>
              </div>

              {/* Mascot Parade overlapping bottom-left of phone on desktop, centered below on mobile */}
              <div className="absolute top-full mt-8 lg:mt-0 lg:top-auto lg:-bottom-8 left-1/2 lg:left-auto lg:right-[calc(100%-2rem)] -translate-x-1/2 lg:translate-x-0 flex h-32 sm:h-36 lg:h-40 z-10 w-[336px] sm:w-[500px] lg:w-[624px] pointer-events-none transition-all duration-700">
                {/* 5. Map Goose (Mascot-5) at the very end */}
                <div
                  className="absolute bottom-6 sm:bottom-4 lg:bottom-5 left-0 w-12 sm:w-16 lg:w-20 animate-float-slow drop-shadow-sm z-0"
                  style={{ animationDelay: "1.6s" }}
                >
                  <Image
                    src="/mascot/White/GooseMascotWhite-5.png"
                    alt="Map Reading Goose"
                    width={96}
                    height={96}
                    className="object-contain w-full h-auto"
                  />
                </div>

                {/* 4. Wheelchair Goose (Mascot-4) at the back */}
                <div
                  className="absolute bottom-4 sm:bottom-3 lg:bottom-3 left-10 sm:left-14 lg:left-20 w-16 sm:w-20 lg:w-28 animate-float-slow drop-shadow-md z-10"
                  style={{ animationDelay: "1.2s" }}
                >
                  <Image
                    src="/mascot/White/GooseMascotWhite-4.png"
                    alt="Wheelchair Goose"
                    width={128}
                    height={128}
                    className="object-contain w-full h-auto"
                  />
                </div>

                {/* 3. Second Walking Goose (Mascot-3) behind first one */}
                <div
                  className="absolute bottom-4 sm:bottom-4 lg:bottom-4 left-24 sm:left-32 lg:left-44 w-20 sm:w-24 lg:w-32 animate-float-slow drop-shadow-md z-20"
                  style={{ animationDelay: "0.8s" }}
                >
                  <Image
                    src="/mascot/White/GooseMascotWhite-3.png"
                    alt="Walking Goose Follower 2"
                    width={112}
                    height={112}
                    className="object-contain w-full h-auto"
                  />
                </div>

                {/* 2. First Walking Goose (Mascot-3) right behind the big one */}
                <div
                  className="absolute bottom-2 sm:bottom-2 lg:bottom-2 left-40 sm:left-56 lg:left-72 w-24 sm:w-28 lg:w-40 animate-float drop-shadow-lg z-30"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Image
                    src="/mascot/White/GooseMascotWhite-3.png"
                    alt="Walking Goose Follower 1"
                    width={144}
                    height={144}
                    className="object-contain w-full h-auto"
                  />
                </div>

                {/* 1. Primary larger mascot (Mascot-1) in front */}
                <div
                  className="absolute bottom-2 lg:bottom-2 left-52 sm:left-76 lg:left-96 w-32 sm:w-48 lg:w-60 animate-float drop-shadow-2xl z-40 pointer-events-auto cursor-pointer transition-transform active:scale-95"
                  onClick={() => setShowAltMascot(!showAltMascot)}
                  title="Click me!"
                >
                  <Image
                    src={
                      showAltMascot
                        ? "/mascot/White/GooseMascotWhite-2.png"
                        : "/mascot/White/GooseMascotWhite-1.png"
                    }
                    alt="Main GOOSEWAY Mascot"
                    width={240}
                    height={240}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="w-full overflow-hidden leading-none -mb-px">
        <svg
          viewBox="0 0 1440 70"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
        >
          <path d="M0,35 C480,70 960,0 1440,35 L1440,70 L0,70 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
