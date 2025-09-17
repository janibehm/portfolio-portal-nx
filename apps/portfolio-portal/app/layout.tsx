import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundImage from "./components/BackgroundImage";
import Clouds from "./components/Clouds";
import PWAInstaller from "./components/PWAInstaller";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Portal",
  description: "Modern portfolio website showcasing projects and skills",
  manifest: "/manifest.json",
  robots: {
    index: true,      
    follow: true,      
    googleBot: {
      index: true,
      follow: true,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Portfolio Portal",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192x192.png",
  },
  openGraph: {
    title: "Portfolio Portal",
    description: "Modern portfolio website showcasing projects and skills",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Portal",
    description: "Modern portfolio website showcasing projects and skills",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BackgroundImage />
        <Clouds />
        <PWAInstaller />
        {children}
        <SpeedInsights />
        <Script id="matomo-analytics" strategy="beforeInteractive">
          {`
            var _mtm = window._mtm = window._mtm || [];
            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
            (function() {
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; 
              g.src='https://cdn.matomo.cloud/portfolioportalnxvercelapp.matomo.cloud/container_8f8LInAK.js'; 
              s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
