'use client'

import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { CtaPrimary } from '../Cta'

type HeroHomeProps = {
  handleCtaClick: (e: React.MouseEvent<HTMLElement>) => void
}

// Array of contract types to display.
const contractTypes = [
  'ZK',
  'Bridge',
  'DeFi',
  'Infrastructure',
  'NFTs',
  'DAO',
  'Social',
  'Governance',
]

const getSequence = () => {
  const sequence: (string | number)[] = []
  contractTypes.forEach((type, index) => {
    sequence.push(`${type}`)
    sequence.push(1000)
  })
  return sequence
}

const HeroHome = ({ handleCtaClick }: HeroHomeProps) => {
  const [typedText, setTypedText] = useState('')

  return (
    <div className="mt-10 flex flex-col">
      <h1 className="text-center font-bold text-2xl text-[#05051e] leading-10 md:text-5xl md:leading-[70.5px]">
        Secure Your{' '}
        <span className="gradient-text">
          <TypeAnimation sequence={getSequence()} speed={10} cursor={true} repeat={Infinity} />
        </span>
        <br />
        Smart Contracts.
      </h1>
      <CtaPrimary onClick={handleCtaClick} className="mx-auto mt-10" href="#" border>
        Request an Audit
      </CtaPrimary>
    </div>
  )
}

export default HeroHome
