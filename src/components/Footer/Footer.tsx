import Image from 'next/image'
import Link from 'next/link'
import DiscordIcon from '../icons/Discord'
import HammerIcon from '../icons/Hammer'
import TwitterIcon from '../icons/Twitter'
import YouTubeIcon from '../icons/YouTube'

const renderSocialLinks = () => {
  return (
    <>
      <li>
        <Link href="https://twitter.com/0xMacroSecurity" target="_blank">
          <TwitterIcon className="h-7 w-7 opacity-80 text-gray-700 dark:text-white transition hover:opacity-100" />
        </Link>
      </li>
      <li>
        <Link href="https://discord.gg/VZ6wXgGSHk" target="_blank">
          <DiscordIcon className="h-7 w-7 opacity-80 text-gray-700 dark:text-white transition hover:opacity-100" />
        </Link>
      </li>
      <li>
        <Link href="https://0xmacro.com/youtube" target="_blank">
          <YouTubeIcon className="h-7 w-7 opacity-80 text-gray-700 dark:text-white transition hover:opacity-100" />
        </Link>
      </li>
    </>
  )
}

const Footer = () => {
  return (
    <>
      <footer className="bg-[#8989D30D] px-6 py-6 m-2 rounded-3xl sm:px-12 sm:py-12 lg:max-w-5xl lg:mx-auto lg:mb-10">
        <div className="lg:flex lg:justify-between">
          <div className="mb-10">
            <Link href="/">
              <Image
                className="mb-6"
                src="/macro.svg"
                alt="Macro Logo"
                width={140}
                height={37}
                priority
              />
            </Link>

            <p className="w-full flex gap-1 font-mono font-light mb-5 text-gray-600 text-sm">
              Helping Web3 builders build.
              <HammerIcon className="h-4 w-4 mt-[2px]" />
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
                  <Link href="https://0xmacro.com/library" target="_blank">
                    Audit Library
                  </Link>
                </li>
                <li>
                  <Link href="https://0xmacro.com/blog/" target="_blank">
                    Blog
                  </Link>
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
        <div className="text-gray-600 text-sm">
          © {new Date().getFullYear()} 0xMacro. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer
