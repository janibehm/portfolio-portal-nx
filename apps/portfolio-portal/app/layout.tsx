import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PWAInstaller from "./components/PWAInstaller";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Portal",
  description: "A modern portfolio built with Next.js and Sanity CMS",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Portfolio Portal",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Portfolio Portal",
    title: "Portfolio Portal",
    description: "A modern portfolio built with Next.js and Sanity CMS",
  },
  twitter: {
    card: "summary",
    title: "Portfolio Portal",
    description: "A modern portfolio built with Next.js and Sanity CMS",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Matomo Tag Manager */}
        <Script id="matomo-analytics" strategy="afterInteractive">
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
      </head>
      <body className={inter.className}>
        {children}
        <PWAInstaller />
      </body>
    </html>
  );
}
