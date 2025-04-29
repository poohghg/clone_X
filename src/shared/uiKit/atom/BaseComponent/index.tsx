import React, { ElementType, forwardRef, ReactNode } from 'react'
import {
	MergeElementProps,
	PolymorphicRef,
	PolymorphicWithRef,
} from '@/shared/type/component'

interface Props<T extends ElementType> {}

type BaseComponent = <T extends ElementType>(
	props: PolymorphicWithRef<T, Props<T>>,
) => ReactNode

// eslint-disable-next-line react/display-name
const Base: BaseComponent = forwardRef(
	<T extends ElementType = 'div'>(
		{ as, children, rest }: MergeElementProps<T, Props<T>>,
		ref: PolymorphicRef<T>,
	) => {
		const Component = as || 'div'

		return (
			<Component ref={ref} {...rest}>
				{children}
			</Component>
		)
	},
)

const Test = () => {
	const ref = React.useRef<HTMLButtonElement>(null)
	return (
		<Base as={'button'} ref={ref}>
			Test
		</Base>
	)
}

export default Base
