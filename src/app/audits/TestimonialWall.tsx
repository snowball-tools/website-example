'use client'

import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { Testimonial } from '../../../scripts/build/testimonials'

type Props = {
  testimonials: Testimonial[]
}
export function TestimonialWall({ testimonials }: Props) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2 }}>
      <Masonry columnsCount={2} gutter={'60px'}>
        {testimonials.map((t) => {
          const image = (
            <Image
              src={t.avatar_url}
              alt={t.name}
              className="rounded-full border border-gray-300"
              width={28}
              height={28}
            />
          )

          return (
            <div
              key={t.id}
              className={`max-w-[36ch] mx-auto border-l-2 pl-4 dark:bg-darkNavy-100 dark:border-gray-800`}
            >
              <p className="text-sm">&quot;{t.quote}&quot;</p>
              <div className="mt-4 flex gap-2 items-center">
                {t.social_url ? (
                  <a className="font-semibold text-xs" href={t.social_url} target="_blank">
                    {image}
                  </a>
                ) : (
                  image
                )}

                <div className="text-sm leading-none">
                  {t.social_url ? (
                    <a
                      className="font-semibold text-xs hover:underline"
                      href={t.social_url}
                      target="_blank"
                    >
                      {t.name}
                    </a>
                  ) : (
                    <p className="font-semibold text-xs">{t.name}</p>
                  )}
                  <p className="font-mono font-light dark:text-dusk-600 text-xss">
                    {t.title},{' '}
                    {t.client.website ? (
                      <a className="hover:underline" href={t.client.website} target="_blank">
                        {t.client.name}
                      </a>
                    ) : (
                      t.client.name
                    )}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </Masonry>
    </ResponsiveMasonry>
  )
}
