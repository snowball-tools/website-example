import Link from 'next/link'

const navigation = [
  { name: 'About', href: '/' },
  { name: 'Audits', href: '/audits' },
  { name: 'Team', href: '/team' },
  { name: 'Writing', href: '/writing' },
  // { name: 'Portal', href: 'https://portal.0xmacro.com', newTab: true },
  { name: 'Gas Hero', href: '/gas-blaster' },
  // { name: 'Audit Library', href: 'https://0xmacro.com/library', newTab: true },
  // { name: 'Blog', href: 'https://0xmacro.com/blog/', newTab: true },
]

type NavProps = {
  currentPath: string
}

function getNavItems(currentPath: string) {
  return navigation.map((item) => (
    <Link
      href={item.href}
      key={item.href}
      className={`block p-3 transition-colors duration-300 lowercase  font-ui font-medium ${
        currentPath === item.href
          ? 'text-black dark:text-dusk-200'
          : 'text-neutral-400 hover:text-black dark:text-dusk-800 dark:hover:text-dusk-300'
      }`}
      aria-current={currentPath === item.href ? 'page' : undefined}
      target={item.newTab ? '_blank' : undefined}
    >
      {item.name}
    </Link>
  ))
}

const Nav = ({ currentPath }: NavProps) => {
  return (
    <ul className="px-6 w-72 xs:w-auto mx-auto flex flex-wrap justify-center xs:justify-between">
      {getNavItems(currentPath)}
    </ul>
  )
}

export default Nav
