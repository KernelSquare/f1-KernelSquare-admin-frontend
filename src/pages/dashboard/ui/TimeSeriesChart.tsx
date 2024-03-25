import { css } from '@emotion/react'
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { BORDERRADIUS, PALETTE } from '@/app/styles/theme'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
)

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: '월간 멤버 유입 통계',
		},
	},
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
	labels,
	datasets: [
		{
			label: 'Dataset',
			data: labels.map(() => Math.random() * 10000),
			borderColor: PALETTE['primary-600'],
			backgroundColor: PALETTE['primary-300'],
		},
	],
}

const TimeSeriesChart = () => {
	return (
		<div
			css={css({
				width: '600px',
				height: '280px',
				border: '1px solid',
				borderColor: PALETTE['primary-100'],
				borderRadius: BORDERRADIUS.large,
			})}
		>
			<Line
				options={options}
				data={data}
				css={css({
					marginLeft: '20px',
				})}
			/>
		</div>
	)
}

export default TimeSeriesChart
