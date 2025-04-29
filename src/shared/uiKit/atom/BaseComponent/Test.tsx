import {
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
	ElementType,
	forwardRef,
	ReactNode,
	useRef,
} from 'react'

// polymorphic.ts
type AsProp<C extends ElementType> = {
	as?: C
}

// type KeyWithAs<C extends ElementType, Props> = keyof (AsProp<C> & Props)

export type PolymorphicRef<C extends ElementType> =
	ComponentPropsWithRef<C>['ref']

export type PolymorphicComponentProps<
	C extends ElementType,
	Props = object,
> = (Props & AsProp<C>) & Omit<ComponentPropsWithoutRef<C>, keyof Props | 'as'>

export type PolymorphicComponentPropsWithRef<
	C extends ElementType,
	Props = object,
> = Props & { ref?: PolymorphicRef<C> }

type Props<C extends ElementType> = PolymorphicComponentProps<C, {}>

// 다시 제네릭으로 만들어주기
type ButtonType = <C extends ElementType = 'button'>(
	props: PolymorphicComponentPropsWithRef<C, Props<C>>,
) => ReactNode

// 타입 어노테이션
// eslint-disable-next-line react/display-name
const Button: ButtonType = forwardRef(
	// @ts-ignore
	<C extends ElementType = 'button'>(
		{ as, children, ...restProps }: Props<C>,
		ref: PolymorphicRef<C>,
	) => {
		const Comp = as || 'button'
		return (
			<Comp as={as} ref={ref} {...restProps}>
				{children}
			</Comp>
		)
	},
)

const Test = () => {
	const ref = useRef<HTMLButtonElement>(null)
	return (
		<Button
			as={'button'}
			ref={ref}
			onClick={() => {
				console.log('click')
			}}
		>
			Test
		</Button>
	)
}
