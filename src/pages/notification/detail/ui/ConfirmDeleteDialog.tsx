import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { create } from 'zustand'

import { PALETTE } from '@/app/styles/theme'

type DialogStoreType = {
	isDialogOpen: boolean
	// eslint-disable-next-line no-unused-vars
	openDialog: () => void
	// eslint-disable-next-line no-unused-vars
	closeDialog: () => void
}

export const useDialogStore = create<DialogStoreType>(set => ({
	isDialogOpen: false,
	openDialog: () => set(() => ({ isDialogOpen: true })),
	closeDialog: () => set(() => ({ isDialogOpen: false })),
}))

const ConfirmDeleteDialog = () => {
	const { isDialogOpen, closeDialog } = useDialogStore()
	const cancleRef = useRef(null)

	return (
		<AlertDialog
			isOpen={isDialogOpen}
			leastDestructiveRef={cancleRef}
			onClose={closeDialog}
		>
			<AlertDialogOverlay>
				<AlertDialogContent textAlign="center">
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
					<AlertDialogFooter justifyContent="center">
						<Button onClick={closeDialog} ref={cancleRef} marginRight={5}>
							삭제
						</Button>
						<Button onClick={closeDialog}>취소</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	)
}

export default ConfirmDeleteDialog
