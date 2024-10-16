import { APP_URL } from '@/utils/constants'
import { trackOnClick } from '@/utils/track'
import Link from 'next/link'
import { CtaPrimary } from '../Cta'

type PriceCardProps = {
  icon: JSX.Element
  planTitle: string
  price: string
  trialDuration: string
  description: string
  ctaText: string
  ctaType?: string
}

const PriceCard = ({
  icon,
  planTitle,
  price,
  description,
  ctaText,
  ctaType = 'primary',
}: PriceCardProps) => {
  return (
    <div className="border dark:bg-darkNavy-100 dark:border-gray-800 rounded-2xl px-7 py-7 mb-6 text-center max-w-[280px] mx-auto md:py-4 md:px-7 md:mx-0 md:mb-0 md:w-1/3 lg:p-6">
      <div className="flex flex-col items-center gap-2 mt-2">
        {icon}
        <p className="text-gray-500 block uppercase">{planTitle}</p>
      </div>
      <h1 className="mt-5 font-bold text-4xl">{price}</h1>
      <p
        className="text-gray-500 block mt-7 leading-8 md:text-sm md:leading-7 lg:text-base lg:leading-8"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      {ctaType === 'primary' && (
        <CtaPrimary
          eventPos={'pricing'}
          className="mt-5 text-sm md:text-xs lg:text-sm"
          href={APP_URL}
        >
          {ctaText}
        </CtaPrimary>
      )}
      {ctaType === 'secondary' && (
        <Link
          className="mt-5 text-sm px-6 py-3.5 rounded-lg text-gray-200 font-bold border w-full block border-gray-500 hover:bg-darkNavy-500 transition duration-300 ease-in-out hover:scale-105 md:text-xs lg:text-sm"
          href={APP_URL}
          onClick={trackOnClick({ pos: 'pricing' })}
        >
          {ctaText}
        </Link>
      )}
      {ctaType === 'disabled' && (
        <button
          disabled
          className="mt-5 text-sm px-6 py-3.5 rounded-lg text-gray-500 font-bold border w-full border-gray-700 md:text-xs lg:text-sm"
        >
          {ctaText}
        </button>
      )}
    </div>
  )
}

export default PriceCard
