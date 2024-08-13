import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Macro - Sentry',
  description:
    'Macro Sentry is a free and instant auditing tool that helps developers identify and fix issues in their smart contracts. It provides features like audit estimates, gas optimizations, potential vulnerability detection, and automatic updates.',
  metadataBase: new URL('https://macro-website.onrender.com'),
  openGraph: {
    title: '0xMacro.com - Sentry',
    description:
      'Macro Sentry is a free and instant auditing tool that helps developers identify and fix issues in their smart contracts. It provides features like audit estimates, gas optimizations, potential vulnerability detection, and automatic updates.',
    type: 'website',
    images: '/opengraph/sentry-preview.png',
  },
  twitter: {
    images: '/opengraph/sentry-preview.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
