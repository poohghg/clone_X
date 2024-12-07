import { ReactNode } from 'react'

export type TToastComponent = 'logoutUser'

export type TToastType = 'basic' | 'prev' | 'harmful' | 'recomGenre'

export interface IToast {
	id: string
	type: TToastType
	message: ReactNode
	duration: number // 기본 현재 시간 + 3000ms
}
