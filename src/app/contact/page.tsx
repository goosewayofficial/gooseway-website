// src/app/contact/page.tsx
"use client";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import ContactFAQ from "@/components/contact/ContactFAQ";

export default function ContactPage() {
  return (
    <div>
      <ContactHero scrollY={0} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo />
          <div className="min-h-[400px] rounded-3xl overflow-hidden shadow-lg">
            <ContactMap />
          </div>
        </div>
      </div>

      <ContactFAQ />
    </div>
  );
}
