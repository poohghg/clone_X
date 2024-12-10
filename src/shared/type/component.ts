import {
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
	ElementType,
} from 'react'

export type TPolymorphicRef<T extends ElementType> =
	ComponentPropsWithRef<T>['ref']

export type TRemoveDuplicatedKey<Target extends {}, Props extends {}> = Props &
	Omit<Target, keyof Props>

export type TRemoveDuplicatedEle<T extends ElementType, Props = {}> = Props &
	Omit<ComponentPropsWithoutRef<T>, keyof Props>

export type TPolymorphic<
	T extends ElementType,
	Props extends {
		as: T
	},
> = TRemoveDuplicatedEle<T, Props>

export type TPolymorphicWithRef<
	T extends ElementType,
	Props extends {
		as: T
	},
> = TRemoveDuplicatedEle<T, Props> & { ref?: TPolymorphicRef<T> }
