import React, { ElementType } from 'react'
import { TPolymorphic } from '@/shared/type/component'

interface Props<T extends ElementType> {
	as: T
	children?: React.ReactNode
}

function BaseComponent<T extends ElementType>({
	as,
	children,
	...props
}: TPolymorphic<T, Props<T>>) {
	const Component: ElementType = as
	return <Component {...props}>{children}</Component>
}

export default BaseComponent
