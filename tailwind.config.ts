import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      backgroundImage: {
        'hero-pattern': "url('/misc/hero-pattern.svg')",
      },
      colors: {
        sunriseOrange: '#feb34c',
        coralPink: '#ff9f93',
        electricPurple: '#ba2fd2',
        darkNavy: '#05051e',
        skyBlue: '#b0c8ff',
        critical: '#9f2121',
        high: '#b2450d',
        medium: '#d6ab16',
        low: '#2d8f60',
        codeQuality: '#8a56c0',
        gasOptimization: '#a32e66',
      },
    },
  },
  plugins: [],
}
export default config
