import ThemeProvider from '@/components/ThemeProvider'
import { mono, sans } from '../app/fonts'

export const getLayout = (children: React.ReactNode) => {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className={`${sans.className} antialiased dark:bg-darkNavy-500`}>
        <ThemeProvider defaultTheme="light" attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
