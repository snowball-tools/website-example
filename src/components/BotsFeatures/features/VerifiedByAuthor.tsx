import Image from 'next/image'

type VerifiedByAuthorProps = {
  className?: string
}

const VerifiedByAuthor = ({ className }: VerifiedByAuthorProps) => {
  return (
    <Image
      className={className}
      src="/misc/verified-by-author.jpg"
      alt="Verified by Author"
      width={500}
      height={500}
    />
  )
}

export default VerifiedByAuthor
