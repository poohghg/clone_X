export type FlattenObject<T> = {
	[K in keyof T]: T[K]
}
