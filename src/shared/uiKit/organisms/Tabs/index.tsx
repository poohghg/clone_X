'use client'

import { forwardRef } from 'react'
import { TabsContextProvider } from '@/shared/uiKit/organisms/Tabs/Context'
import { MergeElementProps } from '@/shared/type/component'
import TabsList from '@/shared/uiKit/organisms/Tabs/ui/TabsList'
import TabsTrigger from '@/shared/uiKit/organisms/Tabs/ui/TabsTrigger'
import TabPanel from '@/shared/uiKit/organisms/Tabs/ui/TabPanel'

interface TabsProps<T = string> {
	controlledKey?: string // controlled
	defaultKey?: string // uncontrolled
	onChange?: (key: T) => void
}

export const Tabs = forwardRef<
	HTMLDivElement,
	MergeElementProps<'div', TabsProps<string>>
>(({ controlledKey, defaultKey, onChange, children, ...props }, ref) => {
	// const tabInfo = Children.toArray(children)
	// 	.filter(isValidElement)
	// 	.map((child) => {
	// 		const props = child.props as TabProps
	// 		return props ? ObjectHelper.pick(props, ['title', 'tabKey']) : false
	// 	})
	// 	.filter((child) => child !== false)

	return (
		<TabsContextProvider
			controlledKey={controlledKey}
			defaultKey={defaultKey}
			onChange={onChange}
		>
			<div ref={ref} {...props}>
				{children}
			</div>
		</TabsContextProvider>
	)
})

Tabs.displayName = 'Tabs'

const TabsWithComponents = Object.assign(Tabs, {
	TabsList,
	Trigger: TabsTrigger,
	Panel: TabPanel,
})

export default TabsWithComponents

const Test = () => {
	return (
		<TabsWithComponents defaultKey="/1" onChange={(key) => {}}>
			<TabsWithComponents.Trigger tabKey="/1" title="Photos">
				<div>111</div>
			</TabsWithComponents.Trigger>
			<TabsWithComponents.Trigger tabKey="/2" title="Music">
				<div>222</div>
			</TabsWithComponents.Trigger>
			<TabsWithComponents.Trigger tabKey="/3" title="Videos">
				<div>333</div>
			</TabsWithComponents.Trigger>
			<TabsWithComponents.Trigger tabKey="/4" title="Documents">
				<div>444</div>
			</TabsWithComponents.Trigger>
		</TabsWithComponents>
	)
}
