import { createBrowserRouter } from 'react-router-dom'

import DashboardPage from '@/pages/dashboard/Page'
import NotificationManagementPage from '@/pages/notification/Page'
import AnswerManagementPage from '@/pages/qna/answers/Page'
import QuestionManagementPage from '@/pages/qna/questions/Page'
import SignInPage from '@/pages/sign-in/Page'

import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([
	{
		element: (
			<>
				<PrivateRoute />
			</>
		),
		children: [
			{
				path: '/',
				element: <DashboardPage />,
			},
			{ path: '/questions', element: <QuestionManagementPage /> },
			{ path: '/answers', element: <AnswerManagementPage /> },
			{ path: '/notification', element: <NotificationManagementPage /> },
		],
	},
	{
		path: '/signIn',
		element: <SignInPage />,
	},
])

export default router
