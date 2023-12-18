import { getLayout } from '@/utils/getLayout'
import type { Metadata } from 'next'
import '../../styles/globals.scss'

export const metadata: Metadata = {
  title: 'Macro - Gas Blaster',
  description: 'Make your contracts gas efficient with a one-click Gas Audit for your contracts',
  metadataBase: new URL('https://macro-website.onrender.com'),
  openGraph: {
    title: '0xMacro.com - Gas Blaster',
    description: 'Make your contracts gas efficient with a one-click Gas Audit for your contracts',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return getLayout(children)
}
