import { iconDictionaryKey } from '@/widgets/Icons/iconInventory'

export type Items = {
	title: string
	icon: iconDictionaryKey
	url: string
	children?: Items[]
}

const navItems: Items[] = [
	{
		title: '대시보드',
		icon: 'dashboard',
		url: '/',
	},
	{
		title: '개발자 Q&A 관리',
		icon: 'qna',
		url: '',
		children: [
			{
				title: '질문 관리',
				icon: 'bulletPoint',
				url: '/questions',
			},
			{
				title: '답변 관리',
				icon: 'bulletPoint',
				url: '/answers',
			},
		],
	},
	{
		title: '공지글 관리',
		icon: 'notification',
		url: '/notification',
	},
]

export default navItems
