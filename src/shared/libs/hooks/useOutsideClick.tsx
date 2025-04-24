import { useEffect, useRef } from 'react'

const useOutsideClick = <T extends HTMLElement>(onOutsideClick: () => void) => {
	const ref = useRef<T | null>(null)
	const callbackRef = useRef(onOutsideClick)

	useEffect(() => {
		callbackRef.current = onOutsideClick
	}, [onOutsideClick])

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callbackRef.current()
			}
		}

		document.addEventListener('mousedown', handleOutsideClick)
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick)
		}
	}, [])

	return ref
}

export default useOutsideClick
