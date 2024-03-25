import {
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
import Icon from '@/widgets/Icons/Icon'
import Pagination from '@/widgets/Pagination/Pagination'

function QuestionManagementPage() {
	return (
		<div
			css={css({
				width: '1120px',
				marginLeft: '160px',
				height: 'calc(100vh - 240px)',
			})}
		>
			<div
				css={css({
					fontSize: FONTSIZE['2xlarge'],
					textAlign: 'left',
					fontWeight: FONTWEIGHT.bold,
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
						<Tr>
							<Td>01</Td>
							<Td>적절한 제목</Td>
							<Td>Kernel1</Td>
							<Td>2026.01.20</Td>
							<Td>
								<Icon
									iconName="delete"
									iconSizeKey="large"
									iconEmotionStyle={{
										cursor: 'pointer',
										color: PALETTE.red,
									}}
								/>
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
			<Pagination totalData={100} dataLimit={10} />
		</div>
	)
}

export default QuestionManagementPage
