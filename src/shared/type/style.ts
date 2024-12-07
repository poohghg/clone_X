import { CSSProperties } from 'react'

export interface IStyle {
	style?: CSSProperties
	className?: string
}

export interface IElementSizes {
	width: number | string
	height: number | string
}
