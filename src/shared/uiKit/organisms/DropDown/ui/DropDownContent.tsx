import { memo, ReactNode, useCallback } from 'react'
import useOutsideClick from '@/shared/libs/hooks/useOutsideClick'
import { useDropDownContext } from '@/shared/uiKit/organisms/DropDown/Context'

interface DropDownContentProps {
	children: ReactNode
	useAutoClose?: boolean
}

const DropDownContent = ({
	children,
	useAutoClose = true,
}: DropDownContentProps) => {
	const { isOpen, closeDropDown } = useDropDownContext()

	const ref = useOutsideClick<HTMLDivElement>(
		useCallback(() => {
			if (!useAutoClose) return
			closeDropDown()
		}, [closeDropDown, useAutoClose]),
	)

	if (!isOpen) return null
	return <div ref={ref}>{children}</div>
}

export default memo(DropDownContent)
