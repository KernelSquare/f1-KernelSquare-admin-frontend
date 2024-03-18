import DashboardPage from '@/pages/dashboard/Page'
import SignInPage from '@/pages/sign-in/Page'

const PrivateRoute = () => {
	// 로그인 로직 구현 후 수정 예정
	const isAuthorized = true

	return isAuthorized ? <DashboardPage /> : <SignInPage />
}

export default PrivateRoute
