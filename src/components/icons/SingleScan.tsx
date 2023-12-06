type IconProps = {
  className?: string
}

const SingleScanIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ''}
    >
      <path
        d="M20.5 8V6C20.5 4.89543 19.6046 4 18.5 4H6.5C5.39543 4 4.5 4.89543 4.5 6V8M20.5 16V18C20.5 19.1046 19.6046 20 18.5 20H6.5C5.39543 20 4.5 19.1046 4.5 18V16M4.5 12L4.5 12.01M8.5 12V12.01M12.5 12V12.01M16.5 12V12.01M20.5 12V12.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SingleScanIcon
