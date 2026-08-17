import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DNV ARC — Data Neural Vision',
  description:
    'DNV ARC connects purpose-built SaaS products across cinema analytics, personal finance, and professional education — lightweight, affordable, and impactful.',
  keywords: ['DNV ARC', 'Data Neural Vision', 'SaaS', 'CINEQ', 'Data Rhino', 'Noteek', 'Dunly', 'Conteak'],
  authors: [{ name: 'DNV ARC', url: 'https://www.dnvarc.com' }],
  openGraph: {
    title: 'DNV ARC — Data Neural Vision',
    description: 'Building the Arc of Modern Innovation.',
    url: 'https://www.dnvarc.com',
    siteName: 'DNV ARC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DNV ARC — Data Neural Vision',
    description: 'Building the Arc of Modern Innovation.',
  },
  verification: {
    other: {
      'facebook-domain-verification': 'jh109bnma3kdpyquoibj6jdar6vlv2',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body className="bg-bg text-[#e8edf5] font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
