import { IS_NODE } from '@/shared/constant/globalConstants'

const sessionStorage = IS_NODE ? undefined : window.sessionStorage

const localStorage = IS_NODE ? undefined : window.localStorage

export const localStorageEffect =
	(key: string) =>
	({ setSelf, onSet }: any) => {
		if (!localStorage) return

		const savedValue = localStorage.getItem(key)
		if (savedValue !== null) setSelf(JSON.parse(savedValue))

		onSet((newValue: any, _: any, isReset: boolean) => {
			isReset
				? localStorage.removeItem(key)
				: localStorage.setItem(key, JSON.stringify(newValue))
		})
	}

export const sessionStorageEffect =
	(key: string) =>
	({ setSelf, onSet }: any) => {
		if (!sessionStorage) return

		const savedValue = sessionStorage.getItem(key)

		if (savedValue != null) setSelf(JSON.parse(savedValue))

		onSet((newValue: any, _: any, isReset: any) => {
			return isReset
				? sessionStorage.removeItem(key)
				: sessionStorage.setItem(key, JSON.stringify(newValue))
		})
	}
