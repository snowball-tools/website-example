import Image from 'next/image';
import Nav from '../Nav';
import style from './Header.module.scss';
import Cta from '../Cta';

const Header = () => {
  return (
    <>
      <header className="relative p-2 sm:p-4 flex flex-row-reverse md:flex-row justify-between max-w-7xl mx-auto">
        <Image className={style.logo} src="/macro.svg" alt="Macro Logo" width={180} height={37} priority />
        <Nav />
        <div className="hidden md:block">
          <Cta href="#" type="secondary">
            Request an Audit
          </Cta>
        </div>
      </header>
    </>
  );
};

export default Header;
