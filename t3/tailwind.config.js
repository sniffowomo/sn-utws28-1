/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '300% 300%',
            'background-position': 'left center',
          },
          '25%': {
            'background-size': '500% 500%',
            'background-position': 'right center',
          },
          '50%': {
            'background-size': '800% 800%',
            'background-position': 'right top',
          },
          '75%': {
            'background-size': '200% 200%',
            'background-position': 'left top',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
