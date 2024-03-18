import { createBrowserRouter } from 'react-router-dom'

import DashboardPage from '@/pages/dashboard/Page'
import NotificationManagementPage from '@/pages/notification/Page'
import AnswerManagementPage from '@/pages/qna/answers/Page'
import QnAMainPage from '@/pages/qna/Page'
import QuestionManagementPage from '@/pages/qna/questions/Page'

const router = createBrowserRouter([
	{
		path: '/',
		element: <DashboardPage />,
	},
	{
		path: 'qna',
		element: <QnAMainPage />,
		children: [
			{ path: 'questions', element: <QuestionManagementPage /> },
			{ path: 'answers', element: <AnswerManagementPage /> },
		],
	},
	{ path: '/notification', element: <NotificationManagementPage /> },
])

export default router
