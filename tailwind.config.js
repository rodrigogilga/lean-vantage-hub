/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(237, 35%, 26%)',
          foreground: '#ffffff',
        },
        brand: {
          navy: 'hsl(237, 35%, 26%)',
          dark: 'hsl(237, 40%, 17%)',
          mid: 'hsl(240, 36%, 22%)',
          bg: 'hsl(230, 33%, 97%)',
          muted: 'hsl(228, 18%, 93%)',
          border: 'hsl(228, 14%, 89%)',
          text: 'hsl(233, 18%, 34%)',
          textMuted: 'hsl(233, 18%, 42%)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(145deg, hsl(237, 40%, 17%) 0%, hsl(240, 36%, 22%) 60%, hsl(237, 35%, 26%) 100%)',
        'gradient-section': 'linear-gradient(180deg, hsl(230, 33%, 96%) 0%, hsl(230, 33%, 98%) 100%)',
      },
      boxShadow: {
        card: '0 1px 3px 0 hsl(237 35% 26% / 0.04), 0 0 0 1px hsl(228 14% 89% / 0.6)',
        'card-hover': '0 8px 20px -4px hsl(237 35% 26% / 0.10), 0 0 0 1px hsl(228 14% 86% / 0.8)',
        accent: '0 4px 14px -3px hsl(237 35% 26% / 0.18)',
      },
    },
  },
  plugins: [],
}
