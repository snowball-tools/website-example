type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const BorderCard = ({ className, children }: CardProps) => {
  return <div className={`${className} p-4 bg-white triple-border`}>{children}</div>;
};

export default BorderCard;
