'use client'

import OpenLinkIcon from '@/components/icons/OpenLink'
import TelegramIcon from '@/components/icons/Telegram'
import { PopupButton } from '@typeform/embed-react'

export function RequestAuditSticky({ formId }: { formId: string }) {
  return (
    <div className="flex sticky bg-[#BA2FD2] py-2 mx-auto top-0 justify-center">
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex px-2 text-xs dark:text-white xs:text-sm md:leading-8">
          <span className="hidden xs:block">
            Need an audit or want to learn more about Macro’s services?
          </span>
          <span className="xs:hidden">Reach out for an audit or to learn more about Macro</span>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <PopupButton
            id={formId}
            className="flex items-center px-2.5 py-1.5 font-medium text-sm rounded-md gap-1 bg-dusk-50 text-night-950 shadow-sm hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 transition hover:underline"
          >
            <span>Submit an Inquiry</span>
            <OpenLinkIcon className="h-4 hidden xs:block" />
          </PopupButton>
          <span className="text-xs dark:text-white xs:text-sm">or</span>

          <a
            href="https://t.me/haileybf"
            target="_blank"
            className="flex items-center text-sm text-white underline gap-1 leading-8"
          >
            Message on Telegram <TelegramIcon className="w-4 hidden xs:block" />
          </a>
        </div>
      </div>
    </div>
  )
}
