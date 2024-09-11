import React, { useEffect, useRef, useState } from 'react'

export interface TextSwitchProps {
  onLabel: string
  offLabel: string
  value: boolean
  onChange: (newValue: boolean) => void
  className?: string
}

export const TextSwitch: React.FC<TextSwitchProps> = ({
  onLabel,
  offLabel,
  value: on,
  onChange,
  className,
}) => {
  const [animating, setAnimating] = useState(false)
  const [onLabelWidth, setOnLabelWidth] = useState(0)
  const [offLabelWidth, setOffLabelWidth] = useState(0)
  const onLabelRef = useRef<HTMLSpanElement>(null)
  const offLabelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (onLabelRef.current && offLabelRef.current) {
      setOnLabelWidth(onLabelRef.current.offsetWidth)
      setOffLabelWidth(offLabelRef.current.offsetWidth)
    }
  }, [onLabel, offLabel])

  const handleClick = () => {
    if (!animating) {
      setAnimating(true)
      onChange(!on)
      setTimeout(() => {
        setAnimating(false)
      }, 300)
    }
  }

  const knobPadding = 8

  const switchWidth = onLabelWidth + offLabelWidth + 16 // Add padding
  const knobWidth = (on ? onLabelWidth : offLabelWidth) + knobPadding / 2

  return (
    <div
      className={`flex items-center justify-between bg-dusk-100 dark:bg-gray-900 ${className}`}
      style={{
        width: `${switchWidth}px`,
        height: '32px',
        borderRadius: '16px',
        position: 'relative',
        transition: 'background-color 0.3s',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
      onClick={handleClick}
    >
      <span
        ref={offLabelRef}
        className={`z-10 px-2 ${
          on ? 'text-gray-400 dark:text-dusk-800' : 'text-gray-700 dark:text-dusk-200'
        }`}
        style={{ paddingLeft: knobPadding * 2 }}
      >
        {offLabel}
      </span>
      <span
        ref={onLabelRef}
        className={`z-10 px-2 ${
          on ? 'text-gray-700 dark:text-dusk-200' : 'text-gray-400 dark:text-dusk-800'
        }`}
        style={{ paddingRight: knobPadding * 2 }}
      >
        {onLabel}
      </span>
      <div
        className="bg-white dark:bg-dusk-900/50"
        style={{
          width: `${knobWidth}px`,
          height: '24px',
          borderRadius: '12px',
          position: 'absolute',
          top: '4px',
          left: on ? `${switchWidth - knobWidth - 4}px` : '4px',
          transition: 'left 0.3s, width 0.3s',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        }}
      />
    </div>
  )
}
