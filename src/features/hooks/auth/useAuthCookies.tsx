import tokenKey from '@/shared/constants/tokenKey'

import { getCookie, removeCookie, setCookie } from '../../utils/cookies/cookies'

const useAuthCookies = () => {
	const getAccessToken = () => getCookie(tokenKey.ACCESS_TOKEN)

	const getAuthCookies = () => {
		try {
			const [accessToken, refreshToken] = [
				getCookie(tokenKey.ACCESS_TOKEN),
				getCookie(tokenKey.REFRESH_TOKEN),
			]

			return {
				accessToken: accessToken?.value,
				refreshToken: refreshToken?.value,
			}
		} catch (err) {
			return {
				accessToken: undefined,
				refreshToken: undefined,
			}
		}
	}

	const setAuthCookies = (
		accessToken: string,
		refreshToken: string,
		expires: string,
	) => [
		setCookie(tokenKey.ACCESS_TOKEN, accessToken, {
			path: '/',
			expires: new Date(expires),
			// httpOnly: true,
		}),
		setCookie(tokenKey.REFRESH_TOKEN, refreshToken, {
			path: '/',
			maxAge: 60 * 60 * 24 * 20,
			// httpOnly: true,
		}),
	]

	const removeAuthCookies = () => {
		removeCookie(tokenKey.ACCESS_TOKEN)
		removeCookie(tokenKey.REFRESH_TOKEN, { maxAge: 60 * 60 * 24 * 20 })
	}

	return {
		getAccessToken,
		getAuthCookies,
		setAuthCookies,
		removeAuthCookies,
	}
}

export default useAuthCookies
