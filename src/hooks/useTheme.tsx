import { useTheme as useNextTheme } from 'next-themes'

const useTheme = () => {
  const { theme, forcedTheme } = useNextTheme()
  return forcedTheme || theme
}

export default useTheme
