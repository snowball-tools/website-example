type IconProps = {
  className?: string
}

const OpenLinkIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className || ''}
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_2414_2861)">
        <path
          d="M8.00016 3.33334H2.3335C1.78121 3.33334 1.3335 3.78106 1.3335 4.33334V13.6667C1.3335 14.219 1.78121 14.6667 2.3335 14.6667H11.6668C12.2191 14.6667 12.6668 14.219 12.6668 13.6667V8.00001"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M6.66699 9.33334L14.667 1.33334" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.3335 1.33334H14.6668V6.66668" stroke="currentColor" strokeWidth="1.5" />
      </g>
    </svg>
  )
}

export default OpenLinkIcon
