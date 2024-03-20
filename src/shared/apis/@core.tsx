import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_SERVER,
	withCredentials: true,
})

axiosInstance.interceptors.request.use(config => {
	// 토큰 관련 로직 구현
	return config
})

export default axiosInstance
