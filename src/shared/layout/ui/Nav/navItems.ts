type Items = {
	title: string
	icon: string
	url: string
	children?: Items[]
}

const navItems: Items[] = [
	{
		title: '대시보드',
		icon: '',
		url: '/dashboard',
	},
	{
		title: '개발자 Q&A 관리',
		icon: '',
		url: '',
		children: [
			{
				title: '질문 관리',
				icon: '',
				url: '/questions',
			},
			{
				title: '답변 관리',
				icon: '',
				url: '/answers',
			},
		],
	},
	{
		title: '공지글 관리',
		icon: '',
		url: '/notification',
	},
]

export default navItems
