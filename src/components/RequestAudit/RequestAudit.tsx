import { trackOnClick } from '@/utils/track'
import { Widget } from '@typeform/embed-react'
import Link from 'next/link'

type RequestAuditProps = {
  auditForm: React.RefObject<HTMLElement>
}

const RequestAudit = ({ auditForm }: RequestAuditProps) => {
  return (
    <section ref={auditForm} id="request-audit" className="px-2 mb-20 sm:max-w-5xl sm:mx-auto">
      <header className="bg-[#fdf5f5] px-6 pt-6 pb-44 rounded-3xl text-center sm:px-44 sm:pt-12 ">
        <h1 className="font-mono text-2xl text-gray-600 mb-4 sm:text-4xl sm:mb-6">
          Request an <span className="gradient-text">Audit</span>
        </h1>
        <p className="mx-auto sm:max-w-[400px]">
          We respond fast! Fill out the form below and our team will reach out to you within 1-2
          business days. You can chat directly with us on{' '}
          <Link
            className="underline underline-offset-2"
            href="https://t.me/haileybf"
            target="_blank"
            onClick={trackOnClick({ pos: 'request-audit' })}
          >
            Telegram!
          </Link>
        </p>
      </header>
      <Widget
        id="dIBgh4QR"
        className="mx-2 -mt-36 shadow rounded sm:mx-auto sm:max-w-xl"
        autoResize="700, 1200"
        disableScroll
        hideHeaders
        hideFooter
        inlineOnMobile
      />
    </section>
  )
}

export default RequestAudit
