/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        'primary-dark': '#1E1B4B',
        'sidebar-bg': '#1E1B4B',
        'sidebar-hover': '#2D2A5B',
        'sidebar-active': '#4F46E5',
        'card-border': '#E5E7EB',
        'text-muted': '#6B7280',
        'text-primary': '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};