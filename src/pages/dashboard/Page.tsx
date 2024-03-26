import { css } from '@emotion/react'

import BarGraph from './ui/BarGraph'
import BubbleChart from './ui/BubbleChart'
import LocationChart from './ui/LocationChart'
import TimeSeriesChart from './ui/TimeSeriesChart'

function DashboardPage() {
	return (
		<div
			css={css({
				width: '1160px',
				marginLeft: '160px',
				height: 'calc(100vh - 140px)',
			})}
		>
			<div
				css={css({
					display: 'flex',
					justifyContent: 'space-between',
					marginBottom: '10px',
				})}
			>
				<TimeSeriesChart />
				<BarGraph />
			</div>
			<div
				css={css({
					display: 'flex',
					justifyContent: 'space-between',
				})}
			>
				<BubbleChart />
				<LocationChart />
			</div>
		</div>
	)
}

export default DashboardPage
