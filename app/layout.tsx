import "./../styles/globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import ScrollReveal from "@/components/ScrollReveal";

const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat"), { ssr: false });

export const metadata: Metadata = {
  title: "DNV ARC — Data Neural Vision",
  description:
    "DNV ARC is a group company connecting purpose-built SaaS products across cinema analytics, personal finance, and professional education.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });
        `}</Script>
      </head>
      <body className="bg-white text-ink font-body">
        <ScrollReveal />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
