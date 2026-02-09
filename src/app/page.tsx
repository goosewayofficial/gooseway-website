"use client"; // 👈 เพิ่มบรรทัดนี้ เพื่อให้ใช้ Event Handler ได้

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation"; // 👈 import สำหรับเปลี่ยนหน้า

export default function Home() {
  const router = useRouter();

  // 👇 สร้างฟังก์ชันสำหรับปุ่ม Learn More
  const handleLearnMore = () => {
    // คุณสามารถเลือกได้ว่าจะให้ทำอะไร เช่น ไปหน้าเกี่ยวกับเรา
    router.push("/about");

    // หรือถ้าอยากให้เลื่อนลงไปดูส่วนอื่น (Scroll) ก็ใช้แบบนี้แทนได้:
    // document.getElementById('target-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <HeroSection />

      {/* 👇 ส่ง prop onLearnMoreClick เข้าไปแก้ Error */}
      <FeaturesSection onLearnMoreClick={handleLearnMore} />

      <section className="bg-brand-900 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            พร้อมออกเดินทางหรือยัง? 🚀
          </h2>
          <p className="mb-8 text-brand-100">
            มาร่วมเป็นส่วนหนึ่งของชุมชน We Wheel Go วันนี้
          </p>
          <button className="bg-brand-accent text-brand-900 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
            สมัครสมาชิกเลย
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
