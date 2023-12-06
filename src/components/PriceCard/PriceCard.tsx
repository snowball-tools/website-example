import { CtaPrimary } from '../Cta'

type PriceCardProps = {
  price: string
  trialDuration: string
  icon: JSX.Element
  description: string
}

const PriceCard = ({ price, trialDuration, icon, description }: PriceCardProps) => {
  return (
    <div className="border dark:bg-darkNavy-100 dark:border-gray-800 rounded-2xl px-2 py-7 mb-6 text-center max-w-[320px] mx-auto sm:p-6 md:mx-0 sm:w-1/2 sm:mb-0">
      <p className="text-green-400 border border-green-400 rounded-md inline-block px-3 py-0.5 text-xs mb-7">
        &#x2022; {trialDuration}-day Free Trial
      </p>
      <h1 className="font-bold text-4xl mb-5">{price}</h1>

      <div className="mb-7 flex flex-col items-center gap-2">
        {icon}
        <p className="text-gray-500 block" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>

      <CtaPrimary className="flex gap-2 justify-center text-sm" href="https://swarm.0xmacro.com/">
        Get a Free Preview
      </CtaPrimary>
    </div>
  )
}

export default PriceCard
