// src/components/home/TestimonialCard.tsx
"use client";

import { Star } from "lucide-react";
import type { Testimonial } from "@/app/interfaces";

const avatarColors = [
  "bg-[#2563EB] text-white",
  "bg-[#F9C423] text-[#231F20]",
  "bg-[#4DB7AB] text-white",
];

interface TestimonialCardProps extends Testimonial {
  className?: string;
  index?: number;
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
  className = "",
  index = 0,
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#2563EB] ${className}`}
    >
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-[#F9C423] fill-[#F9C423]" : "text-gray-200 fill-gray-200"}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-gray-600 text-sm leading-relaxed mb-5">
        &ldquo;{content}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base ${avatarColors[index % avatarColors.length]}`}>
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-[#231F20] text-sm">{name}</p>
          <p className="text-gray-400 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
