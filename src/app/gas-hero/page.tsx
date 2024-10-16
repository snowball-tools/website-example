'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { HeroGasHero } from '@/components/Hero'
import PriceCard from '@/components/PriceCard'
import SampleGasReport from '@/components/SampleGasReport'
import StandaloneHeading from '@/components/StandaloneHeading'
import TestimonialWall from '@/components/TestimonialWall'
import GasIcon from '@/components/icons/Gas'
import InfinityIcon from '@/components/icons/Infinity'
import RocketIcon from '@/components/icons/Rocket'
import SingleScanIcon from '@/components/icons/SingleScan'
import useRedirect from '@/hooks/useRedirect'
import { APP_URL } from '@/utils/constants'
import { trackEvent } from '@/utils/track'
import Image from 'next/image'

const GasHero = () => {
  useRedirect('/sentry')

  const handleCtaClick = (pos: string) => (e: React.MouseEvent<HTMLElement>) => {
    trackEvent(e.currentTarget.innerText, { pos })
  }

  return (
    <main className="hidden">
      <div className="bg-hero-pattern-dark bg-no-repeat bg-center absolute top-[-20px] left-0 right-0 h-[450px] wx-full -z-50"></div>
      <Header
        ctaText="Get a Free Preview"
        ctaUrl={APP_URL}
        handleCtaClick={handleCtaClick('nav')}
      />
      <HeroGasHero />
      <div className="relative">
        <Image
          src="/misc/sample-gas-report-top-line.svg"
          alt="Sample Report Line"
          width={768}
          height={100}
          className="absolute hidden -z-50 md:block md:max-w-2xl md:left-[50%] md:ml-[-336px] md:top-[-154px] lg:max-w-3xl lg:ml-[-384px] lg:top-[-160px]"
        />
        <SampleGasReport />
        <Image
          src="/misc/sample-gas-report-bottom-line.svg"
          alt="Sample Report Line"
          width={768}
          height={100}
          className="hidden absolute -z-50 max-w-xl left-[50%] sm:block sm:bottom-[-161px] sm:ml-[-288px] lg:max-w-3xl lg:bottom-[-213px] lg:ml-[-384px]"
        />
      </div>
      <section className="mt-20 mb-24 px-5 max-w-5xl mx-auto sm:mt-32">
        <header className="flex flex-col items-center gap-2 mb-10 text-3xl font-bold relative">
          <div className="bg-dots-pattern-dark bg-no-repeat bg-center absolute top-[-15px] left-[50%] -ml-[122px] right-0 w-[244px] h-[102px] z-1"></div>
          <div className="mb-6 mt-2 p-5 rounded-2xl inline-block fancy-icon gradient-background">
            <GasIcon className="h-7 w-7" />
          </div>
          <h1>
            Simple <span className="gradient-text">Pricing</span>
          </h1>
        </header>
        <div className="md:flex md:gap-5 justify-center">
          <PriceCard
            icon={<SingleScanIcon className="h-5 w-5 text-gray-500" />}
            planTitle="Hobby"
            price="$0/m"
            trialDuration="7"
            description="1 Repository <br /> 10 scans / month"
            ctaText="Unlock Free w/ Tweet"
          />
          {/* <PriceCard
            icon={<RocketIcon className="h-5 w-5 text-gray-500" strokeWidth="1.2" />}
            planTitle="Growth"
            price="$99/m"
            trialDuration="7"
            description="1 Repository <br /> <strong>Unlimited Scans</strong>"
            ctaText="Get a Free Preview"
          /> */}
          <PriceCard
            icon={<InfinityIcon className="h-5 w-5 text-gray-500" />}
            planTitle="Protocol"
            price="$199/m"
            trialDuration="7"
            description="<strong>Unlimited Repositories</strong> <br /> Unlimited Scans"
            ctaText="Coming Soon!"
            ctaType="disabled"
          />
        </div>
      </section>
      <StandaloneHeading>
        <span className="gradient-text">Web3</span> builders <br /> love Macro
      </StandaloneHeading>
      <TestimonialWall />
      <Footer />
    </main>
  )
}

export default GasHero
