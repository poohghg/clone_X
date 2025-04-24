import { useEffect, useRef, useState } from 'react'

const useInView = (
	options?: IntersectionObserverInit,
	callback?: () => void,
) => {
	const ref = useRef<HTMLDivElement>(null)
	const [inView, setInView] = useState(false)

	useEffect(() => {
		if (!ref.current) return

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				if (callback) callback()
				setInView(true)
				observer.disconnect() // 한 번만 감지
			}
		}, options)

		observer.observe(ref.current)

		return () => observer.disconnect()
	}, [ref])

	return { ref, inView }
}

export default useInView
