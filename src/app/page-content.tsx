'use client'

import { FancyButton } from '@/components/FancyButton'

export function AuditsPageContent() {
  return (
    <div className="mt-12">
      <h2 className="mt-8 text-[1.3rem] font-semibold">Need more proof?</h2>
      <p className="mt-3">Click below to see our work.</p>
      <div className="mt-5 flex">
        <FancyButton as="a" href="/works">
          <span className="font-semibold">View Audit Reports</span>
        </FancyButton>
      </div>
    </div>
  )
}
