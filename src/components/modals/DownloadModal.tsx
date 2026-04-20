"use client";
// src/components/modals/DownloadModal.tsx
import React from "react";
import { X, Smartphone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";

export default function DownloadModal() {
  const { isDownloadModalOpen, closeDownloadModal, openComingSoon } = useModal();
  const { language, t } = useLanguage();

  if (!isDownloadModalOpen) return null;

  const handleGooglePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeDownloadModal();
    setTimeout(() => {
      openComingSoon();
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
        onClick={closeDownloadModal}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
        {/* Header Decor */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-500 to-blue-600 -z-10" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
        
        {/* Close Button */}
        <button
          onClick={closeDownloadModal}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors z-20"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="pt-4 pb-10 px-8 flex flex-col items-center text-center">
          {/* Icon/Mascot Container */}
          <div className="relative mb-6">
            <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center p-4">
              <Image 
                src="/mascot/GooseMascot-1.png" 
                alt="GOOSEWAY Mascot" 
                width={80} 
                height={80} 
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center text-white shadow-md">
              <Smartphone size={18} />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-extrabold text-[#231F20]">
              {language === "th" ? "ดาวน์โหลดแอป" : "Download App"}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {language === "th" 
                ? "เลือกแพลตฟอร์มที่คุณต้องการดาวน์โหลด GOOSEWAY" 
                : "Choose your preferred platform to download GOOSEWAY"}
            </p>
          </div>

          <div className="mt-8 w-full flex flex-col items-center gap-4">
            <a
              href="https://apps.apple.com/us/app/gooseway/id6760458094"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105 active:scale-95 focus:outline-none"
              onClick={() => closeDownloadModal()}
            >
              <Image 
                src="/store/App_Store.svg" 
                alt="App Store" 
                width={160} 
                height={48} 
                className="h-12 w-auto"
              />
            </a>

            <button
              onClick={handleGooglePlayClick}
              className="inline-block transition-transform hover:scale-105 active:scale-95 focus:outline-none"
            >
              <Image 
                src="/store/Google_Play.png" 
                alt="Google Play" 
                width={160} 
                height={48} 
                className="h-12 w-auto"
              />
            </button>
          </div>
          
          <p className="mt-6 text-xs text-gray-400 font-medium italic">
            Your Goose, Your Guide 🪿✨
          </p>
        </div>
      </div>
    </div>
  );
}
