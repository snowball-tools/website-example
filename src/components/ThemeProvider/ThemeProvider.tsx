'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { usePathname } from 'next/navigation'

type ThemeProviderProps = Parameters<typeof NextThemesProvider>[0]

const getForcedTheme = (pathname: string) => {
  if (pathname == '/gas-hero') return 'dark'
}

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  let forcedTheme = getForcedTheme(usePathname())
  return (
    <NextThemesProvider {...props} forcedTheme={forcedTheme}>
      {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider
