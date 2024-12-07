import { useRecoilState } from 'recoil'
import { confirmState } from '@/shared/uiKit/organisms/Confirm/model/state'
import { IShowConfirm } from '@/shared/uiKit/organisms/Confirm/model/model'

const useConfirm = () => {
	const [confirm, setConfirm] = useRecoilState(confirmState)
	const showConfirm = ({
		message,
		closeMessage = '닫기',
		confirmMessage = '확인',
		isOnlyConfirm = false,
		confirmCb,
	}: IShowConfirm) => {
		const confirmHandler = () => {
			confirmCb && confirmCb()
			closeConfirm()
		}

		setConfirm({
			message,
			closeMessage,
			confirmMessage,
			isOnlyConfirm,
			confirmCb: confirmHandler,
		})
	}

	const closeConfirm = () => {
		setConfirm(undefined)
	}

	return { confirm, showConfirm, closeConfirm }
}

export default useConfirm
