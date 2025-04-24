'use client'

import { useEffect, useTransition } from 'react'
import { atom, useRecoilState } from 'recoil'

const dimensionAtom = atom<{
	width: number
	height: number
}>({
	key: 'dimensionAtom',
	default: {
		width: 0,
		height: 0,
	},
})

const useDimension = () => {
	const [dimension, setDimension] = useRecoilState(dimensionAtom)
	const [isPending, startTransition] = useTransition()

	useEffect(() => {
		const updateDimension = () => {
			startTransition(() => {
				const { innerWidth, innerHeight } = window
				setDimension({
					width: innerWidth,
					height: innerHeight,
				})
			})
		}

		updateDimension()
		window.addEventListener('resize', updateDimension)

		return () => {
			window.removeEventListener('resize', updateDimension)
		}
	}, [])

	return {
		...dimension,
		isPending,
	}
}

export default useDimension
