import createContext from '@/shared/libs/utils/createContext'
import useControlledState from '@/shared/libs/hooks/useControl'
import { ReactNode, useMemo } from 'react'

interface TabsContext {
	selectedKey: string
	setSelectedKey: (key: string) => void
}

const [Provider, useTabsContext] = createContext<TabsContext>({
	name: 'TabsContext',
	errorMessage:
		'useTabsContext: `context` is undefined. Seems you forgot to wrap all components in <Tabs />',
})

export { useTabsContext }

interface TabsProviderProps {
	children: ReactNode
	controlledKey?: string
	defaultKey?: string
	onChange?: (key: string) => void
}

export const TabsContextProvider = ({
	children,
	controlledKey,
	defaultKey,
	onChange,
}: TabsProviderProps) => {
	const [selectedKey, setSelectedKey] = useControlledState({
		controlledValue: controlledKey,
		defaultValue: defaultKey,
		onChange,
	})

	const contextValue = useMemo(
		() => ({
			selectedKey,
			setSelectedKey,
		}),
		[selectedKey, setSelectedKey],
	)

	return <Provider value={contextValue}>{children}</Provider>
}
