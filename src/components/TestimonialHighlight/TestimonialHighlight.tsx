import Image from 'next/image';

const TestimonialHighlight = () => {
  return (
    <section className="bg-[#fbf5fe] px-6 py-6 m-2 mb-12 rounded-3xl sm:flex sm:justify-between sm:align-middle sm:gap-20 sm:pr-0 sm:px-12 sm:py-12 lg:max-w-5xl lg:mx-auto">
      <div className="divide-y divide-gray-200 sm:max-w-sm">
        <blockquote>
          <p className="font-bold text-2xl mb-4 lg:text-3xl">
            “Macro engineers are personable, professional, and experienced.”
          </p>
          <p className="text-gray-600">
            Macro's auditing helps us be more confident that our code deployments meet our security standards. Macro
            engineers are personable, professional, and experienced.
          </p>
        </blockquote>

        <div className="mt-5 pt-5 flex items-center gap-4">
          <div>
            <Image src="/avatar/sam-kazemian.png" alt="Sam Kazemian" width={32} height={32} />
          </div>
          <div>
            <p className="text-sm">
              <span className="font-bold">Sam Kazemian</span> <span className="hidden text-gray-400 sm:inline">|</span>{' '}
              <span className="font-mono font-light block sm:inline">Founder, Frax Finance</span>
            </p>
            <Image className="mt-2" src="/clients/frax.svg" alt="Frax Finance" width={50} height={37} />
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        <Image
          src="/misc/issue-descriptions-and-recommendations.png"
          alt="A list of issue descriptions and recommendations"
          width={450}
          height={450}
        />
      </div>
    </section>
  );
};

export default TestimonialHighlight;
