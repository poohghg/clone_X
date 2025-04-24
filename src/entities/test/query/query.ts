import { useQuery } from '@tanstack/react-query'
import { IAM_QUERY_OPTIONS } from '@/entities/test/query/queryOptions'
import { TestParams } from '@/entities/test/api/test'

export const useTestQuery = (params: TestParams) => {
	// const select = useCallback((data) => data, [])

	const context = useQuery({
		...IAM_QUERY_OPTIONS.userInfo(params),
	})

	// context.data
	return context
}

export const useTes1tQuery = () => {
	const context = useQuery({
		...IAM_QUERY_OPTIONS.userInfo({ test: '1' }),
	})

	return context
}
