// src/components/FaqComponent.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqComponentProps {
  title: string;
  faqs: FaqItem[];
  className?: string;
}

export default function FaqComponent({ title, faqs, className = "" }: FaqComponentProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className={`py-20 bg-[#E7EFF3] ${className}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#231F20]">{title}</h2>
          <div className="mt-3 w-16 h-1.5 bg-[#4DB7AB] rounded-full mx-auto" />
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                aria-expanded={activeIndex === index}
              >
                <span className="font-bold text-[#231F20] pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-[#2563EB] transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-5 text-gray-500 leading-relaxed text-sm border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
