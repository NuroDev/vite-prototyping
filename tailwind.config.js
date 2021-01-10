module.exports = {
	darkMode: false,
	future: {
		defaultLineHeights: true,
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true,
		standardFontWeights: true,
	},
	plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'./index.html',
			'./src/**/*.{vue,js,ts,jsx,tsx}',
		],
	},
}
