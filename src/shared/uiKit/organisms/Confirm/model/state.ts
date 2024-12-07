import { atom } from 'recoil'
import { IShowConfirm } from '@/shared/uiKit/organisms/Confirm/model/model'

export const confirmState = atom<IShowConfirm | undefined>({
	key: 'confirmState',
	default: undefined,
})

export default {}
