import Link from 'next/link';
import style from './Cta.module.scss';

interface CtaProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const CtaSecondary = ({ className, children, href }: CtaProps) => {
  return (
    <Link className={`${className} ${style['cta-secondary']}`} href={href}>
      <p>{children}</p>
    </Link>
  );
};

export default CtaSecondary;
