import Icon from '@/shared/UIkit/Icon'
import Test from '@/widgets/pages/main/test'

export default function HomeMain() {
	return (
		<div>
			<h1>Home</h1>
			<Icon iconKey={'ex'} />
			<Icon iconKey={'left'} />
			<Icon iconKey={'sm_user'} />
			<Icon iconKey={'sm_search'} />
			<Test />
		</div>
	)
}
