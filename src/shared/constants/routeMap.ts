const baseURL = '/api/v1'
const prefix = {
	auth: 'auth',
}

const authAPI = {
	login: `${baseURL}/${prefix.auth}/login`,
	logout: `${baseURL}/${prefix.auth}/logout`,
}

const routeMap = { authAPI }

export default routeMap
