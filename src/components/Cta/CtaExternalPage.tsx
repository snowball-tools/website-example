import Link from 'next/link';
import Image from 'next/image';

interface CtaExternalPageProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const CtaExternalPage = ({ className, children, href }: CtaExternalPageProps) => {
  return (
    <Link
      className={`${className} py-3 px-4 rounded-xl border bg-white border-gray-200 text-black flex items-center justify-center gap-2 transition-all hover:bg-gray-50`}
      href={href}
      target="_blank"
    >
      <p>{children}</p>
      <Image src="/icons/external-link.svg" alt="External Link" width={20} height={20} />
    </Link>
  );
};

export default CtaExternalPage;
