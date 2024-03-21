/** @jsx jsx */
import './nav.css'

import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'

import { BORDERRADIUS, FONTSIZE, FONTWEIGHT, PALETTE } from '@/app/styles/theme'
import Icon from '@/widgets/Icons/Icon'
import { iconSizeKey } from '@/widgets/Icons/iconInventory'

import navItems, { Items } from './navItems'

export const Nav = () => {
	return (
		<div
			css={css({
				background: `linear-gradient(0deg, ${PALETTE['primary-1000']}, ${PALETTE['primary-900']})`,
				color: PALETTE['pale-050'],
				height: '96vh',
				width: '230px',
				position: 'fixed',
				top: '0',
				left: '0',
				zIndex: '1',
				display: 'block',
				boxShadow: '0 0 45px 0 rgba(0, 0, 0, .6)',
				borderRadius: `${BORDERRADIUS.medium}`,
				margin: '20px',
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
						<NavTab item={item} depth={1} iconSize="medium" />
						{item.children &&
							item.children.map(child => (
								<NavTab
									item={child}
									depth={2}
									key={child.title}
									iconSize="xsmall"
								/>
							))}
					</ul>
				))}
			</div>
		</div>
	)
}

type NavTabProps = {
	item: Items
	iconSize: iconSizeKey
	depth: number
}

const NavTab = ({ item, depth, iconSize }: NavTabProps) => {
	const tabStyle = (isUrl: boolean) => css`
		cursor: ${isUrl ? 'pointer' : 'default'};
		padding: 10px ${23 * depth}px;
		display: flex;
		justify-contents: center;
		:hover {
			background-color: rgba(244, 244, 244, 0.18);
			background-opacity: '18%';
		}
	`
	const navigate = useNavigate()
	const handleLocation = (url: string) => {
		if (!url) return
		navigate(url)
	}

	return (
		<li css={tabStyle(!!item.url)} onClick={() => handleLocation(item.url)}>
			<Icon
				iconName={item.icon}
				iconSizeKey={iconSize}
				iconColor={PALETTE['pale-050']}
			/>
			<div
				css={css({
					marginLeft: '10px',
				})}
			>
				{item.title}
			</div>
		</li>
	)
}
