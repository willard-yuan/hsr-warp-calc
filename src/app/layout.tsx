import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Links from "@/components/Links";
import { Analytics } from "@vercel/analytics/react";

const font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HSR Warp Calculator - Honkai Star Rail, Zenless Zone Zero, Genshin Impact",
  description:
    "Calculate Your Chances of Getting Characters and Weapons in Honkai Star Rail, Zenless Zone Zero, and Genshin Impact with Our Advanced Warp Calculator.",
  alternates: {
    canonical: "https://hsr-warp-calculator.pro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2934132820353961"
          crossOrigin="anonymous"
        ></Script>
        <Analytics />
        {children}
        <Links />
      </body>
    </html>
  );
}
