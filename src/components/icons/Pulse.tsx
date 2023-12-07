type IconProps = {
  className?: string
}

const PulseIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ''}
    >
      <path
        d="M2.29834 9.7912H5.22927C5.59284 9.7912 5.91444 9.5555 6.02392 9.20881L8.13876 2.51181C8.2003 2.31693 8.47644 2.31795 8.53655 2.51328L13.1384 17.4692C13.1989 17.666 13.4779 17.665 13.537 17.4678L15.6618 10.3851C15.7676 10.0326 16.092 9.7912 16.46 9.7912H19.3817"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PulseIcon
