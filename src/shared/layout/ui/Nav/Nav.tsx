import './nav.css'

import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'

import { BORDERRADIUS, FONTSIZE, FONTWEIGHT, PALETTE } from '@/app/styles/theme'
import CustomAccordion from '@/widgets/Accordion/Accordion'

import navItems, { Items } from './constants/navItems'
import NavTab from './ui/NavTab'

const Nav = () => {
	return (
		<NavWrapper>
			<NavLogoBox />
			<NavTabBox />
		</NavWrapper>
	)
}

const NavWrapper = ({ children }: PropsWithChildren) => (
	<div
		css={css({
			background: `linear-gradient(0deg, ${PALETTE['primary-1000']}, ${PALETTE['primary-900']})`,
			color: PALETTE['pale-050'],
			height: '100vh',
			width: '240px',
			position: 'fixed',
			top: '0',
			left: '0',
			zIndex: '1',
			display: 'block',
			boxShadow: '0 0 45px 0 rgba(0, 0, 0, .6)',
			borderRadius: `${BORDERRADIUS.medium}`,
			margin: '20px 32px 0 20px',
		})}
	>
		{children}
	</div>
)

const NavLogoBox = () => {
	const logoText = 'KERNEL SQUARE'

	return (
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
				{logoText}
			</div>
		</div>
	)
}

const NavTabBox = () => (
	<div>
		{navItems.map(item => (
			<ul
				key={item.title}
				css={css({
					margin: '0px',
					padding: '0px',
					fontWeight: FONTWEIGHT.medium,
				})}
			>
				{!item.children && <NavTabWithoutChildren item={item} />}
				{item.children && <NavTabWithChildren item={item} />}
			</ul>
		))}
	</div>
)

export default Nav

type ItemProps = {
	item: Items
}

type ChildProps = {
	child: Items[]
}

const NavTabWithoutChildren = ({ item }: ItemProps) => {
	const location = useLocation()

	return (
		<NavTab
			item={item}
			depth={1}
			iconSize="medium"
			isSelected={location.pathname === item.url}
		/>
	)
}

const NavTabWithChildren = ({ item }: ItemProps) => {
	if (item.children)
		return (
			<CustomAccordion
				allowToggle
				pb={4}
				buttonChild={<NavTabWithoutChildren item={item} />}
				panelChild={<NavTabAccordionPanel child={item.children} />}
				buttonStyle={{
					color: PALETTE['pale-050'],
					fontSize: FONTSIZE.base,
					padding: 0,
					outline: 'none',
					border: 'none',
					':hover': {
						border: 'none',
						backgroundColor: 'rgba(244, 244, 244, 0.18)',
						backgroundOpacity: '18%',
						borderRadius: 0,
					},
					':focus': {
						outline: 'none',
						border: 'none',
					},
				}}
			/>
		)
}

const NavTabAccordionPanel = ({ child }: ChildProps) => {
	const location = useLocation()

	return child.map(item => (
		<NavTab
			item={item}
			depth={2}
			key={item.title}
			iconSize="xsmall"
			isSelected={location.pathname === item.url}
		/>
	))
}
