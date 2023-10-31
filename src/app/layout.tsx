import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import '../styles/globals.scss';

const dmSams = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Macro',
  description: 'Macro is trusted by multiple leading industry names in Defi and Crypto for Smart Contract auditing.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSams.className}>{children}</body>
    </html>
  );
}
