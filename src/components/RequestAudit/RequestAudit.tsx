import Link from 'next/link';
import { BorderCard } from '../Card';
import { CtaPrimary } from '../Cta';

type RequestAuditProps = {
  auditForm: React.RefObject<HTMLElement>;
};

const RequestAudit = ({ auditForm }: RequestAuditProps) => {
  return (
    <section ref={auditForm} id="request-audit" className="px-2 mb-20 sm:max-w-5xl sm:mx-auto">
      <header className="bg-[#fdf5f5] px-6 pt-6 pb-44 rounded-3xl text-center sm:px-44 sm:pt-12 ">
        <h1 className="font-mono text-2xl text-gray-600 mb-4 sm:text-4xl sm:mb-6">
          Request an <span className="gradient-text">Audit!</span>
        </h1>
        <p className="sm:max-w-[400px] mx-auto">
          We respond fast! Fill out the form below and our team will reach out to you within 24 hours. You can chat directly
          with us on{' '}
          <Link className="underline underline-offset-2" href="https://t.me/haileybf" target="_blank">
            Telegram!
          </Link>
        </p>
      </header>

      <BorderCard className="p-6 mx-5 -mt-36 sm:p-12 m-auto tex-left sm:mx-auto sm:max-w-xl">
        <form className="flex flex-col gap-6">
          <div>
            <label className="block uppercase text-sm font-mono mb-2">Your Name</label>
            <input className="block border rounded-lg p-3 w-full" type="text" placeholder="example: Harsh Patel" />
          </div>

          <div>
            <label className="block uppercase text-sm font-mono mb-2">Email</label>
            <input className="block border rounded-lg p-3 w-full" type="email" placeholder="harsh@0xmacro.com" />
          </div>

          <div>
            <label className="block uppercase text-sm font-mono mb-2">Message</label>
            <textarea className="block border rounded-lg p-3 w-full" placeholder="Your message goes here..." />
          </div>

          <div className="flex gap-5 sm:gap-4">
            <input type="checkbox" id="agreeTerms" className="inline-block" />
            <label htmlFor="agreeTerms" className="text-sm sm:text-base">
              <span>I agree with the</span>
              <Link href="#" className="underline ml-1" target="_blank">
                Terms of Use
              </Link>
              <span className="ml-1">and</span>
              <Link href="#" className="underline ml-1" target="_blank">
                Privacy Policy
              </Link>
            </label>
          </div>

          <div>
            <CtaPrimary className="" href="#">
              Request an Audit
            </CtaPrimary>
          </div>
        </form>
      </BorderCard>
    </section>
  );
};

export default RequestAudit;
