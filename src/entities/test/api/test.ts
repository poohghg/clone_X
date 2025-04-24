import FetchBuilder from '@/shared/libs/api'

export interface TestParams {
	test: string
}

export interface TestDto {
	test: string
	a: 'a'
	b: number
}

export const fetchTest = async (params: TestParams) => {
	const url = ''
	const res = await new FetchBuilder(url)
		.params(params)
		.build()
		.request<TestDto>()

	// if (res.ok) {
	// 	res.
	// }
	//
	// if (res.)

	return res
}
