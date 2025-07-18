import {
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
	ElementType,
} from 'react'
import { FlattenObject } from '@/shared/type/util'

export type AsProp<T extends ElementType> = {
	as?: T
}

export type MergeElementProps<
	T extends ElementType,
	Props extends object = object,
> = FlattenObject<Props & Omit<ComponentPropsWithoutRef<T>, keyof Props>>

export type PolymorphicRef<T extends ElementType> =
	ComponentPropsWithRef<T>['ref']

export type PolymorphicWithRef<
	T extends ElementType,
	Props extends {} = {},
> = MergeElementProps<T, Props> & { ref?: PolymorphicRef<T> }
