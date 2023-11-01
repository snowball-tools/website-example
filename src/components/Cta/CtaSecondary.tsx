import Link from 'next/link';
import style from './Cta.module.scss';

interface CtaProps {
  className?: string;
  children: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const CtaSecondary = ({ className, children, href, onClick }: CtaProps) => {
  return (
    <Link onClick={onClick} className={`${className} ${style['cta-secondary']}`} href={href}>
      <p>{children}</p>
    </Link>
  );
};

export default CtaSecondary;
