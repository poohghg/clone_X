import styles from '../DropDown.module.scss'
import classNames from 'classnames/bind'
import { ReactNode } from 'react'
import { MergeElementProps } from '../../../shared/type/css'

const cn = classNames.bind(styles)

interface DropDownListProps {
	children: ReactNode
}

const DropDownList = ({
	children,
	...props
}: MergeElementProps<'ul', DropDownListProps>) => {
	return (
		<ul {...props} className={cn('list', props.className)}>
			{children}
		</ul>
	)
}

export default DropDownList
