import { css } from '@emotion/react'

import { BORDERRADIUS, FONTSIZE, PALETTE } from '@/app/styles/theme'

const LocationChart = () => {
	return (
		<div
			css={css({
				width: '548px',
				height: '320px',
				border: '1px solid',
				borderColor: PALETTE['primary-100'],
				borderRadius: BORDERRADIUS.large,
			})}
		>
			<div
				css={css({
					fontSize: FONTSIZE.xsmall,
					margin: '5px 0',
					color: PALETTE['pale-500'],
				})}
			>
				모각코 장소 순위 TOP5
			</div>
			<div
				css={css({
					display: 'flex',
					justifyContent: 'top',
					alignItems: 'center',
					flexDirection: 'column',
					height: '300px',
					overflow: 'auto',
				})}
			>
				<div
					css={css({
						display: 'flex',
						justifyContent: 'space-between',
						width: '80%',
						padding: '10px 20px',
						background: PALETTE['primary-600'],
						borderRadius: BORDERRADIUS.large,
					})}
				>
					<div>1. 봉은사 찻집</div>
					<div>10회</div>
				</div>
			</div>
		</div>
	)
}

export default LocationChart
