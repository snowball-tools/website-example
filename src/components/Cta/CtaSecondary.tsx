import Link from 'next/link'

interface CtaProps {
  className?: string
  children: React.ReactNode
  href: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const CtaSecondary = ({ className, children, href, onClick }: CtaProps) => {
  return (
    <Link
      onClick={onClick}
      className={`inline-block px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-800 text-gray-400 bg-white dark:bg-transparent text-sm font-medium transition ease-in-out duration-300 hover:bg-gray-50 dark:hover:bg-gray-400 dark:hover:bg-opacity-10 ${
        className || ''
      }`}
      href={href}
    >
      <p>{children}</p>
    </Link>
  )
}

export default CtaSecondary
