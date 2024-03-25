import { css } from '@emotion/react'
import * as d3 from 'd3'
import { useLayoutEffect } from 'react'

import { BORDERRADIUS, PALETTE } from '@/app/styles/theme'
import BubbleChartComponent from '@/widgets/Charts/BubbleChart'

const BubbleChart = () => {
	useLayoutEffect(() => {
		d3.selectAll('.value-text').attr('y', () => 30)
	}, [])

	return (
		<div
			css={css({
				width: '668px',
				height: '320px',
				border: '1px solid',
				borderColor: PALETTE['primary-100'],
				borderRadius: BORDERRADIUS.large,
			})}
		>
			<BubbleChartComponent
				width={500}
				height={400}
				overflow={true}
				padding={0} // optional value, number that set the padding between bubbles
				showLegend={true} // optional value, pass false to disable the legend.
				showValue={true}
				legendPercentage={30} // number that represent the % of with that legend going to use.
				legendFont={{
					family: 'Arial',
					size: 12,
					color: '#FFF',
					weight: 'bold',
				}}
				valueFont={{
					family: 'Arial',
					size: 12,
					color: '#fff',
					weight: 'bold',
					lineHeight: '40px',
				}}
				labelFont={{
					family: 'Arial',
					size: 12,
					color: '#fff',
					weight: 'bold',
				}}
				data={[
					{ label: 'CRM', value: 10 },
					{ label: 'API', value: 1 },
					{ label: 'Data', value: 1 },
					{ label: 'Commerce', value: 1 },
					{ label: 'AI', value: 3 },
					{ label: 'Management', value: 5 },
					{ label: 'Testing', value: 6 },
					{ label: 'Mobile', value: 9 },
					{ label: 'Conversion', value: 9 },
				]}
			/>
		</div>
	)
}

export default BubbleChart
