import Image from 'next/image'

type ProprietaryDetectorsProps = {
  className?: string
}

const ProprietaryDetectors = ({ className }: ProprietaryDetectorsProps) => {
  return (
    <Image
      className={className}
      src="/misc/proprietary-detectors.svg"
      alt="Proprietary Detectors"
      width={500}
      height={500}
    />
  )
}

export default ProprietaryDetectors
