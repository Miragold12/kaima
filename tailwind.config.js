/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{html,js,jsx}',
		'./src/**/*.{html,js,jsx}',
		'./pages/**/*.{html,js,jsx}',
		'./components/**/*.{html,js,jsx}',
		'./sections/**/*.{html,js,jsx}',
		'./styles/**/*.{js,jsx}'
	],
	mode: 'jit',
	theme: {
		fontFamily: {
			personal: ['personal', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
			eb: ['EB Garamond', 'sans-serif']
		},
		extend: {
			colors: {
				pri: '#0693e3',
				'pri-dark': '#13287d',
				sec: '#F1890E',

				'nav-txt': '#251605',
				txt: '#110200',
				'txt-fade': '#11020082',
				'txt-fade-light': '#11020033',

				'txt-white-fade': '#f5f5f587',
				'txt-white': '#f5f5f5',
				'txt-hover': '#251605',

				layer: 'rgba(19, 40, 125, 0.55)'
			},
			transitionTimingFunction: {
				'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)'
			},
			keyframes: {
				'trans-right': {
					'0%, 100%': { transform: 'translateX(10px)' },
					'50%': { transform: 'translateX(0)' }
				}
			},
			animation: {
				'trans-right': 'trans-right 1.5s ease-in-out infinite'
			},

			boxShadow: {
				xl: '0px 1px 3px rgba(63, 63, 68, 0.15), 0px 0px 0px 1px rgba(63, 63, 68, 0.05)',
				'2xl': '0px 0px 0px 1px rgba(63, 63, 68, 0.05)',
				btn: ' 0px 3px 4px 0px #a55f0a59'
			},
			gridTemplateColumns: {
				booking: 'repeat(4, 329px)'
			}
		}
	},
	plugins: []
};
