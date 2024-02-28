import Icon from '@/shared/UIkit/Icon'
import Test from '@/widgets/pages/main/test'
import Date from '@/widgets/pages/main/Date'
import Date2 from '@/widgets/pages/main/Date2'

export default function HomeMain() {
	return (
		<div>
			<h1>Home</h1>
			<Icon iconKey={'ex'} />
			<Icon iconKey={'left'} />
			<Icon iconKey={'sm_user'} />
			<Icon iconKey={'sm_search'} />
			<Test />
			<Date />
			<Date2 />
		</div>
	)
}
