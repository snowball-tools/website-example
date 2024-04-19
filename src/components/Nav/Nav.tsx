import Link from 'next/link'

const navigation: { name: string; href: string; newTab?: boolean }[] = [
  { name: 'About', href: '/' },
  { name: 'Audits', href: '/audits' },
  { name: 'Team', href: '/team' },
  { name: 'Writing', href: '/writing' },
  { name: 'Fellowship', href: '/fellowship' },
  { name: 'Sentry', href: '/sentry' },
]

type NavProps = {
  currentPath: string
}

function getNavItems(currentPath: string) {
  return navigation.map((item) => (
    <Link
      href={item.href}
      key={item.href}
      className={`group block p-3 transition-colors duration-300 lowercase font-ui font-medium ${
        currentPath === item.href
          ? 'text-black dark:text-dusk-200'
          : 'text-neutral-400 hover:text-black dark:text-dusk-800 dark:hover:text-dusk-300'
      }`}
      aria-current={currentPath === item.href ? 'page' : undefined}
      target={item.newTab ? '_blank' : undefined}
    >
      {item.name}
      {item.name === 'Sentry' && (
        <span className="inline-block text-[10px] relative top-[-7px] left-[6px] p-[3px] rounded-sm leading-[10px] bg-dusk-200 group-hover:bg-dusk-300 dark:bg-white/60 dark:group-hover:bg-white text-black group-hover:text-black transition duration-300">
          new
        </span>
      )}
    </Link>
  ))
}

const Nav = ({ currentPath }: NavProps) => {
  return (
    <ul className="w-72 xs:w-auto mx-auto flex flex-wrap justify-center xs:justify-between sm:px-6">
      {getNavItems(currentPath)}
    </ul>
  )
}

export default Nav
