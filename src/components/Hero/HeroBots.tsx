import Link from 'next/link';
import Image from 'next/image';
import { CtaPrimary } from '../Cta';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const HeroBots = () => {
  return (
    <div className="mt-8 flex flex-col">
      <div className="text-center mb-5 sm:mb-3">
        <Link
          href="https://swarm.0xmacro.com/"
          className="border rounded-3xl py-1 px-5 inline-block bg-white hover:bg-gray-100 transition-all duration-500"
        >
          <div className="flex gap-2">
            <Image src="/icons/shooting-star.svg" alt="" width={18} height={18} />
            <p>Try a Scan for Free!</p>
          </div>
        </Link>
      </div>
      <h1 className="text-center font-bold text-2xl text-[#05051e] leading-10 sm:text-5xl sm:leading-[70.5px]">
        Vulnerability Detection <br /> on Demand
      </h1>
      <p className="text-center mt-6">Using our Swarm of 300+ vulnerability detection bots.</p>
      <div className="flex flex-col mx-auto mt-10 items-center gap-6 sm:flex-row">
        <CtaPrimary className="flex gap-2" href="https://swarm.0xmacro.com/" icon="/icons/github.svg" border>
          Try it with a Free Scan
        </CtaPrimary>
        <Link className="flex gap-2 font-semibold items-center hover:underline" href="https://swarm.0xmacro.com/">
          Check Pricing
          <ArrowUpRightIcon className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

export default HeroBots;
