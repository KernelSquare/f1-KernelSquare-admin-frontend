import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogOverlay,
	Button,
} from '@chakra-ui/react'
import { PropsWithChildren, useRef } from 'react'
import { create } from 'zustand'

type ConfirmDialogType = PropsWithChildren

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

const ConfirmDialog = ({ children }: ConfirmDialogType) => {
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
					{children}
					<AlertDialogFooter justifyContent="center">
						<Button onClick={closeDialog} ref={cancleRef} marginRight={5}>
							확인
						</Button>
						<Button onClick={closeDialog}>취소</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	)
}

export default ConfirmDialog
