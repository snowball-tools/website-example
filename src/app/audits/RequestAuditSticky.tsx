'use client'

import OpenLinkIcon from '@/components/icons/OpenLink'
import TelegramIcon from '@/components/icons/Telegram'
import { PopupButton } from '@typeform/embed-react'

export function RequestAuditSticky({ formId }: { formId: string }) {
  return (
    <div className="flex sticky bg-[#BA2FD2] py-2 mx-auto top-0 justify-center">
      <div className="flex flex-col md:flex-row gap-2">
        <span className="flex px-2 text-xs xs:text-sm md:leading-8">
          Need an audit or want to learn more about Macro’s services?
        </span>
        <div className="flex gap-2 justify-center">
          <PopupButton
            id={formId}
            className="flex px-2.5 py-1.5 font-medium text-sm rounded-md gap-1 dark:bg-dusk-50 dark:hover:bg-white text-white dark:text-night-950 shadow-sm hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 transition hover:underline"
          >
            <span>Submit an Inquiry</span>
            <OpenLinkIcon className="h-4 hidden xs:block" />
          </PopupButton>
          <span className="leading-8">or</span>

          <a
            href="https://t.me/haileybf"
            target="_blank"
            className="flex text-sm text-white underline gap-1 leading-8 "
          >
            Message on Telegram <TelegramIcon className="w-4 hidden xs:block" />
          </a>
        </div>
      </div>
    </div>
  )
}
