// src/components/home/TestimonialsSection.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "@/app/interfaces";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials: Testimonial[] = [
    { name: t("testimonial1_name"), role: t("testimonial1_role"), content: t("testimonial1_content"), avatar: "", rating: 5 },
    { name: t("testimonial2_name"), role: t("testimonial2_role"), content: t("testimonial2_content"), avatar: "", rating: 5 },
    { name: t("testimonial3_name"), role: t("testimonial3_role"), content: t("testimonial3_content"), avatar: "", rating: 4 },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#231F20]">
            {t("testimonials_title")}
          </h2>
          <div className="mt-3 w-16 h-1.5 bg-[#F9C423] rounded-full mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              index={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        {/* Footer Quote */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
          <p className="text-blue-600 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed">
            {t("testimonials_footer_quote")}
          </p>
        </div>
      </div>
    </section>
  );
}
