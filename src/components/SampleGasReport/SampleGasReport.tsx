import Image from 'next/image'
import PulseIcon from '../icons/Pulse'

const SampleGasReport = () => {
  return (
    <div className="mx-3 max-w-full mt-20 relative dark:bg-darkNavy-300 border dark:border-gray-800 rounded-lg lg:mx-auto lg:max-w-4xl">
      <Image
        src="/misc/sample-gas-report-arrow.svg"
        alt="Sample Report Arrow"
        width={120}
        height={34}
        className="absolute top-[-38px] right-[20px] md:right-[50px] lg:right-[80px] lg:w-[120px]"
      />

      <div className="p-5 pb-0 overflow-x-scroll">
        <Image
          src="/img/sample-gas-report.svg"
          alt="Sample Gas Report"
          width={1000}
          height={1000}
          className="max-w-xl block sm:max-w-full"
        />
      </div>
      <div
        className="p-5 border-t border-t-gray-900 rounded-b-lg"
        style={{
          background: 'var(--gradient, linear-gradient(180deg, #101029 0%, #1F203A 100%)',
        }}
      >
        <div className="flex gap-2 items-center justify-center mb-2">
          <PulseIcon className="h-5 w-5" />
          <p>Gas optimizations</p>
        </div>
        <p className="text-center text-gray-500 text-xs sm:text-sm">
          Save on gas fees for you and your users.
        </p>
      </div>
    </div>
  )
}

export default SampleGasReport
