import Header from '@/shared/uiKit/atom/Test'

const Test = () => {
	return (
		<Header>
			<Header.Link href="/">Home</Header.Link>
			<Header.Link href="/about">About</Header.Link>
			<Header.Button>Click Me</Header.Button>
		</Header>
	)
}
