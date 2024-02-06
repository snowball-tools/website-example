import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Macro - Gas Hero',
  description: 'Make your contracts gas efficient. Get a one-click Gas Audit.',
  metadataBase: new URL('https://macro-website.onrender.com'),
  openGraph: {
    title: '0xMacro.com - Gas Hero',
    description: 'Make your contracts gas efficient. Get a one-click Gas Audit.',
    type: 'website',
    images: '/opengraph/gas-hero-preview.jpg',
  },
  twitter: {
    images: '/opengraph/gas-hero-preview.jpg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
