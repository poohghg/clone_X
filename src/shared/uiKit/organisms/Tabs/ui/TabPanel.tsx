import { ReactNode } from 'react'
import { useTabsContext } from '@/shared/uiKit/organisms/Tabs/Context'

export interface TabProps {
	tabKey: string
	title: string
	href?: string
	children: ReactNode
}

const TabPanel = ({ tabKey, title, children }: TabProps) => {
	const { selectedKey } = useTabsContext()
	const isSelected = selectedKey === selectedKey

	return <>{isSelected && <div role="tabpanel">{children}</div>}</>
}

export default TabPanel
