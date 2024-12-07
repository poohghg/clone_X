import { memo } from 'react'
import classNames from 'classnames/bind'
import st from './Loading.module.scss'
import { IStyle } from '@/shared/type/style'
import IconDotPulse from '@/shared/uiKit/atom/DotPlus'

const cn = classNames.bind(st)

interface Props extends IStyle {}

function Loading({ className, style }: Props) {
	return (
		<div className={cn('wrap', className)} style={style}>
			<IconDotPulse size={30} />
		</div>
	)
}

export default memo(Loading)
