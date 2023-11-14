import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { CtaPrimary } from '../Cta'

const HeroBots = () => {
  return (
    <div className="mt-8 flex flex-col">
      <div className="text-center mb-5 sm:mb-3">
        <Link
          href="https://swarm.0xmacro.com/"
          className="border rounded-3xl py-1 px-5 inline-block bg-white hover:bg-gray-100 transition-all duration-500"
        >
          <div className="flex gap-2">
            <Image src="/icons/shooting-star.svg" alt="" width={18} height={18} />
            <p>Try a Scan for Free!</p>
          </div>
        </Link>
      </div>
      <h1 className="text-center font-bold text-2xl text-[#05051e] leading-10 sm:text-5xl sm:leading-[70.5px]">
        Vulnerability Detection <br /> on Demand
      </h1>
      <p className="text-center mt-6">Using our Swarm of 300+ vulnerability detection bots.</p>
      <div className="flex flex-col mx-auto mt-10 items-center gap-6 sm:flex-row">
        <CtaPrimary
          className="flex gap-2"
          href="https://swarm.0xmacro.com/"
          icon="/icons/github.svg"
          border
        >
          Try it with a Free Scan
        </CtaPrimary>
        <Link
          className="flex gap-2 font-semibold items-center hover:underline"
          href="https://swarm.0xmacro.com/"
        >
          Check Pricing
          <ArrowUpRightIcon className="w-3 h-3" />
        </Link>
      </div>

      <div className="px-2">
        <div className="mt-8 max-w-xl w-full mx-auto">
          <h2 className="flex gap-2 font-semibold text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13 3H5V21H19V9M13 3L19 9M13 3V8C13 8.55228 13.4477 9 14 9H19M9 13H15M9 17H15"
                stroke="url(#paint0_linear_936_918)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_936_918"
                  x1="12"
                  y1="3"
                  x2="12"
                  y2="21"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DC41AE" />
                  <stop offset="1" stop-color="#FFB487" />
                </linearGradient>
              </defs>
            </svg>
            Sample Report
          </h2>

          <article
            className="mt-4 p-6 flex flex-col gap-2 bg-white rounded-lg border border-fuchsia-700 group sm:flex-row sm:justify-between lg:items-end"
            style={{
              boxShadow: '0px 1px 26px 2px rgba(160, 88, 255, 0.17)',
            }}
          >
            <header className="mb-3 flex flex-col items-start sm:w-1/2">
              <h1 className="mb-2 flex items-center gap-2 sm:flex-col sm:items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 -ml-1 text-gray-700"
                >
                  <path
                    d="M13 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V9M13 3L19 9M13 3V8C13 8.55228 13.4477 9 14 9H19M9 13H15M9 17H15"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <a
                  href="https://github.com/gilbert/farcastercontracts/commit/1aceebe916de446f69b98ba1745a42f071785730"
                  target="_blank"
                  className="font-medium leading-6"
                >
                  1aceeb
                </a>
              </h1>
              <time dateTime="2023-11-10T04:13:05.467Z" className="text-gray-600">
                4 days ago
              </time>
            </header>
            <section className="flex flex-col sm:w-1/2">
              <h2 className="mb-2 text-sm font-bold">Overview of Findings</h2>
              <div className="lg:relative lg:overflow-hidden">
                <ul className="mb-4 font-mono text-sm sm:text-xs sm:grid sm:grid-rows-3 sm:grid-flow-col lg:mb-0">
                  <li className="flex w-full items-center h-10 gap-2">
                    <p
                      className="font-mulish inline-block py-0.5 rounded text-white w-6 text-center"
                      style={{ backgroundColor: 'rgb(159, 33, 33)' }}
                    >
                      2
                    </p>
                    <span className="font-light">High</span>
                  </li>
                  <li className="flex w-full items-center h-10 gap-2">
                    <p
                      className="font-mulish inline-block py-0.5 rounded text-white w-6 text-center"
                      style={{ backgroundColor: 'rgb(178, 69, 13)' }}
                    >
                      3
                    </p>
                    <span className="font-light">Medium</span>
                  </li>
                  <li className="flex w-full items-center h-10 gap-2">
                    <p
                      className="font-mulish inline-block py-0.5 rounded text-white w-6 text-center"
                      style={{ backgroundColor: 'rgb(178, 69, 13)' }}
                    >
                      15
                    </p>
                    <span className="font-light">Low</span>
                  </li>
                  <li className="flex w-full items-center h-10 gap-2">
                    <p
                      className="font-mulish inline-block py-0.5 rounded text-white w-6 text-center"
                      style={{ backgroundColor: 'rgb(45, 143, 96)' }}
                    >
                      45
                    </p>
                    <span className="font-light">Code Quality</span>
                  </li>
                  <li className="flex w-full items-center h-10 gap-2">
                    <p
                      className="font-mulish inline-block py-0.5 rounded text-white w-6 text-center"
                      style={{ backgroundColor: 'rgb(138, 86, 192)' }}
                    >
                      35
                    </p>
                    <span className="font-light">Gas Optimizations</span>
                  </li>
                </ul>
                <div
                  className="items-end hidden opacity-0 transition-all duration-700 -translate-y-8 ease-in-out absolute inset-y-0 inset-x-0 group-hover:translate-y-0 group-hover:opacity-100 lg:flex lg:items-end lg:justify-end"
                  style={{
                    background:
                      'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8) 70%, rgba(255, 255, 255, 0) 100%)',
                  }}
                >
                  <a
                    href="https://swarm.0xmacro.com/reports/117938d1-a505-4f28-bf0e-9a8c5e2ce2bb"
                    className="flex gap-1 inline-block py-3 px-5 font-sans font-bold text-[15px] leading-[14px] text-center text-purple-500 bg-white rounded-lg border border-gray-200 shadow"
                  >
                    View Report
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.66666 2.6665H4.66666C3.56209 2.6665 2.66666 3.56194 2.66666 4.66651V11.3332C2.66666 12.4377 3.5621 13.3332 4.66667 13.3332H11.3333C12.4379 13.3332 13.3333 12.4377 13.3333 11.3332V9.33317M7.33333 8.6665L13.3333 2.6665M13.3333 2.6665V5.99984M13.3333 2.6665H10"
                        stroke="#A058FF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <a
                href="https://swarm.0xmacro.com/reports/117938d1-a505-4f28-bf0e-9a8c5e2ce2bb"
                className="flex gap-1 block py-3 font-sans font-bold text-[15px] leading-[14px] text-center text-purple-500 bg-white rounded-lg border border-gray-200 shadow lg:hidden"
              >
                View Report
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6.66666 2.6665H4.66666C3.56209 2.6665 2.66666 3.56194 2.66666 4.66651V11.3332C2.66666 12.4377 3.5621 13.3332 4.66667 13.3332H11.3333C12.4379 13.3332 13.3333 12.4377 13.3333 11.3332V9.33317M7.33333 8.6665L13.3333 2.6665M13.3333 2.6665V5.99984M13.3333 2.6665H10"
                    stroke="#A058FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

export default HeroBots
