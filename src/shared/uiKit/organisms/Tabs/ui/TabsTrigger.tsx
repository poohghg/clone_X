import { forwardRef, MouseEvent } from 'react'
import { MergeElementProps } from '@/shared/type/component'
import { useTabsContext } from '@/shared/uiKit/organisms/Tabs/Context'

interface TabsTriggerProps {
	tabKey: string
}

const TabsTrigger = forwardRef<
	HTMLButtonElement,
	MergeElementProps<'button', TabsTriggerProps>
>((props, ref) => {
	const { selectedKey, setSelectedKey } = useTabsContext()

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		setSelectedKey(props.tabKey)
	}

	return (
		<button
			type="button"
			ref={ref}
			role="tab"
			tabIndex={0}
			aria-selected={selectedKey === props.tabKey}
			onClick={handleClick}
			{...props}
		>
			{props.children}
		</button>
	)
})

export default TabsTrigger

TabsTrigger.displayName = 'TabsList'
