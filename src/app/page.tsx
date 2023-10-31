import { HeroHome } from '@/components/Hero';
import Header from '../components/Header';
import DetailAuditReportsTab from '@/components/DetailAuditReportsTab';
import Footer from '@/components/Footer';
import RequestAudit from '@/components/RequestAudit';
import TestimonialHighlight from '@/components/TestimonialHighlight';
import TestimonialWall from '@/components/TestimonialWall';

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroHome />
      <DetailAuditReportsTab />
      <section className="max-w-sm mx-auto text-center text-gray-500">
        <h1 className="text-3xl mb-16 font-mono sm:text-4xl">
          <span className="gradient-text">Web3</span> builders <br /> love Macro
        </h1>
      </section>
      <TestimonialHighlight />
      <TestimonialWall />
      <RequestAudit />
      <Footer />
    </main>
  );
}
