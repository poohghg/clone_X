export const HTTP_STATUS_CODE = {
	'200': '200', // 성공 - 프론트에서 의도적 명시
	'400': '401', // 요청 파라미터 오류	COMMON
	'402': '402', // 유효하지 않은 채널	COMMON
	'403': '403', // 유효하지 않은 쿠키	COMMON
	'404': '404', // 유효하지 않은 파일 형태	COMMON
	'501': '501', // 서버 오류	COMMON
} as const

export const ERROR_CODE = {
	// 9000001: 9000001,
}
