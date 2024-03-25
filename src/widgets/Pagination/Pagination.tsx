import { create } from 'zustand'

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

	return (
		<div>
			<Button
				onClick={() => decPage(curPage - (curPage - 1))}
				disabled={curPage === 1}
			>
				<Icon iconName="arrowBack" iconSizeKey="large" />
				<Icon iconName="arrowBack" iconSizeKey="large" />
			</Button>
			<Button onClick={() => decPage(curPage - 1)} disabled={curPage === 1}>
				<Icon iconName="arrowBack" iconSizeKey="large" />
			</Button>
			<div>
				{Array(pageCount)
					.fill(undefined)
					.map((_, i) => (
						<Button
							key={i + 1}
							onClick={() => incPage(i + 1)}
							aria-current={curPage === i + 1 ? 'page' : null}
						>
							{i + 1}
						</Button>
					))}
			</div>
			<Button
				onClick={() => incPage(curPage + 1)}
				disabled={curPage === pageCount}
			>
				<Icon iconName="arrowForward" iconSizeKey="large" />
			</Button>
			<Button
				onClick={() => incPage(curPage + (pageCount - curPage))}
				disabled={curPage === pageCount}
			>
				-
				<Icon iconName="arrowForward" iconSizeKey="large" />
				<Icon iconName="arrowForward" iconSizeKey="large" />
			</Button>
		</div>
	)
}
