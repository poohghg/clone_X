import {
	Ex,
	IconBell,
	IconClose,
	IconDown,
	IconGoogle,
	IconKakao,
	IconLeft,
	IconLock,
	IconLogo,
	IconMainLogo,
	IconMenu,
	IconRight,
	IconSearch,
	IconSelect,
	IconSmCheck,
	IconSmClose,
	IconSmConfig,
	IconSmDown,
	IconSmHamburgerMenu,
	IconSmLetter,
	IconSmMore,
	IconSmPlus,
	IconSmSearch,
	IconSmTrash,
	IconSmUp,
	IconSmUser,
	IconTrash,
	IconUser,
	IconWrite,
} from '../../../../public/icon'
import { CSSProperties } from 'react'

const iconComponents = {
	close: IconClose.src,
	left: IconLeft.src,
	menu: IconMenu.src,
	right: IconRight.src,
	search: IconSearch.src,
	select: IconSelect.src,
	sm_close: IconSmClose.src,
	sm_config: IconSmConfig.src,
	sm_more: IconSmMore.src,
	sm_plus: IconSmPlus.src,
	sm_trash: IconSmTrash.src,
	sm_up: IconSmUp.src,
	trash: IconTrash.src,
	user: IconUser.src,
	write: IconWrite.src,
	mainLogo: IconMainLogo.src,
	logo: IconLogo.src,
	google: IconGoogle.src,
	kakao: IconKakao.src,
	bell: IconBell.src,
	lock: IconLock.src,
	sm_hamburgerMenu: IconSmHamburgerMenu.src,
	sm_letter: IconSmLetter.src,
	sm_search: IconSmSearch.src,
	sm_user: IconSmUser.src,
	sm_check: IconSmCheck.src,
	sm_down: IconSmDown.src,
	down: IconDown.src,
	ex: Ex.src,
} satisfies Record<string, any>

type TIconKey = keyof typeof iconComponents

interface Props {
	iconKey: TIconKey
	className?: string
}

export default function Icon({ iconKey, className }: Props) {
	const href = iconComponents[iconKey]
	const id = `#${iconKey}`

	const css: CSSProperties = {
		width: '24px',
		height: '24px',
	}

	return (
		<svg style={css}>
			<use href={`${href}${id}`} className={`${className ?? ''}`} />
			<title>{iconKey}</title>
		</svg>
	)
}
