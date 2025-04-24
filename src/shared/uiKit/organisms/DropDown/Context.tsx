import createContext from '@/shared/libs/utils/createContext'

interface DropDownContext {
	isOpen: boolean
	openDropDown: () => void
	closeDropDown: () => void
	toggleDropDown: () => void
}

export const [DropDownContextProvider, useDropDownContext] =
	createContext<DropDownContext>({
		errorMessage:
			'useDropdownContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Dropdown />`',
		name: 'DropdownContext',
	})
