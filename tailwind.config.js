/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	daisyui: {
	  themes: [
		{
		  colors: {
			primary: '#8ACBCE',
			secondary: '#1e6c96',
			
		  },
		  extend: {
			fontFamily: {
			  garamond: ['Cormorant Garamond', 'serif'],
			},
		  },
		},
	  ],
	},
	plugins: [require('daisyui')],
  };
  