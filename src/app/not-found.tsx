import cn from 'classnames'
import st from './not-found.module.scss'

export default function NotFound() {
	return (
		<div className={cn(st['not-found'])}>
			<h2 className={cn(st['highlight'])}>404</h2>
			<p className={cn(st['description'])}>
				죄송합니다.
				<br />
				요청하신 페이지를 찾을 수 없습니다.
			</p>
			{/*<CustomLink href={'/'} className={st['btn-home']}>*/}
			{/*  HOME*/}
			{/*</CustomLink>*/}
		</div>
	)
}
