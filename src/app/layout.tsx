import type { Metadata, Viewport } from 'next'
import React, { ReactNode } from 'react'
import './reset.css'
import './global.css'
import genMetadata from '@/app/_head/metadata'
import genViewPort from '@/app/_head/viewport'
import RecoilProvider from '@/app/_provider/RecoilProvider'
import ReactQueryProvider from '@/app/_provider/ReactQueryProvider'
import GlobalState from '@/app/_provider/GlobalState'

export const metadata: Metadata = {
	...genMetadata(),
}

export function generateViewport(): Viewport {
	return genViewPort()
}

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode
}>) => {
	return (
		<html lang="ko">
			<head></head>
			<body>
				<RootComponent>{children}</RootComponent>
			</body>
		</html>
	)
}

const RootComponent = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<RecoilProvider>
			<ReactQueryProvider>
				{/*<ServerFetchProvider>*/}
				<GlobalState>
					{children}
					{/*<DarkMode />*/}
					{/*</ClientStateProvider>*/}
				</GlobalState>
			</ReactQueryProvider>
		</RecoilProvider>
	)
}

export default RootLayout
