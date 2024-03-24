import { css, Global } from '@emotion/react'

import { PALETTE } from './theme'

const GlobalStyles = () => {
	const globalStyle = css`
		body {
			font-family: 'Noto Sans KR', sans-serif;
			background-color: ${PALETTE['dark-600']};
			color: white;
		}

		ul {
			list-style: none;
		}
	`

	return <Global styles={globalStyle} />
}

export default GlobalStyles
