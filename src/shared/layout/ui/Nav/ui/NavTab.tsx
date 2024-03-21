import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'

import { PALETTE } from '@/app/styles/theme'
import Icon from '@/widgets/Icons/Icon'
import type { iconSizeKey } from '@/widgets/Icons/iconInventory'

import type { Items } from '../constants/navItems'

type NavTabProps = {
	item: Items
	iconSize: iconSizeKey
	depth: number
	isSelected: boolean
}

const NavTab = ({ item, depth, iconSize, isSelected }: NavTabProps) => {
	const tabStyle = (isUrl: boolean) => css`
		cursor: ${isUrl ? 'pointer' : 'default'};
		padding: 10px ${23 * depth}px;
		display: flex;
		justify-contents: center;
		background-color: ${isSelected
			? 'rgba(244, 244, 244, 0.18)'
			: 'transparent'};
		:hover {
			background-color: ${item.children
				? 'transparent'
				: 'rgba(244, 244, 244, 0.18)'};
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

export default NavTab
