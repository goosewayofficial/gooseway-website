// src/components/Footer.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/goosewayofficial",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/goosewayofficial",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@goosewayofficial",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/gooseway_",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Line",
    href: "https://lin.ee/K6cFkWW",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.952 12.17c0-4.27-4.28-7.745-9.545-7.745S.862 7.9.862 12.17c0 3.827 3.394 7.032 7.978 7.637.31.067.734.205.841.47.097.24.063.617.031.86l-.136.819c-.041.24-.19.94.824.513 1.013-.428 5.473-3.22 7.468-5.514 1.378-1.51 2.084-3.046 2.084-4.785z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { language, t } = useLanguage();
  const { openComingSoon } = useModal();

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    openComingSoon();
  };

  return (
    <>
      <footer className="relative bg-[#2563EB] text-white overflow-hidden">
        {/* Wave top */}
        <div className="w-full overflow-hidden leading-none -mb-1">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full block"
            style={{ background: "white" }}
          >
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
              fill="#2563EB"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 relative">
          {/* Mascot - flying goose */}
          <div className="absolute right-4 bottom-20 opacity-20 pointer-events-none hidden lg:block">
            <Image
              src="/mascot/White/GooseMascotWhite-9.png"
              alt="Gooseway Mascot"
              width={160}
              height={160}
              className="object-contain drop-shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white/10 rounded-lg p-1 border border-white/20">
                  <Image src="/logo.svg" alt="GOOSEWAY" width={32} height={32} className="object-contain" />
                </div>
                <Image src="/logo-text.svg" alt="GOOSEWAY" width={100} height={22} className="object-contain h-7 w-auto brightness-0 invert" />
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                {language === "th"
                  ? "แพลตฟอร์มสำหรับการเดินทางที่เข้าถึงได้และชุมชนที่ครอบคลุม"
                  : "A platform for accessible journeys and inclusive communities."}
              </p>
              <p className="text-blue-200 text-xs mt-3 font-semibold italic">
                &ldquo;Your Goose, Your Guide&rdquo;
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-base font-bold mb-4 text-white">
                {language === "th" ? "ติดต่อเรา" : "Contact Us"}
              </h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>
                  <a href="mailto:goosewayofficial@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-lg">✉️</span> goosewayofficial@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+66830796796" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-lg">📞</span> +66 830796796
                  </a>
                </li>
                <li>
                  <a href="https://lin.ee/K6cFkWW" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-lg">💬</span> Line: @248ynfet
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-base font-bold mb-4 text-white">
                {language === "th" ? "ติดตามเรา" : "Follow Us"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* App links */}
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href="https://apps.apple.com/us/app/gooseway/id6760458094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity focus:outline-none"
                >
                  <Image src="/store/App_Store.svg" alt="App Store" width={110} height={36} className="object-contain h-9 w-auto" />
                </a>
                <button
                  onClick={handleComingSoon}
                  className="opacity-90 hover:opacity-100 transition-opacity focus:outline-none"
                >
                  <Image src="/store/Google_Play.png" alt="Google Play" width={110} height={36} className="object-contain h-9 w-auto" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-blue-100">
            <p>
              © 2025 GOOSEWAY.{" "}
              {language === "th" ? "สงวนลิขสิทธิ์" : "All rights reserved"}.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors underline underline-offset-2"
              >
                {language === "th" ? "นโยบายความเป็นส่วนตัว" : "Privacy Policy"}
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href="/terms-and-conditions"
                className="hover:text-white transition-colors underline underline-offset-2"
              >
                {language === "th" ? "ข้อตกลงการใช้บริการ" : "Terms and Conditions"}
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}
