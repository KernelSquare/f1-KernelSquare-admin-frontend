import { css } from '@emotion/react'
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

import { BORDERRADIUS, PALETTE } from '@/app/styles/theme'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: '투표를 많이 받은 답변',
		},
	},
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
	labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: labels.map(() => Math.random() * 10000),
			backgroundColor: PALETTE['primary-600'],
		},
	],
}

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
		>
			<Bar options={options} data={data} />
		</div>
	)
}

export default BarGraph
