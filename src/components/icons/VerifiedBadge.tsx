type IconProps = {
  className?: string
}

const VerifiedBadge = ({ className }: IconProps) => {
  return (
    <svg viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle
        cx="8.49992"
        cy="12.5417"
        r="0.708333"
        transform="rotate(-180 8.49992 12.5417)"
        fill="currentColor"
      />
      <path
        d="M7.34598 2.17447L3.77718 3.83658C2.7449 4.31734 2.06368 5.39399 2.12937 6.57573C2.38617 11.1957 3.67724 13.2296 7.03204 15.6097C7.92077 16.2402 9.09225 16.2417 9.98033 15.6102C13.3454 13.2172 14.5903 11.1545 14.8697 6.59173C14.9425 5.40218 14.2602 4.3141 13.2207 3.82999L9.66608 2.17447C8.92754 1.83051 8.08452 1.83051 7.34598 2.17447Z"
        fill="currentColor"
      />
      <path
        d="M11.2461 6.60262L7.58457 10.2642L6.1897 8.86929"
        stroke="#2D8F60"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default VerifiedBadge
