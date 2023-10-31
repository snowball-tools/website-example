import { HeroHome } from '@/components/Hero';
import Header from '../components/Header';
import DetailAuditReportsTab from '@/components/DetailAuditReportsTab';
import Footer from '@/components/Footer';
import RequestAudit from '@/components/RequestAudit';

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroHome />
      <DetailAuditReportsTab />
      <RequestAudit />
      <Footer />
    </main>
  );
}
