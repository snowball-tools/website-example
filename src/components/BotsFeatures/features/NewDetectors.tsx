import Image from 'next/image';

type NewDetectorsProps = {
  className?: string;
};

const NewDetectors = ({ className }: NewDetectorsProps) => {
  return <Image className={className} src="/misc/new-detectors.png" alt="New Detectors" width={350} height={350} />;
};

export default NewDetectors;
