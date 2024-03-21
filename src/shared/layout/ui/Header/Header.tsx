import './header.css'

import { css } from '@emotion/react'

import { BORDERRADIUS } from '@/app/styles/theme'
import { Button } from '@/widgets/Button/Button'

type User = {
	name: string
}

interface HeaderProps {
	user?: User
	onLogin?: () => void
	onLogout?: () => void
	onCreateAccount?: () => void
}

export const Header = ({
	user,
	onLogin,
	onLogout,
	onCreateAccount,
}: HeaderProps) => (
	<header
		css={css({
			position: 'absolute',
			zIndex: 1050,
			padding: '10px 30px 10px 15px',
			width: '100%',
			top: 0,
			right: 0,
			display: 'flex',
			flexFlow: 'row nowrap',
			justifyContent: 'flex-end',
		})}
	>
		<div className="storybook-header">
			<div>
				<Button
					onClick={onCreateAccount}
					label=""
					css={css({
						borderRadius: BORDERRADIUS.circle,
						width: '50px',
						height: '50px',
					})}
				/>
			</div>
		</div>
	</header>
)
