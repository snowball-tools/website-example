'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Nav from '../Nav'

type Props = {}

const Header = ({}: Props) => {
  const currentPath = usePathname()

  return (
    <>
      <div className="dark:bg-night-900">
        <header className=" py-4 pt-10 max-w-xl mx-auto">
          <div className="flex justify-center">
            <Link href="/">
              <Image
                className="fade-in w-[7.5rem] block dark:hidden"
                src="/macro.svg"
                alt="Macro Logo"
                width={180}
                height={37}
                priority
              />
              <Image
                className="fade-in w-[7.5rem] hidden dark:block"
                src="/macro-dark.svg"
                alt="Macro Logo"
                width={180}
                height={37}
                priority
              />
            </Link>
          </div>
          <div className="mt-6 border-t border-neutral-200 dark:border-transparent border-dotted"></div>
          <Nav currentPath={currentPath} />
          <div className="border-t border-neutral-200 dark:border-transparent border-dotted"></div>
        </header>
      </div>
    </>
  )
}

export default Header
