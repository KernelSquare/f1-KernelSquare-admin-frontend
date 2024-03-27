import { Cookies } from 'react-cookie'

import { CookieSetOptions } from './cookies.types'

const cookies = new Cookies()

export const setCookie = (
	name: string,
	value: unknown,
	options?: CookieSetOptions | undefined,
) => cookies.set(name, value, { ...options })

export const getCookie = (name: string) => cookies.get(name)

export const removeCookie = (
	name: string,
	options?: CookieSetOptions | undefined,
) => cookies.remove(name, { path: '/', httpOnly: true, ...options })
