import createContext from '@/shared/libs/utils/createContext'

interface TabsContext {
	selectedKey: string
	setSelectedKey?: (key: string) => void
}

export const [TabsContextProvider, useTabsContext] = createContext<TabsContext>(
	{
		name: 'TabsContext',
		errorMessage:
			'useTabsContext: `context` is undefined. Seems you forgot to wrap all components in <Tabs />',
	},
)
