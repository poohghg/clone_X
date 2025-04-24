import dynamic from 'next/dynamic'

const TestTime = async ({ ms }: { ms: number }) => {
	const time: number = await new Promise((s) => {
		setTimeout(() => {
			s(new Date().getTime())
		}, ms)
	})

	return (
		<div
			style={{
				display: 'flex',
				height: '150px',
				border: '1px solid black',
			}}
		>
			<p>{ms}</p>
			<p>{time}</p>
		</div>
	)
}

export default dynamic(() => Promise.resolve(TestTime), {
	loading: () => <p>Loading...</p>,
})
