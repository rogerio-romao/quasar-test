/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'base': '#0a0a0f',
        'surface': '#12121a',
        'elevated': '#1a1a2e',
        'forge': '#f0b429',
        'accent': '#6366f1',
        'text-primary': '#e4e4e7',
        'text-secondary': '#a1a1aa',
        'text-muted': '#71717a',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'mono': ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
