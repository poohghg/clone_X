import { ReactNode } from 'react'
import { useTabsContext } from '@/shared/uiKit/organisms/Tabs/Context'

interface TabProps {
	tabKey: string
	title: string
	href?: string
	children: ReactNode
}

export const Tab = ({ tabKey, title, href, children }: TabProps) => {
	const { selectedKey, setSelectedKey } = useTabsContext()
	const isActive = selectedKey === tabKey

	return (
		<>
			<button
				role="tab"
				aria-selected={isActive}
				onClick={() => {
					if (setSelectedKey) {
						setSelectedKey(tabKey)
					}
				}}
				style={{
					fontWeight: isActive ? 'bold' : 'normal',
					marginRight: '8px',
				}}
			>
				{title}
			</button>

			{isActive && <div role="tabpanel">{children}</div>}
		</>
	)
}
