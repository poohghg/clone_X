/* eslint-disable no-undef */

import { HeaderContentKey, HttpErrorCode, HttpMethod, Params } from '@/shared/lib/api/model/type'
import { HEADER_CONTENT } from '@/shared/lib/api/constant/header'
import FetchResponse, { FetchErrorResponse, FetchSuccessResponse } from '@/shared/lib/api/model/Response'
import { API_URL, IS_NODE, MOCK_API_URL, USE_MOCK } from '@/shared/constant/globalConstants' // 공통 유틸 함수

class Fetch {
	private readonly url: string
	private readonly init: RequestInit

	constructor(url: string, init: RequestInit) {
		this.url = url
		this.init = init
	}

	public async request<S, F = unknown>(): Promise<
		FetchSuccessResponse<S> | FetchErrorResponse<F>
	> {
		try {
			const res = await fetch(this.url, this.init)
			const body = await res.clone().json()

			if (res.ok) {
				return FetchResponse.success<S>(body as S, res.status)
			}

			return FetchResponse.error<F>(
				body.code as HttpErrorCode,
				body as F,
				res.status,
			)
		} catch (err) {
			return FetchResponse.error<F>('501', err as F, 501)
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
		const fullUrl = this.buildUrl()
		const body = this._method === 'GET' ? null : this.buildBody()

		return new Fetch(fullUrl, {
			...this._init,
			method: this._method,
			body,
		})
	}

	private buildUrl(): string {
		const domain = this.getDomain()
		const url = `${domain}${this._url}`

		return this._method === 'GET' ? this.buildUrlWithParams(url) : `${url}`
	}

	private buildUrlWithParams(url: string): string {
		const queryString = new URLSearchParams(this._params).toString()
		return `${url}?${queryString}`
	}

	private buildBody(): BodyInit | null {
		switch (this._contentType) {
			case 'form': {
				const formData = new FormData()
				Object.keys(this._params).forEach((key) =>
					formData.append(key, this._params[key]),
				)
				return formData
			}
			case 'xForm': {
				const xForm = new URLSearchParams()
				Object.keys(this._params).forEach((key) =>
					xForm.append(key, this._params[key]),
				)
				return xForm.toString()
			}
			case 'json':
			default:
				return JSON.stringify(this._params)
		}
	}

	private getDomain() {
		if (IS_NODE) return this._useMock && USE_MOCK ? MOCK_API_URL : API_URL
		return ''
	}
}
