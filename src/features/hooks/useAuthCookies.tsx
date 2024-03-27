import tokenKey from '@/shared/constants/tokenKey'

import { getCookie, removeCookie, setCookie } from '../utils/cookies/cookies'

const useAuthCookies = () => {
	const getAccessToken = getCookie(tokenKey.ACCESS_TOKEN)

	const getAuthCookies = async () => {
		try {
			const [accessToken, refreshToken] = await Promise.all([
				getCookie(tokenKey.ACCESS_TOKEN),
				getCookie(tokenKey.REFRESH_TOKEN),
			])

			return {
				accessToken: accessToken?.value,
				refreshToken: refreshToken?.value,
			}
		} catch (err) {
			return { accessToken: undefined, refreshToken: undefined }
		}
	}

	const setAuthCookies = async (
		accessToken: string,
		refreshToken: string,
		expires: Date,
	) =>
		await Promise.all([
			setCookie(tokenKey.ACCESS_TOKEN, accessToken, {
				path: '/',
				expires,
				httpOnly: true,
			}),
			setCookie(tokenKey.REFRESH_TOKEN, refreshToken, {
				maxAge: 60 * 60 * 24 * 20,
				httpOnly: true,
			}),
		])

	const removeAuthCookies = () => {
		removeCookie(tokenKey.ACCESS_TOKEN)
		removeCookie(tokenKey.REFRESH_TOKEN, { maxAge: 60 * 60 * 24 * 20 })
	}

	return { getAccessToken, getAuthCookies, setAuthCookies, removeAuthCookies }
}

export default useAuthCookies
