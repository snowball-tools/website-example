'use client';

import React, { useState, useEffect } from 'react';
import { CtaPrimary } from '../Cta';
import { TypeAnimation } from 'react-type-animation';

// Array of contract types to display.
const contractTypes = ['ZK', 'Bridge', 'DeFi', 'Infrastructure', 'NFTs', 'DAO', 'Social', 'Governance'];

const getSequence = () => {
  const sequence: (string | number)[] = [];
  contractTypes.forEach((type, index) => {
    sequence.push(`${type}`);
    sequence.push(1000);
  });
  return sequence;
};

const HeroHome = () => {
  const [typedText, setTypedText] = useState('');

  return (
    <div className="mt-10 flex flex-col">
      <h1 className="text-center font-bold text-2xl leading-10 md:text-5xl md:leading-[70.5px] text-#05051E">
        Secure Your{' '}
        <span className="gradient-text">
          <TypeAnimation sequence={getSequence()} speed={10} cursor={true} repeat={Infinity} />
        </span>
        <br />
        Smart Contracts.
      </h1>
      <CtaPrimary className="mx-auto mt-10" href="#" border>
        Request an Audit
      </CtaPrimary>
    </div>
  );
};

export default HeroHome;
