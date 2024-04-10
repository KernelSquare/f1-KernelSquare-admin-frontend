import * as z from 'zod'

const schema = z.object({
	email: z
		.string()
		.min(6, { message: '이메일 형식에 맞추어 입력해주세요.' })
		.max(40, { message: '이메일 형식에 맞추어 입력해주세요.' })
		.email({ message: '이메일 형식에 맞추어 입력해주세요.' }),
	password: z
		.string()
		.min(8, { message: '비밀번호 형식에 맞추어 입력해주세요.' })
		.max(15, { message: '비밀번호 형식에 맞추어 입력해주세요.' })
		// 최소 하나의 대문자, 소문자, 숫자, 특수문자
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
			{
				message:
					'영문+숫자+특수문자(! @ # $ % & * ?) 조합 8~15자리를 입력해주세요.',
			},
		),
})

export default schema

export type LoginType = z.infer<typeof schema>
