'use client'

import DetailAuditReportsTab from '@/components/DetailAuditReportsTab'
import Footer from '@/components/Footer'
import { HeroHome } from '@/components/Hero'
import RequestAudit from '@/components/RequestAudit'
import StandaloneHeading from '@/components/StandaloneHeading'
import TestimonialHighlight from '@/components/TestimonialHighlight'
import TestimonialWall from '@/components/TestimonialWall'
import { trackEvent } from '@/utils/track'
import { useRef } from 'react'
import Header from '../components/Header'

export default function Home() {
  const auditForm = useRef<HTMLElement | null>(null)

  const handleCtaClick = (pos: string) => (e: React.MouseEvent<HTMLElement>) => {
    trackEvent(e.currentTarget.innerText, { pos })
    e.preventDefault()
    auditForm.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="">
      <Header ctaText="Request an Audit" handleCtaClick={handleCtaClick('nav')} />
      <HeroHome handleCtaClick={handleCtaClick('hero')} />
      <DetailAuditReportsTab />
      <StandaloneHeading>
        <span className="gradient-text">Web3</span> builders <br /> love Macro
      </StandaloneHeading>
      <TestimonialHighlight />
      <TestimonialWall />
      <RequestAudit auditForm={auditForm} />
      <Footer />
    </main>
  )
}
