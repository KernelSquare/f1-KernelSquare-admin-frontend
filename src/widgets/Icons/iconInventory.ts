import { FaCircle } from 'react-icons/fa'
import { FaMicrophone } from 'react-icons/fa6'
import { HiChartSquareBar } from 'react-icons/hi'
import { IoMdChatboxes } from 'react-icons/io'

export const baseStyle = {
	display: 'inline-flex',
	justifyContent: 'center',
	alignItems: 'center',
}

export const iconDictionary = {
	dashboard: HiChartSquareBar,
	qna: IoMdChatboxes,
	notification: FaMicrophone,
	bulletPoint: FaCircle,
}

export const iconSize = {
	xsmall: {
		width: '8px',
		height: '8px',
	},
	small: {
		width: '12px',
		height: '12px',
	},
	medium: {
		width: '16px',
		height: '16px',
	},
	large: {
		width: '20px',
		height: '20px',
	},
	xlarge: {
		width: '24px',
		height: '24px',
	},
	'2xlarge': {
		width: '32px',
		height: '32px',
	},
}
