'use client'

import { memo, ReactNode } from 'react'

interface Props {
	children: ReactNode
}

const GlobalState = ({ children }: Props) => {
	return <>{children}</>
}

export default memo(GlobalState)
