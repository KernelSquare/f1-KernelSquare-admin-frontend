/** @jsx jsx */
import './nav.css'

import { css } from '@emotion/react'

import { BORDERRADIUS, PALETTE } from '@/app/styles/theme'

export const Nav = () => {
	return (
		<div
			css={css({
				background: `linear-gradient(0deg, ${PALETTE['primary-1000']}, ${PALETTE['primary-900']})`,
				color: PALETTE['pale-050'],
				height: '96vh',
				width: '230px',
				position: 'fixed',
				top: '0',
				left: '0',
				zIndex: '1',
				display: 'block',
				boxShadow: '0 0 45px 0 rgba(0, 0, 0, .6)',
				borderRadius: `${BORDERRADIUS.medium}`,
				margin: '20px',
			})}
		>
			<div></div>
		</div>
	)
}
