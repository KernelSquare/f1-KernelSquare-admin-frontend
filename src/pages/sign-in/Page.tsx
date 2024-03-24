import {
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
} from '@chakra-ui/react'
import { css } from '@emotion/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { BORDERRADIUS, FONTSIZE, FONTWEIGHT, PALETTE } from '@/app/styles/theme'

type SignInProps = {
	email: string
	password: string
}

function SignInPage() {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<SignInProps>()

	const authorizationSchema = z.object({
		email: z.string(),
		password: z.string(),
	})

	const onSubmit: SubmitHandler<SignInProps> = data => console.log(data)

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
										color: PALETTE['primary-700'],
									})}
								>
									이메일 유효성 검증 문구
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
										color: PALETTE['primary-700'],
									})}
								>
									이메일 유효성 검증 문구
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
