'use client'

import { ReactNode, useCallback, useMemo, useState } from 'react'
import { TabsContextProvider } from '@/shared/uiKit/organisms/Tabs/Context'

interface TabsProps {
	selectedKey?: string // controlled
	defaultKey?: string // uncontrolled
	onChange?: (key: string) => void
	children: ReactNode
}

export const Tabs = ({
	selectedKey: controlledKey,
	defaultKey,
	onChange,
	children,
}: TabsProps) => {
	const isControlled = controlledKey !== undefined
	const [uncontrolledKey, setUncontrolledKey] = useState(defaultKey || '')

	const currentKey = isControlled ? controlledKey : uncontrolledKey

	const setSelectedKey = useCallback(
		(key: string) => {
			if (!isControlled) setUncontrolledKey(key)
			onChange?.(key)
		},
		[isControlled, onChange],
	)

	const contextValue = useMemo(
		() => ({
			selectedKey: currentKey,
			setSelectedKey,
		}),
		[currentKey, setSelectedKey],
	)

	return (
		<TabsContextProvider value={contextValue}>
			<div role="tablist">{children}</div>
		</TabsContextProvider>
	)
}
