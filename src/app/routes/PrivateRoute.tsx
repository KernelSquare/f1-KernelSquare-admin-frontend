import { Navigate } from 'react-router-dom'

import GlobalLayout from '@/shared/layout/GlobalLayout'

const PrivateRoute = () => {
	// 로그인 로직 구현 후 수정 예정
	const isAuthorized = true

	return isAuthorized ? <GlobalLayout /> : <Navigate to="/signIn" />
}

export default PrivateRoute
