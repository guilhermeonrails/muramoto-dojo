/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'oklch(0.985 0.002 80)',
        fog: 'oklch(0.955 0.003 70)',
        mist: 'oklch(0.90 0.004 60)',
        stone: 'oklch(0.46 0.006 45)',
        ink: 'oklch(0.21 0.008 45)',
        graphite: 'oklch(0.26 0.008 40)',
        sumi: 'oklch(0.15 0.006 40)',
        seal: {
          DEFAULT: 'oklch(0.47 0.15 27)',
          bright: 'oklch(0.56 0.17 28)',
        },
        wood: 'oklch(0.62 0.055 60)',
      },
      fontFamily: {
        display: ['"Zen Old Mincho"', 'Georgia', 'serif'],
        sans: ['"Zen Kaku Gothic New"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 5.5vw, 5rem)', { lineHeight: '1.04', letterSpacing: '-0.01em' }],
        h2: ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.005em' }],
        h3: ['clamp(1.3rem, 2.2vw, 1.7rem)', { lineHeight: '1.2' }],
        lead: ['clamp(1.125rem, 1.6vw, 1.375rem)', { lineHeight: '1.6' }],
        label: ['0.8125rem', { lineHeight: '1', letterSpacing: '0.14em' }],
      },
      maxWidth: {
        container: '76rem',
        prose: '68ch',
      },
      spacing: {
        section: 'clamp(5rem, 12vh, 9rem)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      zIndex: {
        nav: '50',
        overlay: '60',
        modal: '70',
      },
      letterSpacing: {
        widelabel: '0.14em',
      },
      keyframes: {
        'hero-veil': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'draw-line': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}
