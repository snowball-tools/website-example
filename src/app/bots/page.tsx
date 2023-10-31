import { HeroBots } from '@/components/Hero';
import Header from '@/components/Header';

export default function Bots() {
  return (
    <main className="relative">
      <div className="bg-hero-pattern bg-no-repeat bg-center absolute top-0 left-0 right-0 h-[450px] wx-full -z-50"></div>
      <Header />
      <HeroBots />
    </main>
  );
}
