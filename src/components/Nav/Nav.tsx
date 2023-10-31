'use client';

import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Audits', href: '#', current: true },
  { name: 'Bots', href: '#', current: false },
  { name: 'Audit Library', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function getNavItems() {
  return navigation.map((item) => (
    <Disclosure.Button key={item.name} as="li">
      <Link
        href={item.href}
        className={classNames(
          item.current ? '' : 'text-black',
          'block px-3 py-2 text-lg sm:text-base hover:text-black transition-colors duration-300'
        )}
        aria-current={item.current ? 'page' : undefined}
      >
        {item.name}
      </Link>
    </Disclosure.Button>
  ));
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
              <ul className="flex space-x-4">{getNavItems()}</ul>
            </div>

            <Disclosure.Panel className="md:hidden absolute z-10 top-[58px] left-0 right-0">
              <ul className="space-y-1 px-2 pb-3 pt-2 bg-white shadow">{getNavItems()}</ul>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
