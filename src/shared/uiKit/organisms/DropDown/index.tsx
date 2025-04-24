import { ReactNode } from 'react'
import DropDownList from './ui/DropDownList'
import DropDownItem from './ui/DropDownItem'
import { DropDownProvider } from './ui/DropDownProvider'
import { DropDownTrigger } from './ui/DropDownTrigger'
import DropDownContent from './ui/DropDownContent'
import { Styles } from '@/shared/type/style'

interface DropDownProps extends Styles {
	children: ReactNode
}

const DropDown = ({ children, ...props }: DropDownProps) => {
	return (
		<DropDownProvider>
			<div
				{...props}
				style={{
					position: 'relative',
					...props.style,
				}}
			>
				{children}
			</div>
		</DropDownProvider>
	)
}

export default Object.assign(DropDown, {
	DropDownTrigger: DropDownTrigger,
	DropDownContent: DropDownContent,
	DropDownList: DropDownList,
	DropDownItem: DropDownItem,
})
