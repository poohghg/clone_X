import { HttpErrorCode, HttpSuccessCode } from '@/shared/lib/api/model/type'
import { cloneDeep } from 'lodash'

export default class FetchResponse<T, S extends boolean = boolean> {
	public readonly code: S extends true ? HttpSuccessCode : HttpErrorCode
	public readonly httpStatus: number
	public readonly ok: S
	public readonly body: T

	constructor(
		code: S extends true ? HttpSuccessCode : HttpErrorCode,
		httpStatus: number,
		ok: S,
		body: T,
	) {
		this.code = code
		this.httpStatus = httpStatus
		this.ok = ok
		this.body = body
	}

	get data() {
		return cloneDeep(this.body)
	}

	public static success<S>(
		body: S,
		httpStatus: number,
	): FetchSuccessResponse<S> {
		return new FetchSuccessResponse(body, httpStatus)
	}

	public static error<F>(
		code: HttpErrorCode,
		body: F,
		httpStatus: number,
	): FetchErrorResponse<F> {
		return new FetchErrorResponse(code, httpStatus, body)
	}

	public isSuccess(): this is FetchResponse<T, true> {
		return this.ok === true
	}

	public isError(): this is FetchResponse<T, false> {
		return this.ok === false
	}
}

export class FetchSuccessResponse<S> extends FetchResponse<S, true> {
	constructor(body: S, httpStatus: number) {
		super('200', httpStatus, true, body)
	}
}

export class FetchErrorResponse<F> extends FetchResponse<F, false> {
	constructor(code: HttpErrorCode, httpStatus: number, body: F) {
		super(code, httpStatus, false, body)
	}

	get errorMessage() {
		return this.body
	}
}
