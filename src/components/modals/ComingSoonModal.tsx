"use client";
// src/components/modals/ComingSoonModal.tsx
import React from "react";
import { X, Smartphone, Bell } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";

export default function ComingSoonModal() {
  const { isComingSoonOpen, closeComingSoon } = useModal();
  const { t } = useLanguage();

  if (!isComingSoonOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
        onClick={closeComingSoon}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
        {/* Header Decor */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-500 to-blue-600 -z-10" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
        
        {/* Close Button */}
        <button
          onClick={closeComingSoon}
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
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full border-4 border-white flex items-center justify-center text-white shadow-md">
              <Bell size={18} fill="currentColor" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-extrabold text-[#231F20]">
              {t("coming_soon")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("working_hard")}
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={closeComingSoon}
            className="mt-8 w-full py-4 bg-[#F9C423] hover:bg-yellow-400 text-[#231F20] font-bold rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            {t("got_it")}
          </button>
          
          <p className="mt-4 text-xs text-gray-400 font-medium">
            Stay tuned for updates! 🪿🚀
          </p>
        </div>
      </div>
    </div>
  );
}
