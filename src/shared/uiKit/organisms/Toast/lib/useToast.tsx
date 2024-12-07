import { useRecoilState } from 'recoil'

import { ReactNode, useCallback } from 'react'
import {
	IToast,
	TToastComponent,
	TToastType,
} from '@/shared/uiKit/organisms/Toast/model/model'
import { toastState } from '@/shared/uiKit/organisms/Toast/model/state'

interface ShowToastProps {
	type?: TToastType
	message?: string
	component?: TToastComponent
	duration?: number
	isForce?: boolean
	callback?: () => void
}

const ToastComponent: Record<TToastComponent, ReactNode> = {
	logoutUser: null,
}

function getNewValue({
	type,
	message,
	duration,
	component,
}: ShowToastProps): IToast {
	const time = new Date().getTime()
	const endTime = time + duration!

	return {
		id: time.toString(),
		duration: endTime,
		message: component ? ToastComponent[component] : message,
		type: type!,
	}
}

export default function useToast() {
	const [toast, setToast] = useRecoilState(toastState)

	const isShowToast = toast.length > 0

	const showToast = useCallback(
		({
			message,
			component,
			type = 'basic',
			duration = 3_000,
			isForce = true,
		}: ShowToastProps) => {
			if (!message && !component)
				throw new Error('message or componentType is required')

			const newValue = getNewValue({ message, type, duration, component })

			if (isForce)
				setToast((prev) => {
					const infinityValues = prev.filter(
						(item) => item.duration === Infinity,
					)
					return [newValue, ...infinityValues]
				})
			else setToast((prev) => [...prev, newValue])

			return newValue.id
		},
		[],
	)

	const clearToast = useCallback((ids: string | string[]) => {
		const deleteToast = (id: string) => {
			setToast((prev) => prev.filter((item) => item.id !== id))
		}

		if (Array.isArray(ids)) ids.forEach(deleteToast)
		else deleteToast(ids)
	}, [])

	const allClearToast = useCallback(() => {
		setToast([])
	}, [])

	return { toast, isShowToast, showToast, clearToast, allClearToast }
}
