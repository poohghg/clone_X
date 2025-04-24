import { FunctionComponent, memo, ReactNode } from 'react'
import { useDropDownContext } from '@/shared/uiKit/organisms/DropDown/Context' // ReactElement 제거, FunctionComponent 추가

interface DropDownTriggerProps {
	children: (toggleDropDown: () => void) => ReactNode
}

export const DropDownTrigger: FunctionComponent<DropDownTriggerProps> = ({
	children,
}) => {
	const { toggleDropDown } = useDropDownContext()
	return <>{children(toggleDropDown)}</>
}

export default memo(DropDownTrigger)
