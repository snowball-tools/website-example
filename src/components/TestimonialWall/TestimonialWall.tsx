'use client';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import TestimonialCard from './TestimonialCard';

export type Testimonial = {
  name: string;
  avatar: string;
  message: string;
  title: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Rafael Ugolini',
    avatar: 'rafael-uglioni.png',
    message:
      'It looks like there is still hope with auditors and we found someone who we can actually partner with. team is really happy with the findings so far.',
    title: 'Head of Engineering',
    company: 'mStable',
  },
  {
    name: 'Jake Loo',
    avatar: 'jake-loo.png',
    message:
      "Macro's auditors are responsive and deliver insightful feedback. The communication was excellent and helpful, providing suggestions for improvements with proposed fixes.",
    title: 'CTO',
    company: 'thirdweb',
  },
  {
    name: 'Kevin Kennis',
    avatar: 'kevin-kennis.png',
    message:
      "Macro's team was extremely thorough in their review and has gone above and beyond communication-wise. Having such a strong partner helped us achieve a high level of confidence in a smooth release.",
    title: 'Co-Founder',
    company: 'Sommelier',
  },
  {
    name: 'Ghoul.sol',
    avatar: 'ghoul-sol.png',
    message: 'Great work Macro team! Solid finds, you are restoring my faith in auditors.',
    title: 'Lead Dev',
    company: 'TreasureDAO',
  },
  {
    name: 'Layne Haber',
    avatar: 'layne-haber.png',
    message: 'Glad we have you double looking. Pleased with findings so far.',
    title: 'Co-Founder',
    company: 'Connext',
  },
  {
    name: 'Crispy Mangos',
    avatar: 'crispy-mangos.png',
    message:
      'I have worked with several auditors in the past, and none of them have done nearly as thorough follow up as Macro. It’s very refreshing and a much needed change in the auditing industry.',
    title: 'Lead Developer',
    company: 'Sommelier',
  },
  {
    name: 'Sam Kazemian',
    avatar: 'sam-kazemian.png',
    message:
      'Thank you for the great questions, the discussion and the comprehensive preliminary report itself, really liking the approach you and the Macro team have taken.',
    title: 'Founder',
    company: 'Frax Finance',
  },
  {
    name: 'Fleet Commander',
    avatar: 'fleet-commander.png',
    message: "We've worked with a lot of auditors. Macro is by far the best, it's not even comparable.",
    title: 'Co-Founder',
    company: 'The Citadel Game',
  },
  {
    name: 'Sam Kazemian',
    avatar: 'sam-kazemian.png',
    message:
      "I think it's probably obvious but you very clearly outperformed the previous auditors we've worked with! We really enjoyed working with your team!",
    title: 'Founder',
    company: 'Frax Finance',
  },
  {
    name: 'Nick Fett',
    avatar: 'nick-fett.png',
    message: 'These are really really good findings, excellent job.',
    title: 'CTO',
    company: 'Tellor',
  },
];

const TestimonialWall = () => {
  return (
    <section className="px-6 mb-16 lg:max-w-4xl lg:mx-auto">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 768: 3 }}>
        <Masonry columnsCount={3} gutter={'20px'}>
          {testimonials.map((testimonial, index) => {
            return <TestimonialCard key={index} data={testimonial} className="max-w-[280px] mx-auto" />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
};

export default TestimonialWall;
