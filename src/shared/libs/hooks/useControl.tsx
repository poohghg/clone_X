import { SetStateAction, useCallback, useState } from 'react'

type PrevStateChangeFunction<T> = (oldValue: T) => T

function isSetStateAction<T>(
	next: SetStateAction<T>,
): next is PrevStateChangeFunction<T> {
	return typeof next === 'function'
}

interface UseControlledStateProps<T> {
	controlledValue?: T
	defaultValue?: T
	onChange?: (value: T) => void
	equalityFn?: (prev: T, next: T) => boolean
}

const useControlledState = <T,>({
	controlledValue,
	defaultValue,
	onChange,
	equalityFn = Object.is,
}: UseControlledStateProps<T>) => {
	const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue as T)

	const isControlled = controlledValue !== undefined
	const value = isControlled ? controlledValue : uncontrolledValue

	const equalityCheck = useCallback(
		(prev: T, next: T) => {
			if (prev === next) return true
			return equalityFn(prev, next)
		},
		[equalityFn],
	)

	const setValue = useCallback(
		(next: SetStateAction<T>) => {
			const nextValue = isSetStateAction(next) ? next(value) : next

			if (equalityCheck(value, nextValue)) return
			if (!isControlled) setUncontrolledValue(nextValue)
			if (isControlled && nextValue === undefined)
				setUncontrolledValue(nextValue)
			onChange?.(nextValue)
		},
		[isControlled, value, onChange, equalityCheck],
	)

	return [uncontrolledValue, setValue] as const
}

export default useControlledState
