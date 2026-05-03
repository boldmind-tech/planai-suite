/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@boldmind-tech/ui/dist/index.mjs',
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 80%, 100%': { transform: 'scale(0.7)', opacity: '0.5' },
          '40%':           { transform: 'scale(1)',   opacity: '1' },
        },
      },
      animation: {
        'bounce-dot': 'bounce 1.4s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
