// src/components/achievements/AchievementModal.tsx
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Calendar, Award } from "lucide-react";
import { Achievement } from "../../app/interfaces";
import { useLanguage } from "@/context/LanguageContext";

interface AchievementModalProps {
  achievement: Achievement;
  onClose: () => void;
}

export default function AchievementModal({
  achievement,
  onClose,
}: AchievementModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useLanguage();

  const allImages = [achievement.coverImage, ...(achievement.images || [])];

  // เพิ่มเอฟเฟกต์ Scale In
  useEffect(() => {
    setIsAnimating(true);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) =>
          prev === null ? null : prev === allImages.length - 1 ? 0 : prev + 1
        );
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) =>
          prev === null ? null : prev === 0 ? allImages.length - 1 : prev - 1
        );
      } else if (e.key === "Escape") {
        setActiveImageIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex, allImages.length]);

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[60]"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
          isAnimating ? "scale-in" : ""
        } relative`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button top-right */}
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-all"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header section (Title, organizer, date, etc) */}
          <div className="space-y-3 pr-10">
            <button
              onClick={onClose}
              className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              <ChevronLeft size={16} />
              {t("back_to_achievements")}
            </button>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              {achievement.title}
            </h2>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 border-b border-gray-100 pb-4 pt-1">
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium text-xs">
                {achievement.category}
              </span>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1">
                <Award size={14} className="text-gray-400" />
                <span>{t("by_organizer")} {achievement.organizer}</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1">
                <Calendar size={14} className="text-gray-400" />
                <span>{achievement.date}</span>
              </div>
            </div>
          </div>

          {/* Main Cover Image */}
          <div 
            className="relative group cursor-zoom-in overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-sm max-h-[480px] flex items-center justify-center"
            onClick={() => setActiveImageIndex(0)}
          >
            <img
              src={achievement.coverImage}
              alt={achievement.title}
              className="w-full h-full object-contain max-h-[480px] transition-transform duration-500 group-hover:scale-[1.01]"
            />
            {achievement.logo && (
              <div className="absolute top-4 left-4 bg-white p-1.5 rounded-xl shadow-lg w-14 h-14 flex items-center justify-center border border-gray-100 pointer-events-none select-none z-10">
                <img 
                  src={achievement.logo} 
                  alt={`${achievement.organizer} logo`} 
                  className="max-w-full max-h-full object-contain rounded" 
                />
              </div>
            )}
          </div>

          {/* Long Description content */}
          <div className="prose max-w-none text-gray-700 text-base sm:text-lg leading-relaxed pt-2">
            <p className="whitespace-pre-line">
              {achievement.longDescription || achievement.description}
            </p>
          </div>

          {/* Gallery / Remaining Images */}
          {achievement.images && achievement.images.length > 0 && (
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900">
                {t("gallery")}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {achievement.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-video group cursor-zoom-in overflow-hidden rounded-xl bg-gray-50 border border-gray-100 shadow-sm"
                    onClick={() => setActiveImageIndex(idx + 1)}
                  >
                    <img
                      src={img}
                      alt={`${achievement.title} - ${idx + 1}`}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-95"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 z-[70] select-none"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Lightbox Close / Counter */}
          <div className="absolute top-6 right-6 z-[80] flex items-center gap-4">
            <span className="text-white/60 text-sm font-medium">
              {activeImageIndex + 1} / {allImages.length}
            </span>
            <button
              onClick={() => setActiveImageIndex(null)}
              className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors backdrop-blur-sm"
            >
              <X size={20} />
            </button>
          </div>

          {/* Lightbox Main Content Container */}
          <div className="relative max-w-5xl w-full flex items-center justify-center h-[75vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={allImages[activeImageIndex]}
              alt="Lightbox View"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-in"
            />

            {/* Lightbox Prev / Next controls */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) =>
                      prev === null ? null : prev === 0 ? allImages.length - 1 : prev - 1
                    );
                  }}
                  className="absolute -left-4 sm:-left-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3.5 rounded-full transition-all backdrop-blur-sm shadow-lg hover:scale-105"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) =>
                      prev === null ? null : prev === allImages.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="absolute -right-4 sm:-right-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3.5 rounded-full transition-all backdrop-blur-sm shadow-lg hover:scale-105"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>

          <div className="absolute bottom-6 text-white/40 text-xs text-center px-4">
            {t("lightbox_tip")}
          </div>
        </div>
      )}
    </div>
  );
}
