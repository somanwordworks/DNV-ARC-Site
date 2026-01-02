import "./../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";

/* 🔹 Scroll Reveal (client-only, safe global mount) */
import ScrollReveal from "@/components/ScrollReveal";

/* 🔹 Floating WhatsApp Button (client-only, no SSR) */
const WhatsAppFloat = dynamic(
    () => import("@/components/WhatsAppFloat"),
    { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
    title: "DNV ARC — Empowering the Arc of Innovation",
    description:
        "DNV ARC is the parent collective connecting innovation across entertainment, analytics, and education.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className + " bg-white text-slate-900"}>
                {/* Global scroll-based reveal animation */}
                <ScrollReveal />

                {children}

                {/* Floating WhatsApp contact button */}
                <WhatsAppFloat />
            </body>
        </html>
    );
}
