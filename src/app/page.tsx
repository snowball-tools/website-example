import { HeroHome } from '@/components/Hero';
import Header from '../components/Header';
import DetailAuditReportsTab from '@/components/DetailAuditReportsTab';
import Footer from '@/components/Footer';
import RequestAudit from '@/components/RequestAudit';
import TestimonialWall from '@/components/TestimonialWall';

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroHome />
      <DetailAuditReportsTab />
      <TestimonialWall />
      <RequestAudit />
      <Footer />
    </main>
  );
}
