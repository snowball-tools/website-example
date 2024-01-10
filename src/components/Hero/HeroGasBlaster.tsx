'use client'

import { APP_URL } from '@/utils/constants'
import { trackEvent, trackOnClick } from '@/utils/track'
import Link from 'next/link'
import { useState } from 'react'
import RocketIcon from '../icons/Rocket'

const HeroGasBlaster = () => {
  const [repo, setRepo] = useState('')

  return (
    <div className="mt-10 flex flex-col">
      <h1 className="text-center font-bold text-2xl sm:text-5xl md:text-6xl text-[#05051e] dark:text-white leading-10 sm:leading-tight">
        Make your contracts <br /> <span className="gradient-text">gas efficient</span>
      </h1>
      <p className="text-center mt-6 md:text-xl text-gray-500 dark:text-white">
        With a one-click Gas Audit for your contracts
      </p>
      <p className="text-center text-gray-500 mt-6 lg:mt-8">
        Already have an account?{' '}
        <Link
          className="text-electricPurple hover:underline block md:inline"
          href={`${APP_URL}/signup`}
          onClick={trackOnClick({ pos: 'hero' })}
        >
          Sign In to Gas Hero
        </Link>
      </p>

      <div className="mt-8 mx-auto w-full max-w-xl relative">
        <form
          action={`${APP_URL}/signup/`}
          className="w-full flex flex-col p-2.5 bg-darkNavy-100 rounded-lg sm:flex-row sm:gap-3 xlg:p-4 xlg:-mx-4 xlg:w-[calc(100%+2rem)]"
          onClick={(e) => {
            const repo = e.currentTarget.repo.value
            trackEvent('Get a Free Preview', { pos: 'hero', repo })
            if (!repo) e.preventDefault()
          }}
        >
          <input
            type="text"
            className="px-5 py-3.5 mb-4 w-full rounded-lg fancy-input sm:mb-0 sm:w-full"
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
            className="px-7 py-3.5 flex justify-center items-center rounded-lg font-medium text-white sm:min-w-[200px] sm:px-4"
            type="submit"
            style={{
              background:
                'var(--gradient, linear-gradient(90deg, #CAB7FF 0%, #FE8BBB 50%, #FFBD7A 100%))',
            }}
          >
            <RocketIcon className="w-5 h-5 mr-1" />
            Get a Free Preview
          </button>
        </form>
      </div>
    </div>
  )
}

export default HeroGasBlaster
