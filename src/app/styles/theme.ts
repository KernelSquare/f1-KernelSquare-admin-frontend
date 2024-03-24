export const PALETTE = {
	// primary
	'primary-050': '#EDFEFF',
	'primary-100': '#DDF5F6',
	'primary-200': '#C4F0F2',
	'primary-300': '#9DDFE2',
	'primary-400': '#8CC9CC',
	'primary-500': '#76ABAE',
	'primary-600': '#5A9296',
	'primary-700': '#487A7E',
	'primary-800': '#376265',
	'primary-900': '#244C4E',
	'primary-1000': '#153637',

	// pale
	'pale-050': '#F4F4F4',
	'pale-100': '#EEEEEE',
	'pale-200': '#E4E4E4',
	'pale-300': '#D9D9D9',
	'pale-400': '#C6C6C6',
	'pale-500': '#B1B1B1',

	// dark
	'dark-050': '#17494B',
	'dark-100': '#194244',
	'dark-200': '#153637',
	'dark-300': '#122D2E',
	'dark-400': '#0C2525',
	'dark-500': '#041B1B',
	'dark-600': '#020F0F',
}

export const SPACING = {
	none: '0px',
	xsmall: '2px',
	small: '4px',
	base: '8px',
	medium: '12px',
	large: '16px',
	xlarge: '20px',
	'2xlarge': '24px',
	'3xlarge': '32px',
	'4large': '40px',
	'5xlarge': '48px',
}

export const BORDERWIDTH = {
	none: '0px',
	thinner: '0.5px',
	thin: '1px',
	thick: '1.5px',
	thicker: '2px',
}

export const BORDERRADIUS = {
	none: '0px',
	xsmall: '2px',
	small: '4px',
	medium: '6px',
	large: '8px',
	xlarge: '12px',
	'2xlarge': '16px',
	circle: '1000px',
}

export const FONTSIZE = {
	xsmall: '12px',
	small: '14px',
	base: '16px',
	large: '18px',
	xlarge: '20px',
	'2xlarge': '24px',
	'3xlarge': '30px',
	'4xlarge': '36px',
	'5xlarge': '48px',
	'6xlarge': '60px',
}

export const FONTWEIGHT = {
	thin: 100,
	extralight: 200,
	light: 300,
	normal: 400,
	medium: 500,
	semibold: 600,
	bold: 700,
	extrabold: 800,
	black: 900,
}

export const LINEHEIGHT = {
	xsmall: '14px',
	small: '16px',
	base: '20px',
	large: '24px',
	xlarge: '28px',
	'2xlarge': '32px',
	'3xlarge': '36px',
	'4xlarge': '40px',
	'5xlarge': '48px',
	'6xlarge': '60px',
}

const theme = {
	// color
	selectedTab: {
		color: 'white',
		background: PALETTE['primary-1000'],
		hoverBackground: PALETTE['pale-050'],
		hoverOpacity: '18%',
	},
	// size
	l_displayLarge: {
		fontSize: FONTSIZE['6xlarge'],
		lineHeight: LINEHEIGHT['6xlarge'],
	},
	l_displayMedium: {
		fontSize: FONTSIZE['5xlarge'],
		lineHeight: LINEHEIGHT['5xlarge'],
	},
	l_displaySmall: {
		fontSize: FONTSIZE['4xlarge'],
		lineHeight: LINEHEIGHT['4xlarge'],
	},
	l_headingLarge: {
		fontSize: FONTSIZE['3xlarge'],
		lineHeight: LINEHEIGHT['3xlarge'],
	},
	l_headingMedium: {
		fontSize: FONTSIZE['2xlarge'],
		lineHeight: LINEHEIGHT['2xlarge'],
	},
	l_headingSmall: {
		fontSize: FONTSIZE['xlarge'],
		lineHeight: LINEHEIGHT['xlarge'],
	},
	l_bodyLarge: {
		fontSize: FONTSIZE['large'],
		lineHeight: LINEHEIGHT['large'],
	},
	l_bodyMedium: {
		fontSize: FONTSIZE['base'],
		lineHeight: LINEHEIGHT['base'],
	},
	l_bodySmall: {
		fontSize: FONTSIZE['small'],
		lineHeight: LINEHEIGHT['small'],
	},
	l_bodyXSmall: {
		fontSize: FONTSIZE['xsmall'],
		lineHeight: LINEHEIGHT['xsmall'],
	},
}

export default theme
