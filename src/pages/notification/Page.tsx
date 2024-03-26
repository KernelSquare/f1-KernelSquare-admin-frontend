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
import { useNavigate } from 'react-router-dom'

import { FONTSIZE, FONTWEIGHT, PALETTE } from '@/app/styles/theme'
import MockNotices from '@/entities/mocks/data/_mockNotices'
import { Button } from '@/widgets/Button/Button'
import Icon from '@/widgets/Icons/Icon'
import Pagination from '@/widgets/Pagination/Pagination'

const NotificationManagementPage = () => {
	const navigate = useNavigate()

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
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: '30px',
				})}
			>
				<div
					css={css({
						fontSize: FONTSIZE['2xlarge'],
						textAlign: 'left',
						fontWeight: FONTWEIGHT.bold,
					})}
				>
					Notices
				</div>
				<Button
					buttonStyle={css({
						background: PALETTE['pale-050'],
						height: '32px',
					})}
					onClick={() => navigate('/notification/create')}
				>
					공지글 작성
				</Button>
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
						{MockNotices.map((notice, idx) => (
							<Tr
								key={notice.title}
								css={css({ cursor: 'pointer' })}
								onClick={() => navigate(`/notification/${idx + 1}`)}
							>
								<Td>{idx + 1}</Td>
								<Td>{notice.title}</Td>
								<Td>{notice.author}</Td>
								<Td>{notice.created_date}</Td>
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
		</div>
	)
}

export default NotificationManagementPage
