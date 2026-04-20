// src/app/layout.tsx
import { Poppins, Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/context/LanguageContext";
import CookieConsent from "@/components/CookieConsent";
import { Metadata } from "next";
import { ModalProvider } from "@/context/ModalContext";
import ComingSoonModal from "@/components/modals/ComingSoonModal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "GOOSEWAY",
  description: "Your Goose, Your Guide",
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
      <head>
        <meta name="agd-partner-manual-verification" />
      </head>
      <body
        className="font-sans"
        style={{
          "--font-poppins": poppins.style.fontFamily,
          "--font-prompt": prompt.style.fontFamily,
        } as React.CSSProperties}
      >
        <LanguageProvider>
          <ModalProvider>
            <div className="min-h-screen bg-white">
              <Navbar />
              <main>
                {children}
              </main>
              <Footer />
            </div>
            <CookieConsent />
            <ComingSoonModal />
          </ModalProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
