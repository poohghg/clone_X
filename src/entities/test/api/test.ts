import FetchBuilder from '@/shared/lib/api'

interface ITestRes {
	test: string
	a: 'a'
	b: number
}

export const test = async () => {
	const url = ''
	const res = await new FetchBuilder(url)
		.params({
			test: 'test',
		})
		.build()
		.request<ITestRes>()
	//
	// if (res.ok) {
	// 	return res.data.
	// }
}
