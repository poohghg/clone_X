export const HTTP_SUCCESS_CODE = {
	'200': '200', // 성공 - 프론트에서 의도적 명시
} as const

export const HTTP_ERROR_CODE = {
	'400': '400',
	'401': '401',
	'402': '402',
	'403': '403',
	'501': '501',
} as const

export const HTTP_STATUS_CODE = {
	...HTTP_SUCCESS_CODE,
	...HTTP_ERROR_CODE,
} as const

export const ERROR_CODE = {
	// 9000001: 9000001,
}
