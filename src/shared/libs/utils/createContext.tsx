'use client'

import {
	Context,
	createContext as ReactCreateContext,
	Provider,
	useContext as ReactUseContext,
} from 'react'

interface ContextOptions {
	name: string
	strict?: boolean
	errorMessage?: string
}

export type ReturnContext<T> = [Provider<T>, () => T, Context<T>]

const createContext = <ContextType,>({
	name,
	strict = true,
	errorMessage,
}: ContextOptions) => {
	const Context = ReactCreateContext<ContextType | undefined>(undefined)

	Context.displayName = name

	const useContext = () => {
		const context = ReactUseContext(Context)

		if (!context && strict) {
			const error = new Error(errorMessage || `${name} is undefined`)

			error.name = 'ContextError'
			Error.captureStackTrace?.(error, useContext)
			throw error
		}

		return context
	}

	return [Context.Provider, useContext, Context] as ReturnContext<ContextType>
}

export default createContext
