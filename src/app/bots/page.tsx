'use client'

import BotsFeatures from '@/components/BotsFeatures'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { HeroBots } from '@/components/Hero'
import PriceTable from '@/components/PriceTable'
import StandaloneHeading from '@/components/StandaloneHeading'
import TestimonialWall from '@/components/TestimonialWall'
import useRedirect from '@/hooks/useRedirect'

export default function Bots() {
  useRedirect('/gas-blaster')

  return (
    <main className="relative">
      <div className="bg-hero-pattern bg-no-repeat bg-center absolute top-0 left-0 right-0 h-[450px] wx-full -z-50"></div>
      <Header />
      <HeroBots />
      <BotsFeatures />
      <PriceTable />
      <StandaloneHeading>
        <span className="gradient-text">Web3</span> builders <br /> love Macro
      </StandaloneHeading>
      <TestimonialWall />
      <Footer />
    </main>
  )
}
