import Footer from '@/components/minimal/Footer'
import { getMacroClientsData } from '../../../scripts/build/macro-clients'
import { getTestimonialsData } from '../../../scripts/build/testimonials'
import Header from '../../components/minimal/Header'
import { RequestAudit } from './RequestAudit'
import { TestimonialWall } from './TestimonialWall'

export default function AuditsPage() {
  const clients = getMacroClientsData().filter(
    (client) => client.showOnAuditsPage && client.type === 'audit-client',
  )

  const testimonials = getTestimonialsData().filter((testimonial) => testimonial.showOnAuditsPage)

  console.log('Two', process.env.TYPEFORM_FORM_ID)
  return (
    <div className="">
      <Header />

      <main className="Content mt-8">
        <h1 className="text-[1.3rem] font-semibold">Secure Your Web3 Project</h1>
        <p className="mt-4">
          Macro has a long track record of quality audits with satisfied, high-profile clients.
        </p>
        <p className="mt-4">
          Startups we invest in receive this same level of security, including preferential lead
          times and competitive rates.
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
              <img src={client.avatar_url} alt={client.name} className="w-full max-h-full" />
            </a>
          ))}
        </div>

        <div className="mt-12">
          <TestimonialWall testimonials={testimonials} />
        </div>

        <h1 className="mt-16 text-[1.3rem] font-semibold">Our Work</h1>
        <p className="mt-3">
          See our library of past audits{' '}
          <a href="/library" className="underline">
            here
          </a>
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

        <h1 className="mt-8 text-[1.3rem] font-semibold">Get in Touch</h1>
        <p className="mt-2">We&apos;re always open to hearing about interesting projects.</p>

        <div className="mt-4 flex flex-col xss:flex-row xss:items-center gap-3">
          <RequestAudit formId={process.env.TYPEFORM_FORM_ID!} />
          <div className="text-center">or</div>
          <a
            href="https://t.me/haileybf"
            target="_blank"
            className="rounded-md bg-white dark:bg-dusk-950 px-3.5 py-3 text-sm font-semibold text-gray-900 dark:text-dusk-200 ring-1 ring-inset ring-gray-200 dark:ring-dusk-900 hover:ring-neutral-400 dark:hover:bg-dusk-900 text-center transition"
          >
            Message on Telegram
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
