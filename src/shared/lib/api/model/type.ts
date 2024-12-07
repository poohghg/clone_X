import { HTTP_STATUS_CODE } from '@/shared/lib/api/constant/httpStatusCode'
import { HEADER, HEADER_CONTENT } from '@/shared/lib/api/constant/header'

export type HttpResponse<S, F> = IHttpSResponse<S> | IHttpFResponse<F>

export type HeaderContentKey = keyof typeof HEADER_CONTENT

export interface IHost {
	host?: {
		[HEADER.USER_AGENT]?: string
		[HEADER.X_REAL_IP]?: string
		Cookie?: string
	}
}

export type HttpStatusCode = keyof typeof HTTP_STATUS_CODE

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type Params = Record<string, any>

export interface IErrorMsg {
	code: HttpStatusCode
	message: string
}

interface IBaseHttpResponse {
	code: HttpStatusCode
	httpStatus: number
	ok: boolean
	body: unknown
}

export interface IHttpSResponse<S> extends IBaseHttpResponse {
	ok: true
	body: S
}

export interface IHttpFResponse<F> extends IBaseHttpResponse {
	ok: false
	body: F
}
