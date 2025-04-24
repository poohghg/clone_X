import { ReactElement, useCallback, useState } from 'react'
import { DropDownContextProvider } from '@/shared/uiKit/organisms/DropDown/Context'

export const DropDownProvider = ({ children }: { children: ReactElement }) => {
	const [isOpen, setIsOpen] = useState(false)

	const openDropDown = useCallback(() => setIsOpen(true), [])
	const closeDropDown = useCallback(() => setIsOpen(false), [])
	const toggleDropDown = useCallback(() => setIsOpen((prev) => !prev), [])

	const value = {
		isOpen,
		openDropDown,
		closeDropDown,
		toggleDropDown,
	}

	return (
		<DropDownContextProvider value={value}>{children}</DropDownContextProvider>
	)
}
