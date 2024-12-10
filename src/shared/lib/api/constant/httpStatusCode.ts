export const HTTP_SUCCESS_CODE = {
	'200': '200',
} as const

export const HTTP_ERROR_CODE = {
	'400': '400',
	'401': '401',
	'402': '402',
	'403': '403',
	'501': '501',
	'900': '900',
} as const

export const HTTP_STATUS_CODE = {
	...HTTP_SUCCESS_CODE,
	...HTTP_ERROR_CODE,
} as const
