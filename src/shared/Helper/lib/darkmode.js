function setDarkMode() {
	const darkMode = localStorage.getItem('darkMode')
	if (!darkMode) {
		const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
			.matches
			? 'true'
			: 'false'
		console.log('preferDarkMode', preferDarkMode)
	}
	// if (darkMode === 'true') {
	// 	document.body.classList.add('dark-mode')
	// } else {
	// 	document.body.classList.remove('dark-mode')
	// }
}

setDarkMode()
