import { useState } from 'react'

export type FetchStatus = 'idle' | 'loading' | 'success' | 'error'

export interface FetchResponse<T> {
	readonly data: T
	readonly ok: boolean
}

interface Props<T> {
	fetchFunction: (params?: unknown) => Promise<FetchResponse<T>>
	onSuccess?: (data: T) => void
	onError?: (error: unknown) => void
}

const useFetch = <T,>({ fetchFunction, onSuccess, onError }: Props<T>) => {
	const [fetchStatus, setFetchStatus] = useState<FetchStatus>('idle')
	const [result, setResult] = useState<T | null>(null)

	const fetch = async () => {
		setFetchStatus('loading')

		try {
			const response = await fetchFunction()

			if (!response.ok) {
				throw new Error('Response not OK')
			}

			setResult(response.data)
			setFetchStatus('success')
			onSuccess?.(response.data)
			return response.data
		} catch (err) {
			setFetchStatus('error')
			onError?.(err)
			return null
		}
	}

	return {
		fetchStatus,
		fetch,
		result,
	}
}

export default useFetch
