import Image from 'next/image'
import { Testimonial } from './TestimonialWall'

type TestimonialCardProps = {
  data: Testimonial
  className?: string
}

const TestimonialCard = ({ data, className }: TestimonialCardProps) => {
  return (
    <div
      className={`${className} border p-6 rounded-3xl bg-white dark:bg-darkNavy-100 dark:border-gray-800`}
    >
      <p className="mb-8 sm:mb-6" dangerouslySetInnerHTML={{ __html: `“${data.message}”` }}></p>
      <div className="flex gap-3 items-center">
        <div className="">
          <Image
            src={`/avatar/${data.avatar}`}
            alt={data.name}
            className="rounded-full border border-gray-300"
            width={32}
            height={32}
          />
        </div>
        <div className="flex flex-col text-sm">
          <p className="font-bold">{data.name}</p>
          <p className="font-mono font-light dark:text-gray-500">
            {data.title}, {data.company}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
