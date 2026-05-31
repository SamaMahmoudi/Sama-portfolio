import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f5f6f8',
        surface: '#ffffff',
        ink: '#101418',
        'ink-soft': '#5a6570',
        line: '#e7eaef',
        primary: '#00b5dd',
        'primary-ink': '#06323d',
        accent: '#0091b8',
        violet: '#6d28d9',
      },
      fontFamily: {
        name: ['Fredoka', 'sans-serif'],
        display: ['Fredoka', 'sans-serif'],
        body: ['Fredoka', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config;
