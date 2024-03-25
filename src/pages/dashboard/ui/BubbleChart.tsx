import { css } from '@emotion/react'
import * as d3 from 'd3'
import { useLayoutEffect } from 'react'

import { BORDERRADIUS, FONTSIZE, PALETTE } from '@/app/styles/theme'
import BubbleChartComponent from '@/widgets/Charts/BubbleChart'

const BubbleChart = () => {
	useLayoutEffect(() => {
		d3.selectAll('.value-text').attr('y', () => 30)
		d3.selectAll('.bubble-chart').attr('transform', 'translate(20, -15)')
		d3.selectAll('.legend').attr('transform', 'translate(440, 10)')
	}, [])

	return (
		<div
			css={css({
				width: '600px',
				height: '320px',
				border: '1px solid',
				borderColor: PALETTE['primary-100'],
				borderRadius: BORDERRADIUS.large,
			})}
		>
			<div
				css={css({
					fontSize: FONTSIZE.xsmall,
					marginTop: '5px',
				})}
			>
				채택된 기술 스택 순위
			</div>
			<BubbleChartComponent
				graph={{
					zoom: 0.7,
					offsetX: -0.05,
					offsetY: 1,
				}}
				width={640}
				height={280}
				overflow={true}
				padding={10} // optional value, number that set the padding between bubbles
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
					{ label: 'Commerce', value: 1 },
					{ label: 'AI', value: 3 },
					{ label: 'Management', value: 5 },
					{ label: 'Commerce', value: 1 },
					{ label: 'AI', value: 3 },
					{ label: 'Mobile', value: 9 },
					{ label: 'Conversion', value: 9 },
				]}
			/>
		</div>
	)
}

export default BubbleChart
