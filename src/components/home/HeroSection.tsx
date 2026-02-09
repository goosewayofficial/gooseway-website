"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react"; // ใช้ Icon เพื่อสื่อสาร

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100">
      {/* Background Decor (Blob) - สร้างบรรยากาศให้ดูไม่แข็ง */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100/50 text-brand-900 rounded-full text-sm font-semibold border border-brand-200"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
            </span>
            #1 Trusted Accessible Map in Thailand 🇹🇭
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            เดินทางอิสระ <br />
            <span className="text-brand-500">ไร้สิ่งกีดขวาง</span> ไปกับ <br />
            <span className="text-brand-accent">We Wheel Go</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            แพลตฟอร์มนำทางเพื่อคนใช้วีลแชร์ รวบรวมข้อมูลสิ่งอำนวยความสะดวก
            รายงานสิ่งกีดขวาง และสร้างสังคมแห่งการแบ่งปัน (Inclusive Community)
            เพราะการเดินทางคือสิทธิ์ของทุกคน ♿✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/download"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 text-white rounded-xl font-bold shadow-lg shadow-brand-500/30 hover:bg-brand-600 transition-all"
              >
                Download App <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/business"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all"
              >
                สำหรับพาร์ทเนอร์ (B2B)
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Hero Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* วงกลมหมุนๆ ด้านหลัง */}
          <div className="absolute w-[400px] h-[400px] border-2 border-dashed border-brand-200 rounded-full animate-[spin_10s_linear_infinite]" />

          {/* Main Hero Image (สมมติว่าเป็นรูป App หรือคนนั่งวีลแชร์ที่ดูมีความสุข) */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* ใส่รูป Home.png หรือ file.svg ที่คุณอัปโหลดมาตรงนี้ */}
            <div className="relative w-80 h-[500px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden flex flex-col">
              <div className="bg-brand-500 h-full w-full flex items-center justify-center text-white p-4 text-center">
                <span className="font-bold text-2xl">
                  GOOSEWAY <br /> APP UI
                </span>
                {/* เปลี่ยนเป็น <Image src="/home.png" ... /> เมื่อพร้อม */}
              </div>
            </div>
          </motion.div>

          {/* Floating Cards (Feature Highlights) */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-20 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
          >
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Accessible Routes</p>
              <p className="font-bold text-sm text-gray-800">เส้นทางปลอดภัย</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-20 -right-5 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
          >
            <div className="bg-blue-100 p-2 rounded-full text-blue-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Verified Places</p>
              <p className="font-bold text-sm text-gray-800">ตรวจสอบแล้ว</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
