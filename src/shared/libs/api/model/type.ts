import { HEADER, HEADER_CONTENT } from '@/shared/libs/api/constant/header'

export type HeaderContentKey = keyof typeof HEADER_CONTENT

export interface IHost {
	host?: {
		[HEADER.USER_AGENT]?: string
		[HEADER.X_REAL_IP]?: string
		Cookie?: string
	}
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type Params = Record<string, any>
