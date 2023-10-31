import Image from 'next/image';
import Link from 'next/link';

const renderSocialLinks = () => {
  return (
    <>
      <li>
        <Link href="https://twitter.com/0xMacroSecurity" target="_blank">
          <Image className="" src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
        </Link>
      </li>
      <li>
        <Link href="https://discord.gg/VZ6wXgGSHk" target="_blank">
          <Image className="" src="/icons/discord.svg" alt="Discord" width={24} height={24} />
        </Link>
      </li>
      <li>
        <Link href="https://0xmacro.com/youtube">
          <Image className="" src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
        </Link>
      </li>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="bg-[#8989D30D] px-6 py-6 m-2 rounded-3xl sm:px-12 sm:py-12 lg:max-w-5xl lg:mx-auto lg:mb-10">
        <div className="lg:flex lg:justify-between">
          <div className="mb-10">
            <Link href="/">
              <Image className="mb-6" src="/macro.svg" alt="Macro Logo" width={140} height={37} priority />
            </Link>

            <p className="w-full flex gap-1 font-mono font-light mb-5 text-gray-600 text-sm">
              Helping Web3 builders build.
              <Image className="" src="/icons/hammer.svg" alt="Hammer" width={16} height={16} />
            </p>

            <ul className="hidden sm:flex sm:gap-6">{renderSocialLinks()}</ul>
          </div>

          <div className="flex gap-8 text-base flex-col mb-10 sm:flex-row sm:gap-20">
            <div>
              <h3 className="mb-5 font-semibold uppercase">Company</h3>
              <ul className="flex flex-col gap-4 text-gray-600">
                <li>
                  <Link href="/">Audits</Link>
                </li>
                <li>
                  <Link href="/bots">Bots</Link>
                </li>
                <li>
                  <Link href="https://0xmacro.com/library">Audit Library</Link>
                </li>
                <li>
                  <Link href="https://0xmacro.com/blog/">Blog</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-semibold uppercase">Legal</h3>
              <ul className="flex flex-col gap-4 text-gray-600">
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Cookie Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ul className="flex gap-6 mb-10 sm:hidden">{renderSocialLinks()}</ul>
        <div className="text-gray-600 text-sm">© {new Date().getFullYear()} 0xMacro. All rights reserved.</div>
      </footer>
    </>
  );
};

export default Footer;
