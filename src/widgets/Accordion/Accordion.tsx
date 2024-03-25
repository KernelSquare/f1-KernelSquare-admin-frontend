import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
} from '@chakra-ui/react'
import { css, CSSObject } from '@emotion/react'

type AccordionProps = {
	allowToggle: boolean
	pb: number
	buttonChild: JSX.Element
	buttonStyle?: CSSObject
	panelChild: JSX.Element
}

const CustomAccordion = ({
	allowToggle,
	pb,
	buttonChild,
	panelChild,
	buttonStyle,
}: AccordionProps) => {
	return (
		<Accordion allowToggle={allowToggle}>
			<AccordionItem key={Math.random() * 1000} css={css({ border: 'none' })}>
				<h2 css={css({ margin: '0px' })}>
					<AccordionButton bg={'transparent'} css={css(buttonStyle)}>
						{buttonChild}
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={pb}>{panelChild}</AccordionPanel>
			</AccordionItem>
		</Accordion>
	)
}

export default CustomAccordion
