import { cloneDeep } from 'lodash'
import { HttpCode, IHttpCode } from '@/shared/libs/api/model/HttpStatusCode'

export class FetchFactory {
	public static success<S>(
		body: S,
		code: number,
		message: string,
	): FetchSuccessResponse<S> {
		const httpCode = new HttpCode(code.toString(), message)
		return new FetchSuccessResponse(body, httpCode)
	}

	public static error<F>(
		body: F,
		code: number,
		message: string,
	): FetchErrorResponse<F> {
		const httpCode = new HttpCode(code.toString(), message)
		return new FetchErrorResponse(httpCode, body)
	}
}

// Fetch 응답을 위한 기본 인터페이스
export interface IFetchResponse<T> {
	readonly code: IHttpCode
	readonly data: T
	readonly ok: boolean
}

// 성공 응답 인터페이스
interface ISuccessResponse<T> extends IFetchResponse<T> {
	readonly ok: true

	isSuccess(): true
}

// 실패 응답 인터페이스
interface IErrorResponse<T> extends IFetchResponse<T> {
	readonly ok: false

	isError(): true
}

class FetchResponse<T> implements IFetchResponse<T> {
	constructor(
		private readonly _code: IHttpCode,
		private readonly _data: T,
		private readonly _ok: boolean,
	) {}

	get code(): IHttpCode {
		return this._code
	}

	get data(): T {
		return cloneDeep(this._data)
	}

	get ok(): boolean {
		return this._ok
	}
}

export class FetchSuccessResponse<S>
	extends FetchResponse<S>
	implements ISuccessResponse<S>
{
	constructor(body: S, code: IHttpCode) {
		super(code, body, true)
	}

	get ok(): true {
		return true
	}

	isSuccess(): true {
		return true
	}
}

export class FetchErrorResponse<F>
	extends FetchResponse<F>
	implements IErrorResponse<F>
{
	constructor(code: IHttpCode, body: F) {
		super(code, body, false)
	}

	get ok(): false {
		return false
	}

	isError(): true {
		return true
	}
}
