import './button.css'

import { SerializedStyles } from '@emotion/react'
import { ReactNode } from 'react'

interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean
	/**
	 * What background color to use
	 */
	backgroundColor?: string
	/**
	 * How large should the button be?
	 */
	size?: 'small' | 'medium' | 'large'
	/**
	 * Button contents
	 */
	children?: ReactNode
	/**
	 * disabled
	 */
	disabled?: boolean
	/**
	 * emotion style props
	 */
	buttonStyle?: SerializedStyles
	/**
	 * Optional click handler
	 */
	onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	children,
	disabled,
	buttonStyle,
	...props
}: ButtonProps) => {
	const mode = primary
		? 'storybook-button--primary'
		: 'storybook-button--secondary'

	return (
		<button
			type="button"
			className={['storybook-button', `storybook-button--${size}`, mode].join(
				' ',
			)}
			style={{ backgroundColor }}
			disabled={disabled}
			css={buttonStyle}
			{...props}
		>
			{children}
		</button>
	)
}
