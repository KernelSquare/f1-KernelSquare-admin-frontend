import {
	AlertDialogBody,
	AlertDialogHeader,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react'
import { css } from '@emotion/react'

import { FONTSIZE, FONTWEIGHT, PALETTE } from '@/app/styles/theme'
import MockQuestions from '@/entities/mocks/data/_mockQuestions'
import ConfirmDialog, { useDialogStore } from '@/widgets/Dialog/ConfirmDialog'
import Icon from '@/widgets/Icons/Icon'
import Pagination from '@/widgets/Pagination/Pagination'

function QuestionManagementPage() {
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
					fontSize: FONTSIZE['2xlarge'],
					textAlign: 'left',
					fontWeight: FONTWEIGHT.bold,
					marginBottom: '30px',
				})}
			>
				Question
			</div>
			<TableContainer>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th>번호</Th>
							<Th>제목</Th>
							<Th>글쓴이</Th>
							<Th>등록일</Th>
							<Th>관리</Th>
						</Tr>
					</Thead>
					<Tbody>
						{MockQuestions.map(question => (
							<Tr key={question.id}>
								<Td>{question.id}</Td>
								<Td>
									{question.title.length > 30
										? question.title.slice(0, 30) + '...'
										: question.title}
								</Td>
								<Td>{question.nickname}</Td>
								<Td>{question.created_date}</Td>
								<Td>
									<Icon
										iconName="delete"
										iconSizeKey="large"
										iconEmotionStyle={{
											cursor: 'pointer',
											color: PALETTE.red,
										}}
										onClick={openDialog}
									/>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
			<div
				css={css({
					display: 'flex',
					justifyItems: 'center',
					bottom: 0,
				})}
			>
				<Pagination totalData={50} dataLimit={10} />
			</div>
			<ConfirmDialog>
				<AlertDialogHeader
					fontSize="lg"
					fontWeight="bold"
					color={PALETTE['dark-600']}
				>
					게시글이 영구적으로 삭제됩니다.
				</AlertDialogHeader>
				<AlertDialogBody color={PALETTE['dark-600']}>
					정말 삭제하시겠습니까?
				</AlertDialogBody>
			</ConfirmDialog>
		</div>
	)
}

export default QuestionManagementPage
