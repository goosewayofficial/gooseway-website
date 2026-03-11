// src/components/home/CtaSection.tsx
"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface CtaSectionProps {
  onVideoClick?: () => void;
}

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/goosewayofficial", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { name: "Instagram", href: "https://www.instagram.com/goosewayofficial", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { name: "TikTok", href: "https://www.tiktok.com/@goosewayofficial", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg> },
  { name: "X", href: "https://x.com/gooseway_", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { name: "Line", href: "https://lin.ee/K6cFkWW", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.952 12.17c0-4.27-4.28-7.745-9.545-7.745S.862 7.9.862 12.17c0 3.827 3.394 7.032 7.978 7.637.31.067.734.205.841.47.097.24.063.617.031.86l-.136.819c-.041.24-.19.94.824.513 1.013-.428 5.473-3.22 7.468-5.514 1.378-1.51 2.084-3.046 2.084-4.785z"/></svg> },
];

export default function CtaSection({ onVideoClick = () => {} }: CtaSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white pt-10 pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Mascot */}
          <div className="flex-shrink-0 w-44 h-44 md:w-56 md:h-56 animate-float-slow">
            <Image
              src="/mascot/GooseMascot-2.png"
              alt="Gooseway Mascot"
              width={224}
              height={224}
              className="object-contain w-full h-full drop-shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {t("join_community")}
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-xl">{t("community_desc")}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="https://lin.ee/K6cFkWW"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#F9C423] hover:bg-yellow-400 text-[#231F20] font-bold px-7 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {t("get_started")}
              </a>
              <button
                onClick={onVideoClick}
                className="flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 font-bold px-7 py-3 rounded-full transition-all duration-200 border-2 border-blue-600 shadow-sm hover:shadow"
              >
                {t("watch_video")}
              </button>
            </div>

            {/* Social links */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
