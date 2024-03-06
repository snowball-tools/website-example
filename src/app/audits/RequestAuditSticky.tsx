'use client'

import { PopupButton } from '@typeform/embed-react'

export function RequestAuditSticky({ formId }: { formId: string }) {
  return (
    <>
      <div className="px-2.5 py-3 xs:px-8 xs:py-4 mb-0 xs:mb-4 rounded-t-md md:rounded-md sticky bg-night-600 max-w-xl mx-auto bottom-0">
        <h1 className="px-2 text-lg font-semibold md:text-center xss:mb-4">Get in Touch</h1>
        <div className=" mt-2 xss:mt-0 flex xss:justify-between xss:items-center gap-2 xss:gap-3">
          <PopupButton
            id={formId}
            className="rounded-md xss:w-1/2 bg-[#1C44A9] dark:bg-dusk-50 dark:hover:bg-white font-semibold px-2 py-2 text-sm text-white dark:text-night-950 shadow-sm hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 transition"
          >
            Submit an Inquiry
          </PopupButton>

          <a
            href="https://t.me/haileybf"
            target="_blank"
            className="rounded-md bg-white xss:w-1/2 dark:bg-dusk-950 px-2 py-2 font-semibold text-sm text-gray-900 dark:text-dusk-200 ring-1 ring-inset ring-gray-200 dark:ring-dusk-900 hover:ring-neutral-400 dark:hover:bg-dusk-900 text-center transition"
          >
            Message on Telegram
          </a>
        </div>
      </div>
    </>
  )
}
