'use client'

import { FancyButton } from '@/components/FancyButton'
import OpenLinkIcon from '@/components/icons/OpenLink'
import TelegramIcon from '@/components/icons/Telegram'
import { PopupButton } from '@typeform/embed-react'
import { useRef } from 'react'

const formId = process.env.NEXT_PUBLIC_REQUEST_AUDIT_TYPEFORM_FORM_ID!

export function RequestAuditBanner({ className }: { className?: string }) {
  const openPopup = () => {
    const btn: HTMLButtonElement | null = document.querySelector('.InqueryButton')
    btn?.click()
  }
  return (
    <div
      className={`p-5 pb-6 bg-dusk-50 dark:bg-gray-900 border-b border-gray-200 dark:border-neutral-800 flex-center transition ${className}`}
    >
      <div className="flex-center gap-4">
        <div className="flex px-2 dark:text-white text-center">
          Need an audit or want to learn more?
        </div>
        <div className="flex-center sm:flex-row gap-1 sm:gap-2">
          <PopupButton id={formId} className="InqueryButton hidden">
            Not shown
          </PopupButton>

          <FancyButton onClick={openPopup}>
            <span className="font-semibold">Submit an Inquiry</span>
            <OpenLinkIcon className="ml-1.5 h-3.5 relative top-[-1px] flex-shrink-0 text-dusk-700 group-hover:text-black dark:group-hover:text-white transform" />
          </FancyButton>

          <div className="text-xs dark:text-white xs:text-sm text-center">or</div>

          <FancyButton as="a" href="https://t.me/haileybf" target="_blank">
            <span className="font-semibold">Message on Telegram</span>
            <TelegramIcon className="ml-1 w-4 flex-shrink-0 text-dusk-700 group-hover:text-black dark:group-hover:text-white transform" />
          </FancyButton>
        </div>
      </div>
    </div>
  )
}
