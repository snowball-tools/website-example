import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Image className="" src="/macro.svg" alt="Macro Logo" width={180} height={37} priority />
      </div>
    </main>
  );
}
