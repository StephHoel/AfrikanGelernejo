/** @type {import('tailwindcss').Config} */
export const purge = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
export const theme = {
  extend: {
    screens: {
      // {'max': '1535px'}

      mini: { min: '0px', max: '280px' }, // galaxy fold
      sm: { min: '281px', max: '320px' }, // mobile small
      lg: { min: '321px', max: '426px' }, // mobile large
      tablet: { min: '427px', max: '768px' },
      laptop: { min: '769px' },
      'no-laptop': { max: '768px' },
    },
    boxShadow: {
      modal: '0 2px 6px rgba(0, 0, 0, 0.3)',
    },
  },
}
