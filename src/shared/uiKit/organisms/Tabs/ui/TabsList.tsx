import { forwardRef } from 'react'
import { MergeElementProps } from '@/shared/type/component'

interface TabsListProps {}

const TabsList = forwardRef<
	HTMLDivElement,
	MergeElementProps<'div', TabsListProps>
>((props, ref) => {
	return (
		<div
			ref={ref}
			role="tablist"
			aria-orientation="horizontal"
			{...props}
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			{props.children}
		</div>
	)
})

export default TabsList

TabsList.displayName = 'TabsList'
