import styles from './Header.module.scss'
import { MergeElementProps } from '@/shared/type/component'
import Link, { LinkProps } from 'next/link'
import { classNameBind } from '@/shared/libs/className'

const cx = classNameBind(styles)

const HeaderLinkItem = ({
	children,
	...props
}: MergeElementProps<'a', LinkProps>) => {
	return (
		<Link className={cx('item')} {...props}>
			{children}
		</Link>
	)
}

HeaderLinkItem.displayName = 'HeaderLinkItem'

const Button = ({ children, ...props }: MergeElementProps<'button'>) => {
	return (
		<button className={cx('item')} {...props}>
			{children}
		</button>
	)
}

Button.displayName = 'HeaderButtonItem'

const HeaderRoot = ({ children, ...props }: MergeElementProps<'header'>) => {
	return (
		<header className={cx('header')} {...props}>
			<div className={cx('group')}>{children}</div>
		</header>
	)
}

HeaderRoot.displayName = 'HeaderRoot'

const Header = Object.assign(HeaderRoot, {
	Button,
	Link: HeaderLinkItem,
	HeaderLinkItem,
})

export default Header

const Test = () => {
	return (
		<Header>
			<Header.Link href="/">홈</Header.Link>
			<Header.Button>버튼</Header.Button>
			<Header.Link href="/test">테스트</Header.Link>
		</Header>
	)
}
