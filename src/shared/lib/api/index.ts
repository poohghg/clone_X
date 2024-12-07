/* eslint-disable no-undef */

import { HeaderContentKey, HttpMethod, HttpResponse, IErrorMsg, Params } from '@/shared/lib/api/model/type'
import { HEADER_CONTENT } from '@/shared/lib/api/constant/header'
import { API_URL, IS_NODE, MOCK_API_URL } from '@/shared/constant/globalConstants' // 공통 유틸 함수

// 공통 유틸 함수
const buildUrlWithParams = (url: string, params: Params): string => {
	const queryString = new URLSearchParams(params).toString()
	return queryString ? `${url}?${queryString}` : url
}

const buildBody = (
	params: Params,
	contentType: HeaderContentKey,
): BodyInit | null => {
	switch (contentType) {
		case 'form': {
			const formData = new FormData()
			Object.keys(params).forEach((key) => formData.append(key, params[key]))
			return formData
		}
		case 'xForm': {
			const xForm = new URLSearchParams()
			Object.keys(params).forEach((key) => xForm.append(key, params[key]))
			return xForm.toString()
		}
		case 'json':
		default:
			return JSON.stringify(params)
	}
}

// Fetch 클래스
class Fetch {
	private readonly url: string
	private readonly init: RequestInit

	constructor(url: string, init: RequestInit) {
		this.url = url
		this.init = init
	}

	public async request<S, F = IErrorMsg>(): Promise<HttpResponse<S, F>> {
		try {
			const res = await fetch(this.url, this.init)
			const body = await res.clone().json()

			if (res.ok)
				return {
					code: '200',
					httpStatus: res.status,
					body: body as S,
					ok: true,
				}

			return {
				code: body.code,
				httpStatus: res.status,
				body: body as F,
				ok: false,
			}
		} catch (err) {
			return {
				code: '501',
				httpStatus: 501,
				body: err as F,
				ok: false,
			}
		}
	}
}

export default class FetchBuilder {
	private readonly _url: string

	private _useMock: boolean = false

	private _method: HttpMethod = 'GET'

	private _params: Params = {}

	private _init: RequestInit = {
		cache: 'no-store',
		headers: {
			'Content-Type': 'application/json',
		},
	}

	private _contentType: HeaderContentKey = 'json'

	constructor(url: string) {
		this._url = url
	}

	public params(params: Params) {
		this._params = params
		return this
	}

	public httpMethod(method: HttpMethod) {
		this._method = method
		return this
	}

	public initConfig(config: RequestInit) {
		this._init = {
			...this._init,
			...config,
		}
		return this
	}

	public nextConfig(nextConfig: NextFetchRequestConfig) {
		this._init.next = {
			...this._init.next,
			...nextConfig,
		}
		return this
	}

	public headers(headers: Record<string, string>) {
		this._init.headers = { ...this._init.headers, ...headers }
		return this
	}

	public headersContent(key: HeaderContentKey) {
		this._init.headers = {
			...this._init.headers,
			'Content-Type': HEADER_CONTENT[key],
		}
		this._contentType = key
		return this
	}

	public useMock(isMock: boolean) {
		this._useMock = isMock
		return this
	}

	public nextTags(tags: string | string[]) {
		this._init.next = {
			tags: typeof tags === 'string' ? [tags] : tags,
		}
		return this
	}

	public build() {
		const domain = IS_NODE ? (this._useMock ? MOCK_API_URL : API_URL) : ''

		const fullUrl =
			this._method === 'GET'
				? buildUrlWithParams(`${domain}${this._url}`, this._params)
				: `${domain}${this._url}`

		const body =
			this._method !== 'GET'
				? buildBody(this._params, this._contentType)
				: undefined

		return new Fetch(fullUrl, {
			...this._init,
			method: this._method,
			body,
		}).request()
	}
}
