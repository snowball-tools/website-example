type IconProps = {
  className?: string
}

const GasIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ''}
    >
      <path
        d="M5.60002 31.86V1.69995H26V20.4M5.60002 31.86H3.90002M5.60002 31.86H26M27.0867 31.86H26M26 31.86V20.4M26 20.4H29.4V25.5H32.8V10.2H29.4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4 20.3734L15.8756 15.2999L19.2 20.3734L15.8756 22.0999L12.4 20.3734Z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15.8 27.1999L11.55 23.7999L15.8 25.8718L20.05 23.7999L15.8 27.1999Z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14.6569 11.2047C13.6303 11.6434 13.0243 12.6415 12.8228 13.1956H10.7001V6.79993H20.9001V13.1956H18.612C18.2812 12.4329 17.217 10.924 15.6071 10.9902C15.2579 11.0045 14.9413 11.0831 14.6569 11.2047ZM14.6569 11.2047L13.2501 9.34993"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default GasIcon
