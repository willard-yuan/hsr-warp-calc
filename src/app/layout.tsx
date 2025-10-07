import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Links from "@/components/Links";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/contexts/ThemeContext";

const font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HSR Warp Calculator - Honkai Star Rail, Zenless Zone Zero, Genshin Impact",
  description:
    "Calculate Your Chances of Getting Characters and Weapons in Honkai Star Rail, Zenless Zone Zero, and Genshin Impact with Our Advanced Warp Calculator.",
  keywords: [
    "HSR Warp Calculator",
    "Honkai Star Rail Calculator",
    "Zenless Zone Zero Calculator", 
    "Genshin Impact Calculator"
  ],
  alternates: {
    canonical: "https://hsr-warp-calculator.pro",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RBP94WC1RV"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RBP94WC1RV');
          `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2934132820353961"
          crossOrigin="anonymous"
        ></Script>
        <Analytics />
        <ThemeProvider>
          {children}
          <Links />
        </ThemeProvider>
      </body>
    </html>
  );
}
