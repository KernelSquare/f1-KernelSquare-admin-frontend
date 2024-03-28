import { BaseResponse } from '../../baseResponses'
import { LoginFormType } from '../../form'
import { UserRole } from '../../user'

/**
 * @ LoginRequest
 * - LoginFormType: { email: string, password: string }
 */
export interface LoginRequest extends LoginFormType {}

/**
 * @ LoginUserData
 * - member_id: 사용자 id (number)
 * - nickname: 사용자 닉네임 (string)
 * - experience: 사용자 경험치 (number)
 * - introduction: 사용자 소개글 (string)
 * - image_url: 사용자 프로필 사진 URL (string)
 * - level: 사용자 레벨 정보 (number)
 * - roles: 사용자 역할 (사용자, 멘토, 관리자)
 */
export type LoginUserData = {
	member_id: number
	nickname: string
	experience: number
	introduction: string
	image_url: string
	level: number
	roles: UserRole[]
}

/**
 * @ LoginTokenData
 * - accesstoken (string)
 * - refreshtoken (string)
 */
export type LoginTokenData = {
	token_dto: { access_token: string; refresh_token: string }
}

export type LoginPayload = LoginUserData & LoginTokenData

export interface LoginResponse extends BaseResponse<LoginPayload> {}
