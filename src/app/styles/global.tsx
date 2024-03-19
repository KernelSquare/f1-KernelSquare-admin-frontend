import { css, Global } from '@emotion/react'

const GlobalStyles = () => {
	const globalStyle = css`
		body {
			font-family: 'Noto Sans KR', sans-serif;
			background-color: black;
			color: white;
		}
	`

	return <Global styles={globalStyle} />
}

export default GlobalStyles
