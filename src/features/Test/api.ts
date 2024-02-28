import Fetch from '@/shared/API'

export async function testAPI() {
	const timeZone = 'UTC'
	const url = `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`
	const res = await new Fetch(url)
		.addNextConfig({
			tags: ['DATE'],
		})
		.addConfig({
			headers: {
				'Content-Type': 'application/json',
				Cookie:
					'myme = Gender=M&AuthAdult=True&LoginType=S&AuthReal=True&Generation=C&Regdate=2023%2E06%2E15+11%3A33&Email=poohghg%40mrblue%2Ecom&AgreedateParent=++++++++++&Agreedate=2023%2D06%2D15+%EC%98%A4%EC%A0%84+11%3A33%3A00&Age=32&Type=S&Nickname=%EA%B6%8C%ED%98%81%EA%B5%AC&AuthYN=Y&FavoriteNovelGenre=&FavoriteComicGenre=&FavoriteWebtoonGenre=&SUBAGE=32&ID=M000872244&Mode=live&LoginCountry=KR%09Korea&LoginIPAddr=116%2E41%2E33%2E161&Pass=e736f805a24e09491bcd28bc20981f43&Key=da476047f06866aa25c7e8c2d6e3b81c',
				// 'cache-control': '',
			},
		})
		.addCache('force-cache')
		.request<{
			dateTime: string
		}>()

	return res
}

export async function test2Api() {
	const url = 'https://shikimori.one/api/animes'
	const res = await new Fetch(url)
		.addNextConfig({
			tags: ['TEST2'],
		})
		.addCache('force-cache')
		.request()

	console.log('test2Api', res.body)
	return res
}
