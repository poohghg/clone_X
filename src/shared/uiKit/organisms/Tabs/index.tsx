'use client'

import { forwardRef } from 'react'
import { TabsContextProvider } from '@/shared/uiKit/organisms/Tabs/Context'
import { MergeElementProps } from '@/shared/type/component'
import TabsList from '@/shared/uiKit/organisms/Tabs/ui/TabsList'
import TabsTrigger from '@/shared/uiKit/organisms/Tabs/ui/TabsTrigger'
import TabPanel from '@/shared/uiKit/organisms/Tabs/ui/TabPanel'

interface TabsProps<T> {
	controlledKey?: string // controlled
	defaultKey?: string // uncontrolled
	onChange?: (key: T) => void
}

export const Tabs = forwardRef<
	HTMLDivElement,
	MergeElementProps<'div', TabsProps<T>>
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

export default Object.assign(Tabs, {
	TabsList,
	Trigger: TabsTrigger,
	Panel: TabPanel,
})

const Test = () => {
	return (
		<Tabs defaultKey="/1" onChange={(key) => console.log(key)}>
			<Tabs.Trigger tabKey="/1" title="Photos">
				<div>111</div>
			</Tabs.Trigger>
			<Tabs.Trigger tabKey="/2" title="Music">
				<div>222</div>
			</Tabs.Trigger>
			<Tabs.Trigger tabKey="/3" title="Videos">
				<div>333</div>
			</Tabs.Trigger>
			<Tabs.Trigger tabKey="/4" title="Documents">
				<div>444</div>
			</Tabs.Trigger>
		</Tabs>
	)
}
