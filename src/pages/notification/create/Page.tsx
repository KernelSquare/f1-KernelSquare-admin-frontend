import {
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	Textarea,
} from '@chakra-ui/react'
import { css } from '@emotion/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { BORDERRADIUS, FONTSIZE, FONTWEIGHT, PALETTE } from '@/app/styles/theme'

export type NotificationType = {
	title: string
	content: string
}

const CreateNotificationPage = () => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<NotificationType>({
		defaultValues: {
			title: '',
			content: '',
		},
	})
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<NotificationType> = data => {
		console.log(data)
		navigate('/notification')
	}

	return (
		<div
			css={css({
				width: '1120px',
				marginLeft: '160px',
				height: 'calc(100vh - 240px)',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			})}
		>
			<div
				css={css({
					fontSize: FONTSIZE['2xlarge'],
					textAlign: 'left',
					fontWeight: FONTWEIGHT.bold,
					marginBottom: '40px',
				})}
			>
				Notices
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				css={css({
					width: '80%',
				})}
				noValidate
			>
				<Controller
					name="title"
					control={control}
					render={({ field }) => (
						<FormControl
							css={css({
								marginBottom: '20px',
							})}
						>
							<FormLabel>제목</FormLabel>
							<Input
								type="text"
								{...field}
								css={css({
									background: 'transparent',
									color: PALETTE['pale-050'],
									border: 'none',
									borderBottom: `1px solid ${PALETTE['pale-050']}`,
									borderRadius: BORDERRADIUS.none,
									':focus': {
										outline: 'none',
									},
								})}
								borderColor={PALETTE['pale-050']}
							/>
							{errors.title && (
								<FormHelperText
									css={css({
										color: PALETTE['pale-050'],
										textAlign: 'left',
									})}
								>
									{errors.title.message}
								</FormHelperText>
							)}
						</FormControl>
					)}
				/>
				<Controller
					name="content"
					control={control}
					render={({ field }) => (
						<FormControl
							css={css({
								marginBottom: '20px',
							})}
						>
							<FormLabel>내용</FormLabel>
							<Textarea
								{...field}
								css={css({
									background: 'transparent',
									color: PALETTE['pale-050'],
									minHeight: '250px',
								})}
							/>
							{errors.content && (
								<FormHelperText
									css={css({
										color: PALETTE['pale-050'],
										textAlign: 'left',
									})}
								>
									{errors.content.message}
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
					공지글 작성
				</Button>
			</form>
		</div>
	)
}

export default CreateNotificationPage
