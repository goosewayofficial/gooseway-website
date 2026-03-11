// src/components/CommonHeroSection.tsx
"use client";

import Image from "next/image";

interface CommonHeroSectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  mascotImage?: string;
  bgColor?: string;
  // legacy props (kept for compatibility)
  enableParallax?: boolean;
  scrollY?: number;
  backgroundColor?: string;
  height?: string;
  children?: React.ReactNode;
}

export default function CommonHeroSection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  mascotImage,
  bgColor = "bg-[#2563EB]",
  children,
}: CommonHeroSectionProps) {
  return (
    <section className={`relative ${bgColor} overflow-hidden`}>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-52 h-52 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-[#F9C423]/10 rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight animate-fade-down">
              {title}
            </h1>
            {subtitle && (
              <p
                className="mt-4 text-lg text-blue-100 max-w-xl animate-fade-up"
                style={{ animationDelay: "0.2s", opacity: 0 }}
              >
                {subtitle}
              </p>
            )}
            {buttonText && buttonLink && (
              <a
                href={buttonLink}
                target={buttonLink.startsWith("http") ? "_blank" : undefined}
                rel={buttonLink.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 mt-6 bg-[#F9C423] hover:bg-yellow-400 text-[#231F20] font-bold px-7 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 animate-fade-up"
                style={{ animationDelay: "0.4s", opacity: 0 }}
              >
                {buttonText}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            )}
            {children}
          </div>

          {/* Mascot */}
          {mascotImage && (
            <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 animate-float">
              <Image
                src={mascotImage}
                alt="Gooseway Mascot"
                width={224}
                height={224}
                className="object-contain w-full h-full drop-shadow-xl"
                priority
              />
            </div>
          )}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="w-full overflow-hidden leading-none -mb-px">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
        >
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
