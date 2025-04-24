import { fetchTest, TestParams } from '@/entities/test/api/test'

export const IAM_KEYS = {
	userInfo() {
		return ['iam/userInfo']
	},
} as const

export const IAM_QUERY_OPTIONS = {
	userInfo(params: TestParams) {
		return {
			queryKey: IAM_KEYS.userInfo(),
			queryFn: () => fetchTest(params),
		}
	},
} as const
