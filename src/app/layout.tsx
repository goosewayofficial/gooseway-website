// src/app/layout.tsx
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/context/LanguageContext";
import CookieConsent from "@/components/CookieConsent";
import { Metadata } from "next";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

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
      <head>
        <meta name="agd-partner-manual-verification" />
      </head>
      <body className={`${nunito.variable} font-sans`}>
        <LanguageProvider>
          <div className="min-h-screen bg-white">
            <Navbar />
            <main>
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
