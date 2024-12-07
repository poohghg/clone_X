'use client'

import React, { CSSProperties, memo, useMemo } from 'react'

import st from './Confirm.module.scss'
import { IShowConfirm } from '@/shared/uiKit/organisms/Confirm/model/model'
import classNames from 'classnames/bind'
import { ConditionalWrapper } from '@/shared/uiKit/atom/ConditionalWrapper'
import Portal from '@/shared/uiKit/atom/Portal'
import Dim from '@/shared/uiKit/atom/Dim'
import { IS_NODE } from '@/shared/constant/globalConstants'
import useConfirm from '@/shared/uiKit/organisms/Confirm/lib/hooks/useConfirm'

const cn = classNames.bind(st)

const zConfirm = 1000

interface Props extends IShowConfirm {
	closeHandler: () => void
}

function Content({
	message,
	confirmMessage,
	closeMessage,
	isOnlyConfirm,
	confirmCb,
	closeHandler,
}: Props) {
	const MessageComponent = () => {
		return (
			<div className={cn('content')}>
				{typeof message === 'string' ? <p>{message}</p> : message}
			</div>
		)
	}
	const ButtonComponent = () => {
		const buttons = [{ children: confirmMessage, onClick: confirmCb }]

		if (!isOnlyConfirm) {
			buttons.splice(0, 0, { children: closeMessage, onClick: closeHandler })
		}

		return (
			<div className={cn('button-wrap')}>
				{buttons.map((button, idx) => (
					<button
						key={idx}
						className={cn('button')}
						onClick={button.onClick}
						type="button"
					>
						{button.children}
					</button>
				))}
			</div>
		)
	}

	return (
		<div className={cn('box')}>
			<MessageComponent />
			<ButtonComponent />
		</div>
	)
}

function Confirm() {
	const { confirm, closeConfirm } = useConfirm()

	const style = {
		'--z-index': zConfirm,
	} as CSSProperties

	useMemo(() => {
		if (IS_NODE) return
		if (confirm) document.body.style.overflow = 'hidden'
		else document.body.style.overflow = ''
	}, [confirm])

	return (
		<ConditionalWrapper isNull={!confirm}>
			<Portal id="ConfirmRoot">
				<div className={cn('wrap')} style={style}>
					<Dim
						active={!!confirm}
						zIndex={zConfirm - 1}
						handler={closeConfirm}
					/>
					<Content {...confirm!} closeHandler={closeConfirm} />
				</div>
			</Portal>
		</ConditionalWrapper>
	)
}

export default memo(Confirm)
