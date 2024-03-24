import { css } from '@emotion/react'

import {
	baseStyle,
	iconDictionary,
	iconDictionaryKey,
	iconSize,
	iconSizeKey,
} from './iconInventory'

type IconProps = {
	iconName: iconDictionaryKey
	iconSizeKey: iconSizeKey
	iconColor: string
}

const Icon = ({ iconName, iconSizeKey, iconColor }: IconProps) => {
	const TargetIcon = iconDictionary[iconName]
	const iconStyle = css`
		${baseStyle}
		.icon {
			${iconSize[iconSizeKey]},
			color: ${iconColor}
		}
	`

	return (
		<div css={iconStyle}>
			<TargetIcon className="icon" />
		</div>
	)
}

export default Icon
