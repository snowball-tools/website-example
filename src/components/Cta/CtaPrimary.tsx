import Link from 'next/link';
import style from './Cta.module.scss';

interface CtaProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const CtaPrimary = ({ className, children, href }: CtaProps) => {
  return (
    <div className={`${className} triple-border inline-block`}>
      <Link className={`${style['cta-primary']}`} href={href}>
        <p>{children}</p>
      </Link>
    </div>
  );
};

export default CtaPrimary;
