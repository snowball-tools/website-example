import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Audits', href: '/' },
  { name: 'Bots', href: '/bots' },
  { name: 'Audit Library', href: 'https://0xmacro.com/library', newTab: true },
  { name: 'Blog', href: 'https://0xmacro.com/blog/', newTab: true },
]

type NavProps = {
  currentPath: string
}

function getNavItems(currentPath: string) {
  return navigation.map((item) => (
    <Disclosure.Button key={item.name} as="li">
      <Link
        href={item.href}
        className={'block px-3 py-2 text-lg transition-colors duration-300 md:text-sm lg:text-base'}
        aria-current={currentPath === item.href ? 'page' : undefined}
        target={item.newTab ? '_blank' : undefined}
      >
        <span
          className={
            currentPath === item.href ? 'gradient-text font-semibold' : 'text-black dark:text-white'
          }
        >
          {item.name}
        </span>
      </Link>
    </Disclosure.Button>
  ))
}

const Nav = ({ currentPath }: NavProps) => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-10 items-center justify-between">
            <div className="flex items-center md:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:focus:ring-darkNavy-100">
                <span className="sr-only">Menu</span>
                {open ? (
                  <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>

            <div className="hidden md:block">
              <ul className="flex space-x-1 lg:space-x-4">{getNavItems(currentPath)}</ul>
            </div>

            <Disclosure.Panel className="absolute z-10 top-[56px] left-0 right-0 md:hidden">
              <ul className="space-y-1 px-2 pb-3 pt-2 bg-white dark:bg-darkNavy-100 shadow">
                {getNavItems(currentPath)}
              </ul>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default Nav
