import { getLayout } from '@/utils/getLayout'
import type { Metadata } from 'next'
import '../../styles/globals.scss'

export const metadata: Metadata = {
  title: 'Macro - Gas Blaster',
  description: 'Make your contracts gas efficient. Get a one-click Gas Audit.',
  metadataBase: new URL('https://macro-website.onrender.com'),
  openGraph: {
    title: '0xMacro.com - Gas Blaster',
    description: 'Make your contracts gas efficient. Get a one-click Gas Audit.',
    type: 'website',
    images: '/opengraph/gas-blaster-preview.jpg',
  },
  twitter: {
    images: '/opengraph/gas-blaster-preview.jpg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return getLayout(children)
}
