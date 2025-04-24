import TestTime from '@/page/home/TestTime'

export default function Home() {
	return (
		<div>
			<TestTime ms={1000} />
			<TestTime ms={3000} />
			<TestTime ms={10000} />
			{/*<Suspense>*/}
			{/*	<TestTime ms={1000} />*/}
			{/*</Suspense>*/}
			{/*<Suspense>*/}
			{/*	<TestTime ms={3000} />*/}
			{/*</Suspense>*/}
			{/*<Suspense>*/}
			{/*	<TestTime ms={5000} />*/}
			{/*</Suspense>*/}
		</div>
	)
}
