import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0rem',
        lg: '0rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '840px',
        md: '968px',
        lg: '1110px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    container2: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0rem',
        lg: '0rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '840px',
        md: '968px',
        lg: '968px',
        xl: '968px',
        '2xl': '968px',
      },
    },
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#0e90c2',
        blue: {
          100: '#D9D9D9',
          200: '#012e58',
          250: '#003465',
          300: '#DEF6FF',
          400: '#F5F8FE',
        },
        gray: {
          100: '#89939E',
          150: '#677182',
          200: '#212121',
          250: '#44444A',
        },
        dark: {
          600: '#101110',
        },
      },

      backgroundImage: {
        'banner-img': "url('/image/banner-image2.png')",
        'banner-img2': "url('/image/detail.png')",
      },

      animation: {
        'loop-scroll': 'loop-scroll 20s linear infinite',
        loader: 'loader 10s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        loader: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
