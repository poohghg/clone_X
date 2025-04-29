'use client'

import { Tabs } from '@/shared/uiKit/organisms/Tabs'

const Test = () => {
	return (
		<Tabs defaultKey="/1" onChange={(key) => console.log(key)}>
			{/*<Tab tabKey="/1" title="Photos">*/}
			{/*	<div>111</div>*/}
			{/*</Tab>*/}
			{/*<Tab tabKey="/2" title="Music">*/}
			{/*	<div>222</div>*/}
			{/*</Tab>*/}
		</Tabs>
	)
}

export default Test
