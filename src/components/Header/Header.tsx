'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CtaSecondary } from '../Cta'
import Nav from '../Nav'

type HeaderProps = {
  handleCtaClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Header = ({ handleCtaClick }: HeaderProps) => {
  const currentPath = usePathname()

  return (
    <>
      <header className="relative p-2 flex justify-between max-w-5xl mx-auto items-center sm:p-4">
        <div className="flex flex-row-reverse justify-between items-center w-full md:flex-row md:w-auto md:space-x-3 lg:space-x-16">
          <Link href="/">
            <Image
              className="w-[100px]"
              src="/macro.svg"
              alt="Macro Logo"
              width={180}
              height={37}
              priority
            />
          </Link>
          <Nav currentPath={currentPath} />
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-7">
          <Link
            className="text-electricPurple hover:underline md:text-sm lg:text-base"
            href="https://swarm.0xmacro.com/signup"
          >
            Sign In to Swarm
          </Link>
          <CtaSecondary onClick={handleCtaClick} href="/">
            Request an Audit
          </CtaSecondary>
        </div>
      </header>
    </>
  )
}

export default Header
