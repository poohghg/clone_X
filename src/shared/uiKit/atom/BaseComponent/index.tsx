import React, { ElementType, forwardRef } from 'react'
import { MergeElementProps } from '@/shared/type/component'

interface Props<T extends ElementType> {
	as?: T
}

const Base = forwardRef<
	HTMLElement,
	MergeElementProps<ElementType, Props<ElementType>>
>(({ as = 'div', children, ...rest }, ref) => {
	const Component = as

	return (
		<Component ref={ref} {...rest}>
			{children}
		</Component>
	)
})

Base.displayName = 'Base'

const Test = () => {
	const ref = React.useRef<HTMLButtonElement>(null)
	return (
		<Base as={'button'} ref={ref}>
			Test
		</Base>
	)
}

export default Base
