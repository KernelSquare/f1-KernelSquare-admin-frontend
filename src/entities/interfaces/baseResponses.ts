/**
 * @ BaseResponse
 * : 기본 API 응답
 * - code: 응답 코드
 * - msg: 응답 message
 * - data: 응답 data
 */

export type BaseResponse<T = string> = {
	code: number
	msg: string
	data?: T
}
