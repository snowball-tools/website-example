'use client'

import { PopupButton } from '@typeform/embed-react'

type Props = {
  formId: string
}
export function RequestAudit({ formId }: Props) {
  return (
    <PopupButton
      id={formId}
      className="rounded-md bg-[#1C44A9] dark:bg-dusk-50 dark:hover:bg-white px-3.5 py-2.5 text-sm font-semibold text-white dark:text-night-950 shadow-sm hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 transition"
    >
      Open Inquiry Form
    </PopupButton>
  )
}
