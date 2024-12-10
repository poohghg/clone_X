import React, { ElementType, forwardRef, ReactNode } from 'react'
import {
	TPolymorphic,
	TPolymorphicRef,
	TPolymorphicWithRef,
} from '@/shared/type/component'

interface Props<T extends ElementType> {
	as: T
	children?: ReactNode
}

type BaseComponent = <T extends ElementType>(
	props: TPolymorphicWithRef<T, Props<T>>,
) => ReactNode

// eslint-disable-next-line react/display-name
const Base: BaseComponent = forwardRef(
	<T extends ElementType>(
		{ as, children, rest }: TPolymorphic<T, Props<T>>,
		ref: TPolymorphicRef<T>,
	) => {
		const Component = as

		return (
			<Component ref={ref} {...rest}>
				{children}
			</Component>
		)
	},
)

export default Base
