import { css } from '@emotion/react'

import { BORDERRADIUS, PALETTE } from '@/app/styles/theme'

const BarGraph = () => {
	return (
		<div
			css={css({
				width: '548px',
				height: '280px',
				border: '1px solid',
				borderColor: PALETTE['primary-100'],
				borderRadius: BORDERRADIUS.large,
			})}
		></div>
	)
}

export default BarGraph
