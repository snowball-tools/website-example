import Link from 'next/link';
import { DM_Mono } from 'next/font/google';
import style from './Cta.module.scss';

const dmMono = DM_Mono({ weight: ['300', '500'], subsets: ['latin'] });

interface CtaProps {
  children: React.ReactNode;
  href: string;
  type: 'primary' | 'secondary';
}

const Cta = ({ children, href, type }: CtaProps) => {
  const ctaTypeClass = type === 'primary' ? 'primary-cta' : 'secondary-cta';
  return (
    <Link className={`${dmMono.className} ${style[ctaTypeClass]} 'text-gray-200'`} href={href}>
      <p>{children}</p>
    </Link>
  );
};

export default Cta;
