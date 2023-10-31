import Link from 'next/link';
import style from './Cta.module.scss';
import Image from 'next/image';

interface CtaProps {
  className?: string;
  children: React.ReactNode;
  href: string;
  icon?: string;
}

const CtaPrimary = ({ className, children, href, icon }: CtaProps) => {
  return (
    <div className={`${className} triple-border inline-block`}>
      <Link className={`${style['cta-primary']} ${icon ? '!flex gap-2' : ''}`} href={href}>
        {icon && <Image src={icon} alt="" width={20} height={20} />}
        <p>{children}</p>
      </Link>
    </div>
  );
};

export default CtaPrimary;
