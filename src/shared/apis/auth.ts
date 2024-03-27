import {
	LoginRequest,
	LoginResponse,
} from '@/entities/interfaces/dto/auth/login.dto'

import routeMap from '../constants/routeMap'
import axiosInstance from './@core'

export const login = async ({ email, password }: LoginRequest) => {
	const res = await axiosInstance.post<unknown, LoginResponse, LoginRequest>(
		routeMap.authAPI.login,
		{ email, password },
	)

	return res
}

export const logout = async () => {
	const res = await axiosInstance.post(routeMap.authAPI.logout, {})

	return res
}
