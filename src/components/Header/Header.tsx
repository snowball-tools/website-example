'use client'

import useTheme from '@/hooks/useTheme'
import { APP_URL } from '@/utils/constants'
import { trackOnClick } from '@/utils/track'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CtaSecondary } from '../Cta'
import Nav from '../Nav'

type HeaderProps = {
  ctaUrl?: string
  ctaText: string
  handleCtaClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Header = ({ ctaUrl, ctaText, handleCtaClick }: HeaderProps) => {
  const currentPath = usePathname()
  const theme = useTheme()

  return (
    <>
      <header className="relative p-2 flex justify-between max-w-5xl mx-auto items-center shadow-sm dark:shadow-2xl dark:bg-darkNavy-500 md:dark:bg-transparent md:dark:shadow-none md:shadow-none md:p-4">
        <div className="flex flex-row-reverse justify-between items-center w-full md:flex-row md:w-auto md:space-x-3 lg:space-x-16">
          <Link href="/">
            <Image
              className="w-[100px]"
              src={theme === 'dark' ? '/macro-dark.svg' : '/macro.svg'}
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
            className="text-electricPurple hidden hover:underline md:text-sm lg:text-base lg:block"
            href={`${APP_URL}/signup`}
            onClick={trackOnClick({ pos: 'nav' })}
          >
            Sign In to the Macro Portal
          </Link>

          <CtaSecondary onClick={handleCtaClick} href={ctaUrl || '/'}>
            {ctaText}
          </CtaSecondary>
        </div>
      </header>
    </>
  )
}

export default Header
