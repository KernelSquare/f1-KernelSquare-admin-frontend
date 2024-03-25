import { css, CSSObject } from '@emotion/react'

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
	iconEmotionStyle?: CSSObject
}

const Icon = ({ iconName, iconSizeKey, iconEmotionStyle }: IconProps) => {
	const TargetIcon = iconDictionary[iconName]
	const iconStyle = css`
		${baseStyle}
		${iconEmotionStyle}
		.icon {
			${iconSize[iconSizeKey]},
		}
	`

	return (
		<div css={iconStyle}>
			<TargetIcon className="icon" />
		</div>
	)
}

export default Icon
