import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1a2d4a',
        graphite: '#3d3d3d',
        charcoal: '#2b2b2b',
        'light-steel': '#b8bcc4',
        'warm-sand': '#d4c5a9',
        teal: '#1e7b7c',
        'teal-dark': '#155859',
        'teal-darkest': '#0d3d3e',
        'off-white': '#f5f5f5',
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '40px',
        '2xl': '48px',
        '3xl': '60px',
        '4xl': '80px',
        '5xl': '96px',
        '6xl': '120px',
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '1.4' }],
        'sm': ['13px', { lineHeight: '1.6' }],
        'base': ['15px', { lineHeight: '1.7' }],
        'lg': ['16px', { lineHeight: '1.7' }],
        'xl': ['18px', { lineHeight: '1.6' }],
        '2xl': ['20px', { lineHeight: '1.3' }],
        '3xl': ['24px', { lineHeight: '1.2' }],
        '4xl': ['32px', { lineHeight: '1.2' }],
        '5xl': ['36px', { lineHeight: '1.2' }],
        '6xl': ['44px', { lineHeight: '1.2' }],
        '7xl': ['52px', { lineHeight: '1.2' }],
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0,0,0,0.08)',
        md: '0 4px 12px rgba(0,0,0,0.12)',
        lg: '0 4px 16px rgba(0,0,0,0.12)',
        dark: '0 4px 12px rgba(0,0,0,0.25)',
      },
      borderRadius: {
        'sm': '4px',
      },
    },
  },
  plugins: [],
}

export default config
