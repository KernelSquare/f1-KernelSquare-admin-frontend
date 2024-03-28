import { Navigate } from 'react-router-dom'

import useUserDataStore from '@/features/hooks/store/useUserDataStore'
import GlobalLayout from '@/shared/layout/GlobalLayout'

const PrivateRoute = () => {
	const { userData } = useUserDataStore()
	const userRole = userData?.roles

	return userRole?.includes('ROLE_ADMIN') ? (
		<GlobalLayout />
	) : (
		<Navigate to="/signIn" />
	)
}

export default PrivateRoute
