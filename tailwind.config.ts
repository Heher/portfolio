import type { Config } from 'tailwindcss';
import * as defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Overpass', 'Almarai', ...defaultTheme.fontFamily.sans],
        sans: ['"Sofia Sans Semi Condensed"', ...defaultTheme.fontFamily.sans],
        timer: ['Courier Prime', 'Almarai', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'nav-background': 'rgb(var(--nav-background) / <alpha-value>)',
        'globe-background': 'rgb(var(--globe-background) / <alpha-value>)',
        'summer-background': 'rgb(var(--summer-background) / <alpha-value>)',
        'winter-background': 'rgb(var(--winter-background) / <alpha-value>)',
        'better-white': 'rgb(var(--better-white) / <alpha-value>)',
        'gd-background': 'rgb(var(--gd-background) / <alpha-value>)',
        'gd-page-background': 'rgb(var(--gd-page-background) / <alpha-value>)'
      }
    }
  },
  plugins: []
} satisfies Config;
