import type { Metadata } from 'next';
import { sans, mono } from './fonts';
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Macro',
  description: 'Macro is trusted by multiple leading industry names in Defi and Crypto for Smart Contract auditing.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className={`${sans.className} antialiased`}>{children}</body>
    </html>
  );
}
