import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css"; // Keep for manual next.js overhead if needed, but emptied mostly

export const metadata: Metadata = {
  title: "Fuel Plate - Performance On Every Plate | Professional Meal Plans",
  description: "Fuel Plate by MMC - Performance Meal Plans, balanced nutrition, and gym-approved meal programs for muscle gain and fat loss.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme-color="skin-6">
      <head>
        {/* Original Main Style (A build of Tailwind 4.1.12 with custom variables) */}
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        
        {/* Third Party styles */}
        <link rel="stylesheet" type="text/css" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/all.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/flaticon.css" />
        <link rel="stylesheet" type="text/css" href="/css/iconfont.css" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Inter:wght@100..900&family=Poppins:ital,wght@0,100..900;1,100..900&family=Arizonia&family=Playfair+Display&display=swap" 
            rel="stylesheet" 
        />
      </head>
      <body id="bg">
        <div className="page-wraper">
          {children}
        </div>
        
        {/* Scripts from original project */}
        <Script src="/js/gsap.min.js" strategy="lazyOnload" />
        <Script src="/js/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
