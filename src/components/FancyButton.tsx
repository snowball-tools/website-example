import * as React from 'react'

type Props = {
  className?: string
  as?: 'button' | 'a'
  href?: string
  target?: string
  onClick?: () => void
}

export const FancyButton = ({
  className = '',
  as = 'button',
  children,
  ...props
}: React.PropsWithChildren<Props>) => {
  const [aspectRatio, setAspectRatio] = React.useState(1)

  const ref = React.useRef<any>(null)

  React.useEffect(() => {
    if (ref.current) {
      setAspectRatio(ref.current.clientWidth / ref.current.clientHeight)
    }
  }, [])

  const Component = as === 'a' ? 'a' : 'button'

  return (
    <Component
      {...props}
      ref={ref}
      className={`FancyButton group relative appearance-none w-max min-w-[8rem] overflow-hidden m-[calc(var(--button-border-width)*-1)] p-[--button-border-width] rounded-[--button-radius] bg-neutral-200 dark:bg-dusk-800 select-none focus:outline-none shadow-sm transition-[filter] motion-safe:transition-[color,filter,transform] motion-safe:duration-[--button-transition-duration] motion-safe:ease-in-out will-change-transform [--button-disco-cw-state:running] [--button-disco-cw-opacity:0.5] [--button-disco-cw-gradient-stops:#833ab4,#fd1d1d,#fcb045] [--button-disco-cw-opacity-enabled:var(--button-disco-cw-opacity,1)] [--button-disco-acw-opacity-enabled:var(--button-disco-acw-opacity,1)] [--button-disco-cw-state-enabled:--button-disco-cw-state] [--button-disco-acw-state-enabled:--button-disco-acw-state] ${className}`}
      style={{
        ['--button-aspect-ratio' as string]: aspectRatio,
      }}
    >
      <div className="relative inline-flex items-center justify-center rounded-[calc(var(--button-radius)-var(--button-border-width))] bg-gradient-to-tr from-lo-contrast to-neutral-50 dark:to-neutral-100 bg-white group-hover:bg-opacity-75 dark:bg-dusk-900/50 w-full px-4 py-2 z-10">
        {children}
      </div>
      <span aria-hidden className="FancyButton__disco" />
    </Component>
  )
}
