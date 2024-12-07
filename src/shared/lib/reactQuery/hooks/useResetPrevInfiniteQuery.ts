import { QueryKey, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import isEqual from 'lodash/isEqual'

const useResetPrevInfiniteQuery = (queryKey: QueryKey) => {
	const [prevKey, setPrevKey] = useState(queryKey)
	const queryClient = useQueryClient()

	useEffect(() => {
		if (!isEqual(prevKey, queryKey)) {
			queryClient.setQueryData(prevKey, (oldData: any) => ({
				pageParams: oldData?.pageParams?.slice(0, 1) ?? [],
				pages: oldData?.pages?.slice(0, 1) ?? [],
			}))
			setPrevKey(queryKey)
		}
	}, [queryKey])
}

export default useResetPrevInfiniteQuery
