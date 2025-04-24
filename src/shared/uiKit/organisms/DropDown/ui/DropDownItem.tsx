import styles from '../DropDown.module.scss'
import classNames from 'classnames/bind'
import { MouseEventHandler, ReactNode } from 'react'
import { MergeElementProps } from '@/shared/type/component'
import { useDropDownContext } from '@/shared/uiKit/organisms/DropDown/Context'

const cn = classNames.bind(styles)

interface DropDownItemProps {
	children: ReactNode
	onClick?: MouseEventHandler<HTMLLIElement>
	selected?: boolean
}

const DropDownItem = ({
	children,
	onClick,
	selected,
	...props
}: MergeElementProps<'li', DropDownItemProps>) => {
	const { closeDropDown } = useDropDownContext()

	const handleClick: MouseEventHandler<HTMLLIElement> = (e) => {
		if (onClick) onClick(e)
		closeDropDown()
	}

	return (
		<li
			{...props}
			className={cn('list-item', props.className, {
				selected: selected,
			})}
			onClick={handleClick}
		>
			{children}
		</li>
	)
}

export default DropDownItem
