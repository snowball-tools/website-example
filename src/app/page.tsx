import { HeroHome } from '@/components/Hero';
import Header from '../components/Header';
import DetailAuditReportsTab from '@/components/DetailAuditReportsTab';
import Footer from '@/components/Footer';
import RequestAudit from '@/components/RequestAudit';
import TestimonialHighlight from '@/components/TestimonialHighlight';
import TestimonialWall from '@/components/TestimonialWall';
import StandaloneHeading from '@/components/StandaloneHeading';

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroHome />
      <DetailAuditReportsTab />
      <StandaloneHeading>
        <span className="gradient-text">Web3</span> builders <br /> love Macro
      </StandaloneHeading>
      <TestimonialHighlight />
      <TestimonialWall />
      <RequestAudit />
      <Footer />
    </main>
  );
}
