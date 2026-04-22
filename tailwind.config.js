/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:          'var(--color-bg)',
        surface:     'var(--color-surface)',
        border:      'var(--color-border)',
        text:        'var(--color-text)',
        muted:       'var(--color-muted)',
        accent:      'var(--color-accent)',
        'accent-lt': 'var(--color-accent-lt)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
