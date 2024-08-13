import Footer from '@/components/minimal/Footer'
import { getMacroClientsData } from '../../../scripts/build/macro-clients'
import { getTestimonialsData } from '../../../scripts/build/testimonials'
import Header from '../../components/minimal/Header'
import { TestimonialWall } from '../audits/TestimonialWall'
import { FellowshipCta } from './FellowshipCta'

export default function FellowshipPage() {
  const clients = getMacroClientsData().filter((client) => client.showOnFellowshipPage)
  const testimonials = getTestimonialsData().filter(
    (testimonial) => testimonial.showOnFellowshipPage,
  )

  return (
    <div>
      <Header />
      <main className="Content mt-8">
        <h1 className="text-[1.3rem] font-semibold">Smart Contract Engineering Fellowship</h1>
        <p className="mt-4 font-medium">
          Become a Security-Informed Smart Contract Engineer through our advanced training in
          Solidity & Web3.
        </p>
        <ul className="mt-4 pl-6 list-disc">
          <li>
            Build and deploy secure, gas optimized smart contracts from scratch, including ERC-20,
            ERC-721, DAO governance, Liquidity Pools, and more.
          </li>
          <li>
            Develop an understanding of known security attack vectors using detailed analyses of
            multiple real-world hacks.
          </li>
          <li>Obtain thorough knowledge of the EVM and opcodes.</li>
          <li>Get exposure to important EIPs and ERC standards.</li>
          <li>Employ best practices for writing and testing Solidity code.</li>
          <li>Connect a dApp frontend to your smart contracts.</li>
        </ul>
        <h2 className="mt-8 text-[1.2rem] font-semibold">Find out when the next cohort is live</h2>
        <div className="mt-4">
          <FellowshipCta formId={process.env.FELLOWSHIP_TYPEFORM_FORM_ID!} />
        </div>
        <div className="mt-8">
          <TestimonialWall testimonials={testimonials} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
