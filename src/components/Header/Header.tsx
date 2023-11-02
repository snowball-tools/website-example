import Link from 'next/link';
import Image from 'next/image';
import Nav from '../Nav';
import { CtaSecondary } from '../Cta';

type HeaderProps = {
  handleCtaClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

const Header = ({ handleCtaClick }: HeaderProps) => {
  return (
    <>
      <header className="relative p-2 sm:p-4 flex flex-row-reverse md:flex-row justify-between max-w-5xl mx-auto items-center">
        <Link href="/">
          <Image className="w-[100px]" src="/macro.svg" alt="Macro Logo" width={180} height={37} priority />
        </Link>
        <Nav />
        <div className="hidden md:block">
          <CtaSecondary onClick={handleCtaClick} href="/">
            Request an Audit
          </CtaSecondary>
        </div>
      </header>
    </>
  );
};

export default Header;
