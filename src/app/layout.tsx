import ThemeProvider from '@/components/ThemeProvider'
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
  return (
    <html lang="en">
      <script
        async
        src="https://a.0xmacro.com/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      ></script>
      <body className="v2 antialiased">
        <ThemeProvider defaultTheme="light" attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
