'use client';

import { useRef } from 'react';
import { HeroHome } from '@/components/Hero';
import Header from '../components/Header';
import DetailAuditReportsTab from '@/components/DetailAuditReportsTab';
import Footer from '@/components/Footer';
import RequestAudit from '@/components/RequestAudit';
import TestimonialHighlight from '@/components/TestimonialHighlight';
import TestimonialWall from '@/components/TestimonialWall';
import StandaloneHeading from '@/components/StandaloneHeading';

export default function Home() {
  const auditForm = useRef<HTMLElement | null>(null);

  const handleCtaClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    auditForm.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="">
      <Header handleCtaClick={handleCtaClick} />
      <HeroHome handleCtaClick={handleCtaClick} />
      <DetailAuditReportsTab />
      <StandaloneHeading>
        <span className="gradient-text">Web3</span> builders <br /> love Macro
      </StandaloneHeading>
      <TestimonialHighlight />
      <TestimonialWall />
      <RequestAudit auditForm={auditForm} />
      <Footer />
    </main>
  );
}
