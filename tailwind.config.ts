import Typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

// #374151

//
// Exported from https://palettte.app
// You can also copy/paste to import and edit
//
// prettier-ignore
const exportedColors = [
  {
    "paletteName": "Dusk",
    "swatches": [
      {
        "name": "dusk-950",
        "color": "1E2124"
      },
      {
        "name": "dusk-900",
        "color": "4B535F"
      },
      {
        "name": "dusk-800",
        "color": "6A7789"
      },
      {
        "name": "dusk-700",
        "color": "8595AC"
      },
      {
        "name": "dusk-600",
        "color": "97A8BF"
      },
      {
        "name": "dusk-500",
        "color": "A8B8CD"
      },
      {
        "name": "dusk-400",
        "color": "BBC7D8"
      },
      {
        "name": "dusk-300",
        "color": "CED7E3"
      },
      {
        "name": "dusk-200",
        "color": "DEE4ED"
      },
      {
        "name": "dusk-100",
        "color": "EFF2F6"
      },
      {
        "name": "dusk-50",
        "color": "F8FAFB"
      }
    ]
  },
  {
    "paletteName": "Night",
    "swatches": [
      {
        "name": "night-950",
        "color": "05051C"
      },
      {
        "name": "night-900",
        "color": "0C0C26"
      },
      {
        "name": "night-850",
        "color": "101028"
      },
      {
        "name": "night-800",
        "color": "111136"
      },
      {
        "name": "night-700",
        "color": "1D1D52"
      },
      {
        "name": "night-600",
        "color": "32327C"
      },
      {
        "name": "night-500",
        "color": "4B4B9F"
      },
      {
        "name": "night-400",
        "color": "6767BA"
      },
      {
        "name": "night-300",
        "color": "8888D0"
      },
      {
        "name": "night-200",
        "color": "AEAEE6"
      },
      {
        "name": "night-100",
        "color": "CFCFF0"
      },
      {
        "name": "night-50",
        "color": "EDEDF6"
      }
    ]
  }
]

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xss: '384px',
        xs: '480px',
      },
      fontSize: {
        xss: ['0.625rem', '1rem'],
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        // mono: ['var(--font-mono)'],
        ui: ['var(--font-ui)'],
      },
      backgroundImage: {
        'hero-pattern': "url('/misc/hero-pattern.svg')",
        'hero-pattern-dark': "url('/misc/hero-pattern-dark.svg')",
        'dots-pattern-dark': "url('/misc/dots-pattern-dark.svg')",
      },
      colors: {
        sunriseOrange: '#feb34c',
        coralPink: '#ff9f93',
        electricPurple: '#ba2fd2',
        darkNavy: {
          100: '#101028',
          300: '#0c0c26',
          500: '#05051c',
        },
        skyBlue: '#b0c8ff',
        critical: '#9f2121',
        high: '#b2450d',
        medium: '#d6ab16',
        low: '#2d8f60',
        codeQuality: '#8a56c0',
        gasOptimization: '#a32e66',
        ...exportedColors
          .map((c) => c.swatches)
          .reduce((a, b) => a.concat(b))
          .reduce(
            (out, row) => {
              const pieces = row.name.split('-')
              const colorName = pieces.slice(0, pieces.length - 1).join('-')
              const shade = pieces[pieces.length - 1]
              out[colorName] = out[colorName] || {}
              out[colorName][shade] = `#${row.color}`
              return out
            },
            {} as Record<string, Record<string, string>>,
          ),
      },
    },
  },
  plugins: [Typography],
}
export default config
