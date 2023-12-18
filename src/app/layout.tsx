import { getLayout } from '@/utils/getLayout'
import type { Metadata } from 'next'
import '../styles/globals.scss'

export const metadata: Metadata = {
  title: 'Macro',
  description:
    'Macro is trusted by multiple leading industry names in Defi and Crypto for Smart Contract auditing.',
  metadataBase: new URL('https://macro-website.onrender.com'),
  openGraph: {
    title: '0xMacro.com',
    description:
      'Macro is trusted by multiple leading industry names in Defi and Crypto for Smart Contract auditing.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return getLayout(children)
}
