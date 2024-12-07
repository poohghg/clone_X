'use client'

import { atom, useRecoilState } from 'recoil'
import { useCallback } from 'react'

type TModalState = 'SIDEBAR'

const modalState = atom<Record<TModalState, boolean> >({
	key: 'modalState',
	default: {
		SIDEBAR: false,
	},
})

const useModal = (modalId: TModalState) => {
	const [modal, setModal] = useRecoilState(modalState)
	const isOpen = modal[modalId]

	const openModal = useCallback(() => {
		setModal((current) => ({ ...current, [modalId]: true }))
		document.body.style.overflow = 'hidden'
	}, [modalId])

	const closeModal = useCallback(() => {
		setModal((current) => ({ ...current, [modalId]: false }))
		document.body.style.overflow = ''
	}, [modalId])

	return { isOpen, openModal, closeModal }
}

export default useModal
