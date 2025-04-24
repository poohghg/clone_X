import { ReactNode } from 'react'
import { UseQueryResult } from '@tanstack/react-query'
import { useTestQuery } from '@/entities/test/query/query'
import { HttpSuccessCodes } from '@/shared/libs/api/model/HttpStatusCode'

type FetcherProps<TData, TError, TParams> = {
	params: TParams
	query: (params: TParams) => UseQueryResult<TData, TError>
}

const useFetcher = <TData, TError, TParams>({
	query,
	params,
}: FetcherProps<TData, TError, TParams>) => {
	const { data, isLoading, error } = query(params)

	const Fetcher = ({
		children,
		loadingFallback,
		errorFallback,
	}: {
		children: ReactNode
		loadingFallback?: ReactNode
		errorFallback?: ReactNode
	}) => {
		if (isLoading) {
			return loadingFallback || <div>1</div>
		}

		if (error) {
			return errorFallback || <div>2</div>
		}

		return <>{children}</>
	}

	return {
		Fetcher,
		data: data,
	}
}

const T = () => {
	const { data, Fetcher } = useFetcher({
		query: useTestQuery,
		params: { test: '1' },
	})

	if (data?.ok) {
		data.code.equal(HttpSuccessCodes.OK)
	}

	return (
		<Fetcher loadingFallback={<div>로딩 중</div>}>
			{data?.ok && <div>{data.data.test}</div>}
		</Fetcher>
	)
}
