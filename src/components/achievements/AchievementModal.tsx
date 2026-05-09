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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useLanguage();

  // เพิ่มเอฟเฟกต์ Scale In
  useEffect(() => {
    setIsAnimating(true);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === achievement.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? achievement.images.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[60]"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
          isAnimating ? "scale-in" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onClose}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Image Carousel */}
          <div className="relative h-96 bg-gray-900">
            {achievement.images.length > 0 ? (
              <img
                src={achievement.images[currentImageIndex]}
                alt={`${achievement.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={achievement.coverImage}
                alt={achievement.title}
                className="w-full h-full object-contain"
              />
            )}

            {achievement.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <div className="bg-black/60 text-white px-4 py-2 rounded-full">
                    {currentImageIndex + 1} / {achievement.images.length}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {achievement.title}
                </h2>
                <div className="flex items-center text-gray-600 mb-2">
                  <Award size={18} className="mr-2" />
                  <p>
                    {t("by_organizer")} {achievement.organizer}
                  </p>
                </div>
                <div className="flex items-center text-blue-600">
                  <Calendar size={18} className="mr-2" />
                  <span>{achievement.date}</span>
                </div>
              </div>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                {achievement.category}
              </span>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                {achievement.longDescription || achievement.description}
              </p>
            </div>

            {/* Footer buttons */}
            <div className="pt-4 flex justify-end items-center">
              <button
                onClick={onClose}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t("close")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
