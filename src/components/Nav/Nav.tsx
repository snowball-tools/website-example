'use client'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Audits', href: '/', current: true },
  { name: 'Bots', href: '/bots', current: false },
  { name: 'Audit Library', href: 'https://0xmacro.com/library', current: false, newTab: true },
  { name: 'Blog', href: 'https://0xmacro.com/blog/', current: false, newTab: true },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function getNavItems() {
  return navigation.map((item) => (
    <Disclosure.Button key={item.name} as="li">
      <Link
        href={item.href}
        className={classNames(
          item.current ? '' : 'text-black',
          'block px-3 py-2 text-lg hover:text-black transition-colors duration-300 md:text-sm lg:text-base',
        )}
        aria-current={item.current ? 'page' : undefined}
        target={item.newTab ? '_blank' : undefined}
      >
        {item.name}
      </Link>
    </Disclosure.Button>
  ))
}

const Nav = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-10 items-center justify-between">
            <div className="flex items-center md:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Menu</span>
                {open ? (
                  <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>

            <div className="hidden md:block">
              <ul className="flex space-x-1 lg:space-x-4">{getNavItems()}</ul>
            </div>

            <Disclosure.Panel className="absolute z-10 top-[58px] left-0 right-0 md:hidden">
              <ul className="space-y-1 px-2 pb-3 pt-2 bg-white shadow">{getNavItems()}</ul>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default Nav
