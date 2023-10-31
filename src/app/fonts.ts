import { DM_Sans, DM_Mono } from 'next/font/google';

export const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
export const mono = DM_Mono({ weight: ['300', '500'], subsets: ['latin'], variable: '--font-mono' });
