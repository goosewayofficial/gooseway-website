// src/app/page.tsx

import HeroSection from "@/components/home/HeroSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import HomeClient from "@/components/home/HomeClient";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section + CTA Section + Modal (client islands) */}
      <HomeClient />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FaqSection />

      <div className="fixed -z-10 bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl" />
    </div>
  );
}
