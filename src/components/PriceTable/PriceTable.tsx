import { BorderCard } from '../Card';
import { CtaPrimary } from '../Cta';

const PriceTable = () => {
  return (
    <section className="bg-[#fbf5fe] px-4 py-8 mx-2 my-12 rounded-3xl sm:px-8 sm:my-24 lg:max-w-4xl lg:mx-auto">
      <BorderCard className="p-2 text-center max-w-[320px] mx-auto sm:p-6">
        <h1 className="font-bold text-2xl mb-3 sm:text-3xl sm:mb-4">
          Simple <span className="gradient-text">Pricing</span>
        </h1>
        <p className="font-mono text-3xl mb-3">$195/m</p>
        <span className="text-gray-600 block mb-3 sm:mb-6">Per repository</span>
        <CtaPrimary className="flex gap-2 justify-center text-sm" href="#" icon="/icons/github.svg">
          Try it with a Free Scan
        </CtaPrimary>
      </BorderCard>
    </section>
  );
};

export default PriceTable;
5;
