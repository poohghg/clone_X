'use client'

import { ReactNode, useEffect, useState } from 'react'

interface ConditionalWrapperProps {
	children: ReactNode
	isNull: boolean
	isLoading?: boolean
}

export function ConditionalWrapper({
	children,
	isNull,
	isLoading,
}: ConditionalWrapperProps) {
	if (isLoading) return null
	if (isNull) return null
	return children
}

interface ConditionalClientWrapperProps {
	children: ReactNode
	fallback?: ReactNode
}

export function ConditionalClientWrapper({
	children,
	fallback,
}: ConditionalClientWrapperProps) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return fallback ?? null
	return children
}
