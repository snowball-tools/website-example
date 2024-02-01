import Footer from '@/components/minimal/Footer'
import Header from '../components/minimal/Header'

export default function HomePage() {
  return (
    <main className="">
      <Header />

      <main className="Content mt-6">
        <h1 className="text-[1.3rem] leading-snug font-semibold">
          Macro is an Audit & Investment firm focused on early stage token projects.
        </h1>
        <p className="mt-4 font-medium">Get a world-class security team on your cap table.</p>
      </main>

      <Footer />
    </main>
  )
}
