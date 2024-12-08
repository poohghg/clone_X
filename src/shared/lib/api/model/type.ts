import {
	HTTP_ERROR_CODE,
	HTTP_STATUS_CODE,
	HTTP_SUCCESS_CODE,
} from '@/shared/lib/api/constant/httpStatusCode'
import { HEADER, HEADER_CONTENT } from '@/shared/lib/api/constant/header'

export type HeaderContentKey = keyof typeof HEADER_CONTENT

export interface IHost {
	host?: {
		[HEADER.USER_AGENT]?: string
		[HEADER.X_REAL_IP]?: string
		Cookie?: string
	}
}

export type HttpStatusCode = keyof typeof HTTP_STATUS_CODE

export type HttpSuccessCode = keyof typeof HTTP_SUCCESS_CODE

export type HttpErrorCode = keyof typeof HTTP_ERROR_CODE

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type Params = Record<string, any>

export interface IErrorMsg {
	code: HttpErrorCode
	message: string
}
