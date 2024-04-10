import { http, HttpResponse, PathParams } from 'msw'

import {
	LoginRequest,
	LoginResponse,
} from '@/entities/interfaces/dto/auth/login.dto'
import routeMap from '@/shared/constants/routeMap'

import { mockUsers } from '../data/_mockUsers'

export const authHandler = [
	http.post<PathParams, LoginRequest, LoginResponse>(
		`${import.meta.env.VITE_SERVER}${routeMap.authAPI.login}`,
		async ({ request }) => {
			try {
				const { email, password } = await request.json()

				console.log('email, password', email, password)

				const targetUser = mockUsers.find(user => user.email === email)

				if (!targetUser) {
					return HttpResponse.json(
						{
							code: 1100,
							msg: '계정 정보가 일치하지 않습니다.',
						},
						{
							status: 404,
						},
					)
				}

				if (targetUser.password !== password) {
					return HttpResponse.json(
						{
							code: 1101,
							msg: '비밀번호가 일치하지 않습니다.',
						},
						{
							status: 404,
						},
					)
				}

				const {
					id: member_id,
					nickname,
					experience,
					introduction,
					image_url,
					level,
					authorities: roles,
				} = targetUser

				return HttpResponse.json(
					{
						code: 1140,
						msg: '로그인 성공',
						data: {
							member_id,
							nickname,
							experience,
							introduction: introduction ?? '',
							image_url: image_url ?? '',
							level,
							roles,
							token_dto: {
								access_token: 'accesstoken',
								refresh_token: 'refreshtoken',
							},
						},
					},
					{
						status: 200,
					},
				)
			} catch (error) {
				return HttpResponse.json(
					{
						code: 500,
						msg: '서버 오류',
					},
					{
						status: 500,
					},
				)
			}
		},
	),
]
