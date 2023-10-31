import { HeroHome } from '@/components/Hero';
import Header from '../components/Header';
import DetailAuditReportsTab from '@/components/DetailAuditReportsTab';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroHome />
      <DetailAuditReportsTab />
      <Footer />
    </main>
  );
}
