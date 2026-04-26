/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f9f0ff',
          100: '#f0daff',
          200: '#e0b5ff',
          300: '#cc89ff',
          400: '#b55cff',
          500: '#9B00FF',
          600: '#8200e0',
          700: '#6B00C8',
          800: '#5200a0',
          900: '#3a006b',
        },
        gold: {
          100: '#fff8e1',
          400: '#e8b84b',
          500: '#d4a017',
          700: '#b8860b',
        },
        surface: {
          50:  '#faf9fc',
          100: '#f4f0f8',
          200: '#e8e0f0',
          300: '#d4c8e4',
          400: '#b8a8d0',
          500: '#9a88b8',
          600: '#7a6a99',
          700: '#5a4a78',
          800: '#3d2b5e',
          900: '#1e1230',
          950: '#0f091a',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-med': 'float 6s ease-in-out infinite 2s',
        'float-fast': 'float 5s ease-in-out infinite 1s',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
};
