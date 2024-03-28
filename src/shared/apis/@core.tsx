import axios from 'axios'

import useAuthCookies from '@/features/hooks/auth/useAuthCookies'

export const createAPIInstance = () => {
	const axiosInstance = axios.create({
		baseURL: import.meta.env.VITE_SERVER,
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

const axiosInstance = createAPIInstance()

export default axiosInstance
