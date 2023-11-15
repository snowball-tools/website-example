'use client'

import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CtaPrimary } from '../Cta'

const HeroBots = () => {
  const [repo, setRepo] = useState('')

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
      <h1 className="text-center font-bold text-2xl sm:text-5xl md:text-6xl text-[#05051e] leading-10 sm:leading-tight">
        Vulnerability Detection <br /> on Demand
      </h1>
      <p className="text-center mt-6 text-xl text-gray-500">
        Using our Swarm of 300+ vulnerability detection bots.
      </p>

      <div className="mt-8 mx-auto w-full max-w-xl relative">
        <form
          action="https://swarm.0xmacro.com/start/connect"
          className="w-full sm:w-[calc(100%+1.25rem)] lg:w-[calc(100%+2rem)] sm:-mx-2.5 lg:-mx-4 flex flex-col p-2.5 bg-purple-600/5 rounded-lg sm:flex-row sm:gap-3 lg:p-4"
          onClick={(e) => {
            const repo = e.currentTarget.repo.value
            if (!repo) e.preventDefault()
          }}
        >
          <input
            type="text"
            className="px-5 py-3.5 mb-4 w-full rounded-lg fancy-input sm:mb-0"
            placeholder="Paste GitHub url"
            value={repo}
            onInput={(e: any) => {
              setRepo(e.target.value)
            }}
          />

          <input
            type="hidden"
            name="repo"
            value={repo.replace(/https?:\/\//, '').replace('github.com/', '')}
          />

          <button
            className="px-7 py-3.5 flex justify-center items-center rounded-lg font-medium text-white"
            type="submit"
            style={{
              background:
                'var(--gradient, linear-gradient(90deg, #CAB7FF 0%, #FE8BBB 50%, #FFBD7A 100%))',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={`0 0 24 24`}
              fill="none"
              className="h-5 text-white"
            >
              <path
                d="M3.33301 11.6666L11.6663 1.66663L10.7951 8.33329H16.6664L8.33303 18.3333L9.20424 11.6666H3.33301Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Scan
          </button>
        </form>

        <div className="flex pr-4 justify-end relative top-1 sm:top-0">
          <svg
            className="h-6 relative -top-1.5 rotate-30 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="25"
            viewBox="0 0 31 25"
            fill="none"
          >
            <path
              d="M4.60445 2.77913C4.4471 1.96578 4.97889 1.17887 5.79224 1.02153C6.60558 0.864179 7.39249 1.39597 7.54984 2.20932L4.60445 2.77913ZM26.5467 21.6536C27.3676 21.7646 27.9432 22.5201 27.8322 23.3411C27.7212 24.162 26.9658 24.7376 26.1448 24.6266L26.5467 21.6536ZM3.69014 8.18479C3.26327 8.89477 2.34167 9.12428 1.63169 8.69741C0.921708 8.27054 0.692202 7.34894 1.11907 6.63896L3.69014 8.18479ZM5.20054 2.76162L3.91501 1.9887L3.91573 1.9875L5.20054 2.76162ZM7.0474 2.22501L6.43446 3.59406L6.43322 3.59351L7.0474 2.22501ZM12.9234 3.21227C13.6795 3.55078 14.0181 4.43815 13.6795 5.19426C13.341 5.95037 12.4537 6.28889 11.6976 5.95038L12.9234 3.21227ZM6.07714 2.49422C7.54984 2.20932 7.54976 2.20895 7.5497 2.20862C7.54969 2.20856 7.54963 2.20826 7.54961 2.20813C7.54955 2.20787 7.54953 2.20774 7.54953 2.20775C7.54953 2.20776 7.54964 2.20831 7.54985 2.20939C7.55028 2.21154 7.55113 2.21581 7.55242 2.22215C7.55498 2.23482 7.55928 2.25575 7.5654 2.28456C7.57763 2.34218 7.5971 2.43125 7.62445 2.5487C7.67917 2.78368 7.76528 3.13164 7.88783 3.56809C8.13328 4.4423 8.52291 5.66433 9.09576 7.04076C10.251 9.81649 12.1045 13.1064 14.9208 15.4831L12.9859 17.7758C9.65724 14.9666 7.57271 11.1889 6.32606 8.19348C5.69797 6.68434 5.27071 5.34492 4.99952 4.37907C4.86374 3.8955 4.76659 3.50377 4.70262 3.22908C4.67063 3.09169 4.6469 2.98342 4.63077 2.90742C4.6227 2.86942 4.61653 2.83946 4.61217 2.81795C4.61 2.8072 4.60827 2.79855 4.60698 2.79207C4.60634 2.78882 4.60581 2.78612 4.60539 2.78396C4.60518 2.78288 4.60499 2.78194 4.60484 2.78113C4.60476 2.78073 4.60466 2.78023 4.60462 2.78003C4.60453 2.77956 4.60445 2.77913 6.07714 2.49422ZM14.9208 15.4831C20.8453 20.4832 25.5093 21.5134 26.5467 21.6536L26.1448 24.6266C24.5482 24.4108 19.351 23.1476 12.9859 17.7758L14.9208 15.4831ZM1.11907 6.63896L3.91501 1.9887L6.48608 3.53454L3.69014 8.18479L1.11907 6.63896ZM3.91573 1.9875C4.704 0.679215 6.33229 0.259928 7.66158 0.856512L6.43322 3.59351C6.41735 3.58638 6.4145 3.59096 6.42448 3.58806C6.42942 3.58662 6.43907 3.58285 6.45117 3.57374C6.46398 3.56409 6.4763 3.55076 6.48535 3.53574L3.91573 1.9875ZM7.66033 0.855954L12.9234 3.21227L11.6976 5.95038L6.43446 3.59406L7.66033 0.855954Z"
              fill="#FE8CBC"
            />
          </svg>
          <span className="p-0.5 font-semibold text-[0.875rem] text-[#FE8CBC]">
            Your first scan is FREE!
          </span>
        </div>
      </div>

      <div className="px-2">
        <div className="mt-12 max-w-xl w-full mx-auto">
          <div className="flex justify-between">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                    <stop stopColor="#DC41AE" />
                    <stop offset="1" stopColor="#FFB487" />
                  </linearGradient>
                </defs>
              </svg>
              Sample Report
            </h2>

            <Link
              className="flex gap-2 font-semibold items-center hover:underline"
              href="https://swarm.0xmacro.com/"
            >
              Pricing
              <ArrowUpRightIcon className="w-3 h-3" />
            </Link>
          </div>

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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
