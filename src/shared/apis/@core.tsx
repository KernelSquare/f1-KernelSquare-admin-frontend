import axios from 'axios'

import useAuthCookies from '@/features/hooks/useAuthCookies'

const BASIC_SERVER = import.meta.env.VITE_SERVER
const ADMIN_SERVER = import.meta.env.VITE_ADMIN_SERVER

export const createAPIInstance = (isAdmin: boolean) => {
	const axiosInstance = axios.create({
		baseURL: isAdmin ? ADMIN_SERVER : BASIC_SERVER,
		withCredentials: true,
	})

	axiosInstance.interceptors.request.use(config => {
		const { getAccessToken } = useAuthCookies()
		// 토큰 관련 로직 구현
		const accessToken = getAccessToken()

		if (accessToken)
			config.headers.Authorization = `Bearer ${accessToken.value}`
		return config
	})

	return axiosInstance
}

export const axiosInstance = createAPIInstance(false)

export const axiosAdminInstance = createAPIInstance(true)
