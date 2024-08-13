import { CtaPrimary } from '@/components/Cta'
import TrustedBy from '@/components/TrustedBy'
import VerifiedBadge from '@/components/icons/VerifiedBadge'
import Footer from '@/components/minimal/Footer'
import Header from '@/components/minimal/Header'
import { APP_URL } from '@/utils/constants'
import Link from 'next/link'

const Benefits = () => {
  const benefits = [
    'Audit Estimate (Time+Cost)',
    'Gas Optimizations',
    'Potential Vulnerabilities',
    'Automatic Updates',
  ]

  return (
    <ul className="grid mx-auto gap-x-8 gap-y-5 mt-6 sm:mt-10 sm:grid-cols-[repeat(2,auto)]">
      {benefits.map((benefit) => (
        <li key={benefit} className="flex gap-2 items-center">
          <VerifiedBadge className="w-7 h-7 bg-[#2d8f60] p-1 rounded-full text-white border-2 border-gray-300 dark:border-gray-800" />
          {benefit}
        </li>
      ))}
    </ul>
  )
}

const Sentry = () => {
  return (
    <main>
      <Header />
      <article className="bg-[#fcfcfc] p-5 rounded-2xl max-w-xl mx-3 sm:mx-auto sm:p-6 sm:mt-4 dark:bg-night-800 dark:bg-opacity-70">
        <div className="flex flex-col">
          <h1 className="text-center font-bold text-2xl sm:text-4xl sm:leading-[1.2em] text-[#05051e] dark:text-white">
            <span className="dark:gradient-text-metalic">Sentry</span> <br />{' '}
            <span className="gradient-text">Free</span>{' '}
            <span className="gradient-text">& Instant</span>
          </h1>
          <Benefits />
          <div className="mt-6 sm:mt-10 flex flex-col items-center">
            <CtaPrimary href="https://sentry.0xmacro.com" icon="icons/github.svg">
              Try Sentry
            </CtaPrimary>
            <p className="text-center text-black mt-6 lg:mt-8 dark:text-gray-500">
              Already have an account?{' '}
              <Link
                className="text-electricPurple hover:underline block md:inline"
                href={`${APP_URL}/signup`}
              >
                Sign-in to the Macro Sentry
              </Link>
            </p>
          </div>
        </div>
        <TrustedBy />
      </article>
      <Footer />
    </main>
  )
}

export default Sentry
