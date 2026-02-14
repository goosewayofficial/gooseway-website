// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/context/LanguageContext";
import CookieConsent from "@/components/CookieConsent";
import { Metadata } from "next"; // เพิ่ม Type สำหรับ Metadata

const inter = Inter({ subsets: ["latin"] });

// เมื่อไฟล์นี้ไม่มี "use client" ตัวแปรนี้จะทำงานกับ SEO ของ Next.js ทันที
export const metadata: Metadata = {
  title: "GOOSEWAY",
  description: "Your goose, your guide",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ไม่ต้องใส่ <head> เองแล้ว Next.js จะจัดการให้จาก metadata ข้างบน */}
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <Footer />
          </div>
          <CookieConsent />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
