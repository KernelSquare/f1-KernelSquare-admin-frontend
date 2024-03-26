import {
	AlertDialogBody,
	AlertDialogHeader,
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	Textarea,
} from '@chakra-ui/react'
import { css } from '@emotion/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { BORDERRADIUS, FONTSIZE, FONTWEIGHT, PALETTE } from '@/app/styles/theme'
import MockNotices from '@/entities/mocks/data/_mockNotices'
import ConfirmDialog, { useDialogStore } from '@/widgets/Dialog/ConfirmDialog'

import { NotificationType } from '../create/Page'

const NotificationDetailPage = () => {
	const { id } = useParams()
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<NotificationType>({
		defaultValues: {
			title: MockNotices[Number(id) - 1].title,
			content: MockNotices[Number(id) - 1].content,
		},
	})
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<NotificationType> = data => {
		console.log(data)
		navigate('/notification')
	}

	const { openDialog } = useDialogStore()

	return (
		<div
			css={css({
				width: '1120px',
				marginLeft: '160px',
				height: '80vh',
			})}
		>
			<div
				css={css({
					textAlign: 'left',
					cursor: 'pointer',
				})}
				onClick={() => navigate('/notification')}
			>
				목록 보기
			</div>
			<div
				css={css({
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
										color: PALETTE['dark-600'],
										backgroundColor: PALETTE['pale-050'],
										borderRadius: BORDERRADIUS.large,
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
										color: PALETTE['dark-600'],
										backgroundColor: PALETTE['pale-050'],
										borderRadius: BORDERRADIUS.large,
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
					<div
						css={css({
							display: 'flex',
							justifyContent: 'right',
							gap: 10,
						})}
					>
						<Button
							mt={4}
							colorScheme="teal"
							isLoading={isSubmitting}
							type="submit"
						>
							공지글 수정
						</Button>
						<Button
							mt={4}
							colorScheme="teal"
							type="button"
							variant="outline"
							onClick={openDialog}
						>
							공지글 삭제
						</Button>
					</div>
				</form>
				<ConfirmDialog>
					<AlertDialogHeader
						fontSize="lg"
						fontWeight="bold"
						color={PALETTE['dark-600']}
					>
						공지글이 영구적으로 삭제됩니다.
					</AlertDialogHeader>
					<AlertDialogBody color={PALETTE['dark-600']}>
						정말 삭제하시겠습니까?
					</AlertDialogBody>
				</ConfirmDialog>
			</div>
		</div>
	)
}

export default NotificationDetailPage
