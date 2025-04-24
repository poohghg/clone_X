'use client'

import React, { useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import st from './Toast.module.scss'
import { IToast } from '@/shared/uiKit/organisms/Toast/model/model'
import useToast from '@/shared/uiKit/organisms/Toast/lib/useToast'
import useActiveVirtualKeyboard from '@/shared/libs/hooks/useActiveVirtualKeyboard'
import { ConditionalWrapper } from '@/shared/uiKit/atom/ConditionalWrapper'
import Portal from '@/shared/uiKit/atom/Portal'

const cn = classNames.bind(st)

const zToast = 1000

interface ToastItemProps extends IToast {
	closeToast: (id: string) => void
}

function ToastItem({
	id,
	message,
	duration,
	closeToast,
	type,
}: ToastItemProps) {
	const [isShow, setIsShow] = useState(true)

	const animationEndHandler = () => {
		if (!isShow) closeToast(id)
	}

	useEffect(() => {
		const ref = setInterval(() => {
			if (duration < new Date().getTime()) {
				setIsShow(false)
				clearInterval(ref)
			}
		}, 1_000)

		return () => {
			clearInterval(ref)
		}
	}, [])

	return (
		<div
			id={id}
			className={cn('toast', type, !isShow && 'disabled')}
			onAnimationEnd={animationEndHandler}
		>
			{message}
		</div>
	)
}

export default function Toast() {
	const { toast, isShowToast, clearToast } = useToast()
	const { diffHeight } = useActiveVirtualKeyboard()

	return (
		<ConditionalWrapper isNull={!isShowToast}>
			<Portal id="ToastRoot">
				<div
					className={cn('toast-wrapper')}
					style={{
						'--z-toast': zToast,
						'--padding-bottom': `${diffHeight}px`,
					}}
				>
					{toast.map((data) => (
						<ToastItem key={data.id} {...data} closeToast={clearToast} />
					))}
				</div>
			</Portal>
		</ConditionalWrapper>
	)
}
