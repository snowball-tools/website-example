import { HeroHome } from '@/components/Hero';
import Header from '../components/Header';
import DetailAuditReportsTab from '@/components/DetailAuditReportsTab';

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroHome />
      <DetailAuditReportsTab />
    </main>
  );
}
