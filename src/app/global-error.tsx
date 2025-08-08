'use client'

export default function GlobalError({
	error: _error,
	reset: _reset,
}: Readonly<{
	error: Error & { digest?: string }
	reset: () => void
}>) {
	return (
		<html>
			<body></body>
		</html>
	)
}
