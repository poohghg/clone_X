// todo 컴파운드로 변경 ?
import { ReactNode, useCallback, useState } from 'react'
import useOutsideClick from '../../../shared/lib/hook/useOutsideClick'

const useDropDown = (initValue: boolean = false) => {
	const [isOpen, setIsOpen] = useState(initValue)
	const ref = useOutsideClick<HTMLDivElement>(() => {
		setIsOpen((open) => {
			if (open) return false
			return open
		})
	})

	const toggleDropDown = useCallback(() => {
		setIsOpen((prev) => !prev)
	}, [])

	const openDropDown = useCallback(() => {
		setIsOpen(true)
	}, [])

	const closeDropDown = useCallback(() => {
		setIsOpen(false)
	}, [])

	const DropDownContent = useCallback(
		({ children }: { children: ReactNode }) => {
			if (!isOpen) return null
			return <div ref={ref}>{children}</div>
		},
		[isOpen, ref],
	)

	return {
		isOpen,
		openDropDown,
		closeDropDown,
		toggleDropDown,
		DropDownContent,
	}
}

export default useDropDown
