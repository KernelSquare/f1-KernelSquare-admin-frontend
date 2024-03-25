import { css } from '@emotion/react'
import { create } from 'zustand'

import { FONTSIZE, PALETTE } from '@/app/styles/theme'

import { Button } from '../Button/Button'
import Icon from '../Icons/Icon'

type PanigationProps = {
	totalData: number
	dataLimit: number
}

type PaginationStoreType = {
	curPage: number
	// eslint-disable-next-line no-unused-vars
	incPage: (page: number) => void
	// eslint-disable-next-line no-unused-vars
	decPage: (page: number) => void
	// eslint-disable-next-line no-unused-vars
	setPage: (page: number) => void
}

const usePaginationStore = create<PaginationStoreType>(set => ({
	curPage: 1,
	incPage: (page: number) => set(state => ({ curPage: state.curPage + page })),
	decPage: (page: number) => set(state => ({ curPage: state.curPage - page })),
	setPage: (page: number) => set(() => ({ curPage: page })),
}))

const Pagination = ({ totalData, dataLimit }: PanigationProps) => {
	const pageCount = Math.ceil(totalData / dataLimit)
	const { curPage, incPage, decPage } = usePaginationStore()
	const buttonStyle = css({
		border: 'none',
		width: '32px',
		height: '32px',
		backgroundColor: PALETTE['dark-050'],
		color: PALETTE['pale-050'],
		fontSize: FONTSIZE.xsmall,
		'&[disabled]': {
			backgroundClip: PALETTE['pale-200'],
		},
		'&[aria-current]': {
			backgroundColor: PALETTE['pale-050'],
			transitionDuration: '0.1s',
			color: PALETTE['primary-600'],
		},
		display: 'flex',
	})

	return (
		<div
			css={css({
				display: 'flex',
				justifyItems: 'center',
				alignItems: 'center',
				gap: '12px',
				width: 'full',
				margin: '30px auto',
			})}
		>
			<Button
				onClick={() => decPage(curPage - (curPage - 1))}
				disabled={curPage === 1}
				buttonStyle={buttonStyle}
			>
				<Icon iconName="arrowBack" iconSizeKey="small" />
				<Icon iconName="arrowBack" iconSizeKey="small" />
			</Button>
			<Button
				onClick={() => decPage(curPage - 1)}
				disabled={curPage === 1}
				buttonStyle={buttonStyle}
			>
				<Icon iconName="arrowBack" iconSizeKey="medium" />
			</Button>
			<div
				css={css({
					display: 'flex',
					justifyItems: 'center',
					alignItems: 'center',
					gap: '12px',
				})}
			>
				{Array(pageCount)
					.fill(undefined)
					.map((_, i) => (
						<Button
							key={i + 1}
							onClick={() => incPage(i + 1)}
							aria-current={curPage === i + 1 ? 'page' : null}
							buttonStyle={buttonStyle}
						>
							{i + 1}
						</Button>
					))}
			</div>
			<Button
				onClick={() => incPage(curPage + 1)}
				disabled={curPage === pageCount}
				buttonStyle={buttonStyle}
			>
				<Icon iconName="arrowForward" iconSizeKey="medium" />
			</Button>
			<Button
				onClick={() => incPage(curPage + (pageCount - curPage))}
				disabled={curPage === pageCount}
				buttonStyle={buttonStyle}
			>
				<Icon iconName="arrowForward" iconSizeKey="medium" />
				<Icon iconName="arrowForward" iconSizeKey="medium" />
			</Button>
		</div>
	)
}

export default Pagination
