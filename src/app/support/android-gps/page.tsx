"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AndroidGpsSupportPage() {
  const { language } = useLanguage();
  const isTh = language === "th";

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          className="mb-6 text-sm text-gray-500"
          aria-label={isTh ? "เส้นทางการนำทาง" : "Breadcrumb"}
        >
          <Link href="/" className="hover:text-brand-blue transition-colors">
            {isTh ? "หน้าแรก" : "Home"}
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-700">
            {isTh ? "ศูนย์ช่วยเหลือ" : "Support"}
          </span>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-900 font-medium">
            {isTh ? "GPS บน Android" : "Android GPS"}
          </span>
        </nav>

        {/* Article card */}
        <article className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
          <header className="mb-8 pb-8 border-b border-gray-100">
            <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider mb-2">
              {isTh ? "ศูนย์ช่วยเหลือ" : "Help Center"}
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              {isTh
                ? "วิธีแก้ปัญหา GPS บน Android"
                : "Troubleshooting Android GPS Issues"}
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {isTh
                ? "GOOSEWAY ใช้ GPS ของอุปกรณ์เพื่อช่วยนำทางคุณผ่านเส้นทางที่เข้าถึงได้ เช่น ทางลาด ทางข้าม และจุดที่รถเข็นสามารถใช้งานได้ หาก GPS ไม่แม่นยำ การแนะนำเส้นทางอาจคลาดเคลื่อน คู่มือนี้จะช่วยคุณตรวจสอบและแก้ไขปัญหา GPS บนอุปกรณ์ Android"
                : "GOOSEWAY relies on your device's GPS to guide you through accessible routes — curb cuts, ramps, and wheelchair-friendly paths. When GPS accuracy drops, route suggestions can drift. This guide walks you through the most common Android GPS fixes."}
            </p>
          </header>

          {/* Quick checklist */}
          <section className="mb-10 bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span aria-hidden>✅</span>
              {isTh ? "เช็กลิสต์อย่างรวดเร็ว" : "Quick checklist"}
            </h2>
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed list-disc pl-6">
              <li>
                {isTh
                  ? "เปิดใช้งานบริการระบุตำแหน่ง (Location) และให้สิทธิ์ GOOSEWAY"
                  : "Location services are on, and GOOSEWAY has location permission"}
              </li>
              <li>
                {isTh
                  ? "ตั้งค่าโหมดตำแหน่งเป็น “ความแม่นยำสูง” (High accuracy)"
                  : "Location mode is set to High accuracy"}
              </li>
              <li>
                {isTh
                  ? "ปิดโหมดประหยัดแบตเตอรี่สำหรับ GOOSEWAY"
                  : "Battery saver is off (or GOOSEWAY is exempted)"}
              </li>
              <li>
                {isTh
                  ? "อยู่ในพื้นที่โล่งและมองเห็นท้องฟ้าได้"
                  : "You have a clear view of the sky"}
              </li>
              <li>
                {isTh
                  ? "ระบบปฏิบัติการและแอป GOOSEWAY เป็นเวอร์ชันล่าสุด"
                  : "Both Android and GOOSEWAY are up to date"}
              </li>
            </ul>
          </section>

          {/* Steps */}
          <div className="space-y-10 text-gray-700 leading-relaxed">
            {/* Step 1 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold">
                  1
                </span>
                {isTh
                  ? "ตรวจสอบสิทธิ์การเข้าถึงตำแหน่ง"
                  : "Check location permissions"}
              </h2>
              <p className="mb-3">
                {isTh
                  ? "GOOSEWAY ต้องได้รับสิทธิ์การเข้าถึงตำแหน่งเพื่อแสดงเส้นทางและจุดที่เข้าถึงได้รอบตัวคุณ"
                  : "GOOSEWAY needs location permission to show accessible routes and nearby accessibility features."}
              </p>
              <ol className="list-decimal pl-6 space-y-1.5 text-sm">
                <li>
                  {isTh
                    ? "เปิด การตั้งค่า (Settings) บน Android"
                    : "Open Settings on your Android device"}
                </li>
                <li>
                  {isTh
                    ? "ไปที่ แอป (Apps) → GOOSEWAY → สิทธิ์ (Permissions)"
                    : "Go to Apps → GOOSEWAY → Permissions"}
                </li>
                <li>
                  {isTh
                    ? "แตะ ตำแหน่ง (Location) และเลือก “อนุญาตตลอดเวลา” หรือ “อนุญาตขณะใช้งานแอป”"
                    : "Tap Location and choose Allow all the time or Allow only while using the app"}
                </li>
                <li>
                  {isTh
                    ? "เปิดใช้ ความแม่นยำของตำแหน่ง (Use precise location)"
                    : "Make sure Use precise location is enabled"}
                </li>
              </ol>
            </section>

            {/* Step 2 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold">
                  2
                </span>
                {isTh
                  ? "ตั้งค่าโหมดตำแหน่งเป็นความแม่นยำสูง"
                  : "Set location mode to High accuracy"}
              </h2>
              <p className="mb-3">
                {isTh
                  ? "โหมดความแม่นยำสูงจะใช้ GPS, Wi-Fi และเครือข่ายมือถือร่วมกัน ทำให้ระบุตำแหน่งได้แม่นยำกว่าเดิมโดยเฉพาะในเขตเมือง"
                  : "High accuracy mode combines GPS, Wi-Fi, and mobile networks for the most precise positioning — especially useful in dense urban areas."}
              </p>
              <ol className="list-decimal pl-6 space-y-1.5 text-sm">
                <li>
                  {isTh
                    ? "เปิด การตั้งค่า → ตำแหน่ง (Location)"
                    : "Open Settings → Location"}
                </li>
                <li>
                  {isTh
                    ? "แตะ บริการตำแหน่ง (Location services) หรือ โหมด (Mode)"
                    : "Tap Location services or Mode"}
                </li>
                <li>
                  {isTh
                    ? "เลือก ความแม่นยำของตำแหน่งของ Google (Google Location Accuracy) แล้วเปิดใช้งาน"
                    : "Select Google Location Accuracy and toggle it on"}
                </li>
              </ol>
            </section>

            {/* Step 3 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold">
                  3
                </span>
                {isTh
                  ? "ปิดโหมดประหยัดแบตเตอรี่"
                  : "Turn off battery saver for GOOSEWAY"}
              </h2>
              <p className="mb-3">
                {isTh
                  ? "โหมดประหยัดแบตเตอรี่อาจจำกัดการทำงานของ GPS เมื่อแอปทำงานอยู่เบื้องหลัง ทำให้เส้นทางหลุดหรืออัปเดตช้า"
                  : "Battery saver can throttle GPS in the background, causing route drift or slow updates."}
              </p>
              <ol className="list-decimal pl-6 space-y-1.5 text-sm">
                <li>
                  {isTh
                    ? "เปิด การตั้งค่า → แบตเตอรี่ (Battery)"
                    : "Open Settings → Battery"}
                </li>
                <li>
                  {isTh
                    ? "ปิด โหมดประหยัดแบตเตอรี่ (Battery saver) หรือยกเว้น GOOSEWAY จากการปรับให้เหมาะสม"
                    : "Disable Battery saver, or exempt GOOSEWAY from battery optimisation"}
                </li>
                <li>
                  {isTh
                    ? "ไปที่ แอป → GOOSEWAY → แบตเตอรี่ → เลือก ไม่จำกัด (Unrestricted)"
                    : "Go to Apps → GOOSEWAY → Battery and choose Unrestricted"}
                </li>
              </ol>
            </section>

            {/* Step 4 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold">
                  4
                </span>
                {isTh
                  ? "สลับโหมดเครื่องบินเพื่อรีเซ็ตสัญญาณ"
                  : "Toggle airplane mode to reset signals"}
              </h2>
              <p className="mb-3">
                {isTh
                  ? "การเปิด-ปิดโหมดเครื่องบินจะบังคับให้อุปกรณ์เชื่อมต่อ GPS, Wi-Fi และเครือข่ายมือถือใหม่ ซึ่งช่วยแก้ปัญหาตำแหน่งค้างได้บ่อยครั้ง"
                  : "Cycling airplane mode forces your device to reacquire GPS, Wi-Fi, and cellular signals — often the fastest fix for a stuck location."}
              </p>
              <ol className="list-decimal pl-6 space-y-1.5 text-sm">
                <li>
                  {isTh
                    ? "เปิดแผงควบคุมด่วน (ปัดลงจากขอบบนของหน้าจอ)"
                    : "Swipe down from the top of the screen to open Quick Settings"}
                </li>
                <li>
                  {isTh
                    ? "แตะไอคอน โหมดเครื่องบิน (Airplane mode) เพื่อเปิด"
                    : "Tap Airplane mode to turn it on"}
                </li>
                <li>
                  {isTh
                    ? "รอ 10–15 วินาที แล้วแตะอีกครั้งเพื่อปิด"
                    : "Wait 10–15 seconds, then tap again to turn it off"}
                </li>
              </ol>
            </section>

            {/* Step 5 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold">
                  5
                </span>
                {isTh
                  ? "รีสตาร์ทอุปกรณ์ของคุณ"
                  : "Restart your device"}
              </h2>
              <p>
                {isTh
                  ? "การปิดและเปิดเครื่องใหม่จะล้างข้อมูล GPS ที่ค้างอยู่ในหน่วยความจำและเริ่มต้นการค้นหาดาวเทียมใหม่ทั้งหมด เป็นวิธีที่ง่ายแต่ได้ผลดีอย่างน่าประหลาดใจ"
                  : "A full restart clears stale GPS data from memory and forces a fresh satellite acquisition. Simple, but it works more often than you'd expect."}
              </p>
            </section>

            {/* Step 6 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold">
                  6
                </span>
                {isTh
                  ? "ออกสู่พื้นที่โล่ง"
                  : "Step outside, away from obstructions"}
              </h2>
              <p>
                {isTh
                  ? "อาคารสูง อุโมงค์ ที่จอดรถใต้ดิน หรือต้นไม้หนาแน่นสามารถบล็อกสัญญาณดาวเทียมได้ ลองออกไปยังพื้นที่โล่งที่มองเห็นท้องฟ้าได้ชัดเจน แล้วรอประมาณ 30–60 วินาทีเพื่อให้ GPS ระบุตำแหน่งใหม่"
                  : "Tall buildings, tunnels, underground parking, and dense tree cover all block satellite signals. Move to an open area with a clear view of the sky and give GPS 30–60 seconds to reacquire your position."}
              </p>
            </section>

            {/* Step 7 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold">
                  7
                </span>
                {isTh
                  ? "ล้างแคชและข้อมูลของแอป GOOSEWAY"
                  : "Clear the GOOSEWAY app cache"}
              </h2>
              <p className="mb-3">
                {isTh
                  ? "หากปัญหา GPS เกิดเฉพาะกับ GOOSEWAY การล้างแคชอาจช่วยแก้ไขข้อมูลตำแหน่งที่เสียหายได้ การล้างแคชจะไม่ลบบัญชีของคุณ"
                  : "If GPS issues only happen inside GOOSEWAY, clearing the cache can resolve corrupted location data. This will not delete your account."}
              </p>
              <ol className="list-decimal pl-6 space-y-1.5 text-sm">
                <li>
                  {isTh
                    ? "เปิด การตั้งค่า → แอป → GOOSEWAY"
                    : "Open Settings → Apps → GOOSEWAY"}
                </li>
                <li>
                  {isTh
                    ? "แตะ ที่จัดเก็บ (Storage)"
                    : "Tap Storage"}
                </li>
                <li>
                  {isTh
                    ? "แตะ ล้างแคช (Clear cache)"
                    : "Tap Clear cache"}
                </li>
              </ol>
            </section>

            {/* Step 8 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold">
                  8
                </span>
                {isTh
                  ? "อัปเดต Android และแอป GOOSEWAY"
                  : "Update Android and GOOSEWAY"}
              </h2>
              <p>
                {isTh
                  ? "ระบบปฏิบัติการและแอปเวอร์ชันเก่ามักมีบั๊กเกี่ยวกับ GPS ที่ได้รับการแก้ไขในเวอร์ชันใหม่ ตรวจสอบการอัปเดต Android ใน การตั้งค่า → เกี่ยวกับโทรศัพท์ → อัปเดตซอฟต์แวร์ และอัปเดต GOOSEWAY ผ่าน Google Play"
                  : "Outdated Android versions and apps often contain GPS bugs that newer releases fix. Check for Android updates under Settings → About phone → Software update, and update GOOSEWAY from Google Play."}
              </p>
            </section>

            {/* Step 9 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold">
                  9
                </span>
                {isTh
                  ? "ติดตั้ง GOOSEWAY ใหม่"
                  : "Reinstall GOOSEWAY"}
              </h2>
              <p>
                {isTh
                  ? "ถ้าวิธีอื่นไม่ได้ผล ให้ลบและติดตั้งแอปใหม่จาก Google Play การติดตั้งใหม่จะรีเซ็ตสิทธิ์การเข้าถึงและไฟล์ข้อมูลภายในทั้งหมด"
                  : "If nothing else works, uninstall GOOSEWAY and reinstall it from Google Play. A fresh install resets all permissions and internal data files."}
              </p>
            </section>
          </div>

          {/* Accessibility note */}
          <aside className="mt-12 bg-yellow-50 border-l-4 border-brand-yellow rounded-r-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span aria-hidden>♿</span>
              {isTh
                ? "ทำไม GPS ที่แม่นยำจึงสำคัญสำหรับผู้ใช้รถเข็น"
                : "Why precise GPS matters for wheelchair users"}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {isTh
                ? "ในขณะที่แอปนำทางทั่วไปอาจคลาดเคลื่อนได้ไม่กี่เมตรโดยไม่กระทบผู้ใช้ แต่สำหรับผู้ใช้รถเข็น ความคลาดเคลื่อนเพียงเล็กน้อยอาจทำให้พลาดทางลาดหรือทางข้ามที่เข้าถึงได้ GOOSEWAY ทำงานได้ดีที่สุดเมื่อ GPS ของคุณมีความแม่นยำในระดับเดียวกับการนำทางในเลนถนน"
                : "A few meters of GPS drift means little to most map apps. For wheelchair users, that same drift can be the difference between landing on a curb cut and getting stranded on a curb. GOOSEWAY works best when your GPS is accurate to lane-level precision."}
            </p>
          </aside>

          {/* Still need help */}
          <section className="mt-10 pt-8 border-t border-gray-100 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {isTh ? "ยังแก้ปัญหาไม่ได้?" : "Still having trouble?"}
            </h2>
            <p className="text-gray-600 mb-5 text-sm">
              {isTh
                ? "ทีมงานของเรายินดีช่วยเหลือ บอกรายละเอียดอุปกรณ์ เวอร์ชัน Android และปัญหาที่พบ"
                : "Our team is happy to help. Let us know your device model, Android version, and what you're experiencing."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              {isTh ? "ติดต่อฝ่ายสนับสนุน" : "Contact Support"}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </section>
        </article>
      </div>
    </div>
  );
}
