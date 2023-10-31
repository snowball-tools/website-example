import Image from 'next/image';
import { Testimonial } from './TestimonialWall';

type TestimonialCardProps = {
  data: Testimonial;
  className?: string;
};

const TestimonialCard = ({ data, className }: TestimonialCardProps) => {
  return (
    <div className={`${className} border p-6 rounded-3xl bg-white`}>
      <p className="mb-8 sm:mb-6">“{data.message}”</p>
      <div className="flex gap-3 items-center">
        <div className="">
          <Image src={`/avatar/${data.avatar}`} alt={data.name} width={32} height={32} />
        </div>
        <div className="flex flex-col text-sm">
          <p className="font-bold">{data.name}</p>
          <p className="font-mono font-light">
            {data.title}, {data.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
