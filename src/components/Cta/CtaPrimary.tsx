import Image from 'next/image'
import Link from 'next/link'
import style from './Cta.module.scss'

interface CtaProps {
  className?: string
  children: React.ReactNode
  href: string
  icon?: string
  border?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const CtaPrimary = ({ className, children, href, icon, border, onClick }: CtaProps) => {
  return (
    <div className={`${className} ${border && 'triple-border'}`}>
      <Link
        onClick={onClick}
        className={`${style['cta-primary']} w-full ${icon ? '!flex gap-2' : ''}`}
        href={href}
      >
        {icon && <Image src={icon} alt="" width={20} height={20} />}
        <p>{children}</p>
      </Link>
    </div>
  )
}

export default CtaPrimary
