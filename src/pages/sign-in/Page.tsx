import {
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
} from '@chakra-ui/react'
import { css } from '@emotion/react'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { BORDERRADIUS, FONTSIZE, FONTWEIGHT, PALETTE } from '@/app/styles/theme'
import type { LoginFormType } from '@/entities/interfaces/form'
import useAuthCookies from '@/features/hooks/useAuthCookies'
import useCrypto from '@/features/hooks/useCrypto'
import { login } from '@/shared/apis/auth'

import schema from './constants/schema'

function SignInPage() {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormType>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(schema),
	})
	const { setAuthCookies } = useAuthCookies()
	const { encrypt } = useCrypto()
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<LoginFormType> = async data => {
		try {
			const loginResponse = await login({
				email: data.email,
				password: data.password,
			})

			if (loginResponse.data) {
				const { token_dto, ...userPayload } = loginResponse.data
				const { access_token, refresh_token } = token_dto
				const expireTime = dayjs().add(1, 'hours').startOf('second').toDate()

				const stringifiedPayload = JSON.stringify({
					...userPayload,
					expires: expireTime.toJSON(),
				})
				const encryptedPayload = await encrypt(stringifiedPayload)

				await setAuthCookies(
					access_token,
					refresh_token,
					encryptedPayload,
					expireTime,
				)

				navigate('/')
			} else {
				throw new Error('로그인 중 에러가 발생하였습니다.')
			}
		} catch (error) {
			throw new Error('로그인 중 에러가 발생하였습니다.')
		}
	}

	return (
		<div
			css={css({
				width: '500px',
				height: '400px',
				borderRadius: BORDERRADIUS.large,
				backgroundColor: PALETTE['primary-900'],
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			})}
		>
			<div
				css={css({
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '20px 0',
				})}
			>
				<div>
					<img src="/logo.svg" alt="kernelsquare 로고" />
				</div>
				<div
					css={css({
						marginLeft: '5px',
						fontWeight: FONTWEIGHT.bold,
						fontSize: FONTSIZE.xlarge,
					})}
				>
					KERNEL SQUARE
				</div>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				css={css({
					width: '80%',
				})}
				noValidate
			>
				<Controller
					name="email"
					control={control}
					render={({ field }) => (
						<FormControl
							css={css({
								marginBottom: '20px',
							})}
						>
							<FormLabel>Email</FormLabel>
							<Input
								type="email"
								{...field}
								css={css({
									background: PALETTE['pale-050'],
									color: PALETTE['dark-600'],
								})}
							/>
							{errors.email && (
								<FormHelperText
									css={css({
										color: PALETTE['pale-050'],
										textAlign: 'left',
									})}
								>
									{errors.email.message}
								</FormHelperText>
							)}
						</FormControl>
					)}
				/>
				<Controller
					name="password"
					control={control}
					render={({ field }) => (
						<FormControl
							css={css({
								marginBottom: '20px',
							})}
						>
							<FormLabel>Password</FormLabel>
							<Input
								type="password"
								{...field}
								css={css({
									background: PALETTE['pale-050'],
									color: PALETTE['dark-600'],
								})}
							/>
							{errors.password && (
								<FormHelperText
									css={css({
										color: PALETTE['pale-050'],
										textAlign: 'left',
									})}
								>
									{errors.password.message}
								</FormHelperText>
							)}
						</FormControl>
					)}
				/>
				<Button
					mt={4}
					colorScheme="teal"
					isLoading={isSubmitting}
					type="submit"
				>
					제출하기
				</Button>
			</form>
		</div>
	)
}

export default SignInPage
