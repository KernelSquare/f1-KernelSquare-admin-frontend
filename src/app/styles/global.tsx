import { extendTheme } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'

const globalStyle = css`
	body {
		font-family: 'Noto Sans KR', sans-serif;
		background-color: '#293333';
		color: white;
	}
	ul {
		list-style: none;
	}
`

const GlobalStyles = () => {
	return <Global styles={globalStyle} />
}

export const ChakraGlobalStyles = extendTheme({
	styles: {
		global: {
			html: { height: 'full' },
			body: {
				fontFamily: 'Noto Sans KR, sans-serif',
				backgroundColor: '#293333',
				color: 'white',
			},
			ul: {
				listStyle: 'none',
			},
		},
	},
})

export default GlobalStyles
