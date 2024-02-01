import Link from 'next/link'
import DiscordIcon from '../icons/Discord'
import XTwitterIcon from '../icons/TwitterX'

const Footer = () => {
  return (
    <>
      <footer className="mt-8 py-4 mx-auto max-w-xl font-ui">
        <div className="py-4 px-5 xs:px-9 flex items-center justify-between border-t border-dotted dark:border-transparent">
          <div className="text-neutral-400 dark:text-dusk-800 text-xs font-medium">
            © {new Date().getFullYear()} 0xMacro. All rights reserved.
          </div>

          <ul className="flex gap-3">
            <li>
              <Link href="https://twitter.com/0xMacroSecurity" target="_blank">
                <XTwitterIcon className="h-4 w-4 text-neutral-400 dark:text-dusk-800 transition duration-300 hover:text-black dark:hover:text-dusk-400" />
              </Link>
            </li>
            <li>
              <Link href="https://discord.gg/VZ6wXgGSHk" target="_blank">
                <DiscordIcon className="h-4 w-4 text-neutral-400 dark:text-dusk-800 transition duration-300 hover:text-black dark:hover:text-dusk-400" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
