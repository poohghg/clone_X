'use client'

import { Tabs } from '@/shared/uiKit/organisms/Tabs'
import { Tab } from '@/shared/uiKit/organisms/Tabs/ui/Tab'

const Test = () => {
	return (
		<Tabs defaultKey={'1'} onChange={(key) => console.log(key)}>
			<Tab tabKey="/1" title="Photos">
				333
			</Tab>
			<Tab tabKey="/2" title="Music">
				444
			</Tab>
		</Tabs>
	)
}

export default Test
