import { FancyButton } from '@/components/FancyButton'
import Footer from '@/components/minimal/Footer'
import { getMacroClientsData } from '@/lib/macro-clients'
import { getTestimonialsData } from '@/lib/testimonials'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/minimal/Header'
import { TestimonialWall } from './audits/TestimonialWall'
import { AuditsPageContent } from './page-content'

export default async function AuditsPage() {
  const [allClients, allTestimonials] = await Promise.all([
    getMacroClientsData(),
    getTestimonialsData(),
  ])

  const clients = allClients.filter((client) => client.showOnAuditsPage)
  const testimonials = allTestimonials.filter((testimonial) => testimonial.showOnAuditsPage)

  return (
    <div className="">
      <Header />

      <main className="Content mt-4">
        <h1 className="sm:mt-8 text-[1.3rem] font-semibold">White Glove Smart Contract Auditing</h1>
        <p className="mt-4">
          Secure your next web3 project. Macro has a long track record of quality audits with
          satisfied, high-profile clients.
        </p>

        <h1 className="mt-10 text-[1.3rem] font-semibold">Our Work</h1>
        <p className="mt-3">
          See our library of past audits{' '}
          <Link href="/works" className="underline">
            here
          </Link>
          .
        </p>

        <p className="mt-3">
          Preview Macro&apos;s audit process by reading our{' '}
          <a
            href="https://0xmacro.notion.site/1ac134a4ab3245d6a2a51e199d2b61b8?v=e39cbc424fb14dd881f3c3cd19393097#f882eabd024c407a905d7f42ec1dd380"
            className="underline"
            target="_blank"
          >
            Client Handbook
          </a>
          .
        </p>

        <h2 className="mt-8 text-[1.3rem] font-semibold">Our Services</h2>
        <ul className="mt-4 pl-6 list-disc">
          <li>Smart contract audits</li>
          <li>Early-stage architecture review</li>
          <li>Protocol design consultation</li>
          <li>Gas optimization audits</li>
        </ul>

        <h1 className="mt-8 text-[1.3rem] font-semibold">Featured Clients</h1>
        <div className="mt-4 grid xss:grid-cols-2 gap-6">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.website}
              target="_blank"
              className="p-5 sm:px-7 h-16 border border-gray-200 hover:border-neutral-300 dark:border-dusk-300 dark:bg-dusk-100 dark:hover:bg-dusk-50 rounded-lg flex items-center transition"
            >
              <Image
                src={client.avatar_url}
                alt={client.name}
                className="w-full max-h-full"
                // These values don't matter for whatever reason
                width={300}
                height={60}
              />
            </a>
          ))}
        </div>

        <div className="mt-12">
          <TestimonialWall testimonials={testimonials} />
        </div>

        <AuditsPageContent />
      </main>

      <Footer />
    </div>
  )
}
