// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import { useModal } from "../context/ModalContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const { openDownloadModal } = useModal();

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openDownloadModal();
  };

  const navigation = [
    { name: t("about"), href: "/about" },
    { name: t("solutions"), href: "/solutions" },
    { name: t("achievements"), href: "/achievements" },
    { name: t("career"), href: "/career" },
    { name: t("contact"), href: "/contact" },
  ];

  const isActivePath = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-[70] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-9 h-9 relative">
              <Image
                src="/logo.svg"
                alt="GOOSEWAY Icon"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="h-8 w-auto relative">
              <Image
                src="/logo-text.svg"
                alt="GOOSEWAY"
                width={110}
                height={24}
                className="object-contain h-full w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                  isActivePath(item.href)
                    ? "bg-[#2563EB] text-white shadow-sm"
                    : "text-gray-600 hover:bg-blue-50 hover:text-[#2563EB]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
            <button
              onClick={handleDownloadClick}
              className="ml-3 flex items-center gap-2 bg-[#F9C423] hover:bg-yellow-400 text-[#231F20] font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-[#2563EB] hover:bg-blue-50 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        } md:hidden fixed inset-0 z-40 transform transition-all duration-300 ease-in-out`}
      >
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div className="relative float-right bg-white h-full w-72 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <Image src="/logo.svg" alt="GOOSEWAY" width={32} height={32} className="object-contain" />
              <Image src="/logo-text.svg" alt="GOOSEWAY" width={90} height={20} className="object-contain h-7 w-auto" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full text-gray-400 hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-2xl text-base font-semibold transition-all duration-200 ${
                  isActivePath(item.href)
                    ? "bg-[#2563EB] text-white"
                    : "text-gray-600 hover:bg-blue-50 hover:text-[#2563EB]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mascot + Download button */}
          <div className="px-4 pb-6 pt-2 border-t border-gray-100">
            <div className="flex items-end justify-between">
              <Image
                src="/mascot/GooseMascot-3.png"
                alt="Gooseway Mascot"
                width={80}
                height={80}
                className="object-contain opacity-90"
              />
              <button
                onClick={(e) => {
                  handleDownloadClick(e);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 bg-[#F9C423] hover:bg-yellow-400 text-[#231F20] font-bold px-5 py-3 rounded-2xl transition-all duration-200 shadow-sm text-sm"
              >
                <Download className="w-4 h-4" />
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
