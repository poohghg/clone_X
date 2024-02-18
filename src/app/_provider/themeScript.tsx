type Theme = 'dark' | 'light'

declare global {
	interface Window {
		__theme: Theme
		__onThemeChange: (theme: Theme) => void
		__setPreferredTheme: (theme: Theme) => void
	}
}

const code = function () {
	window.__onThemeChange = function () {}

	function setTheme(newTheme: Theme) {
		window.__theme = newTheme
		preferredTheme = newTheme
		window.__onThemeChange(newTheme)
	}

	let preferredTheme

	try {
		// document.cookie = 'cookie'
		preferredTheme = localStorage.getItem('theme') as Theme
	} catch (err) {
		console.error(err)
	}

	window.__setPreferredTheme = function (newTheme: Theme) {
		setTheme(newTheme)
		try {
			localStorage.setItem('theme', newTheme)
		} catch (err) {
			console.error(err)
		}
	}

	const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

	console.log('darkQuery', darkQuery)

	darkQuery.addEventListener('change', function (e) {
		window.__setPreferredTheme(e.matches ? 'dark' : 'light')
	})

	setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
}

const getTheme = `(${code})();`

export function ThemeScript() {
	return <script dangerouslySetInnerHTML={{ __html: getTheme }} />
}
