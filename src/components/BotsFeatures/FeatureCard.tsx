import Image from 'next/image'

type FeatureCardProps = {
  icon: string
  title: string
  description: string
  children: React.ReactNode
  collapse?: boolean
}

const FeatureCard = ({ children, icon, title, description, collapse }: FeatureCardProps) => {
  return (
    <section className="rounded-2xl bg-[#f5f5f7] border">
      <header className="mb-6 px-6 pt-6 sm:px-8 sm:pt-8 mb-8 sm:mb-12">
        <div className="flex gap-2 mb-3">
          <Image src={icon} alt="" width={18} height={18} />
          <h2 className="font-bold">{title}</h2>
        </div>
        <p>{description}</p>
      </header>

      <div className={collapse ? '' : 'p-6'}>{children}</div>
    </section>
  )
}

export default FeatureCard
