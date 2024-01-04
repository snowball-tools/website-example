import ThemeProvider from '@/components/ThemeProvider'
import type { Metadata } from 'next'
import '../styles/globals.scss'
import { mono, sans } from './fonts'

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
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <script
        async
        src="https://a.0xmacro.com/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      ></script>
      <body className={`${sans.className} antialiased dark:bg-darkNavy-500`}>
        <ThemeProvider defaultTheme="light" attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
