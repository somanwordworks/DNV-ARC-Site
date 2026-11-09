import type { Metadata } from 'next';
import { Michroma, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const michroma = Michroma({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dnvarc.com'),
  title: 'DNV ARC | Data Neural Vision',
  description:
    'DNV ARC is a product company. Five focused products for cinema, cloud, money, learning and privacy: CINEQ, Data Rhino, Dunly, Noteek and Conteak.',
  keywords: ['DNV ARC', 'Data Neural Vision', 'SaaS', 'CINEQ', 'Data Rhino', 'Noteek', 'Dunly', 'Conteak'],
  authors: [{ name: 'DNV ARC', url: 'https://www.dnvarc.com' }],
  openGraph: {
    title: 'DNV ARC | Data Neural Vision',
    description: 'A product company. Five products, one arc.',
    url: 'https://www.dnvarc.com',
    siteName: 'DNV ARC',
    type: 'website',
    images: [{ url: '/hero/arc-poster.jpg', width: 1920, height: 1080 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DNV ARC | Data Neural Vision',
    description: 'Data in. Clarity out. Five products, one arc.',
  },
  verification: {
    other: {
      'facebook-domain-verification': 'jh109bnma3kdpyquoibj6jdar6vlv2',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${michroma.variable} ${manrope.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
