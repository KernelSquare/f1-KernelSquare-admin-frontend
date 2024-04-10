import { AxiosResponse } from 'axios'

import {
	LoginRequest,
	LoginResponse,
} from '@/entities/interfaces/dto/auth/login.dto'

import routeMap from '../constants/routeMap'
import axiosInstance from './@core'

export const login = async ({ email, password }: LoginRequest) => {
	console.log('로그인 시작')
	const res = await axiosInstance.post<
		unknown,
		AxiosResponse<LoginResponse>,
		LoginRequest
	>(routeMap.authAPI.login, { email, password })

	return res
}

export const logout = async () => {
	const res = await axiosInstance.post(routeMap.authAPI.logout, {})

	return res
}
