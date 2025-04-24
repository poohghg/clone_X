import { ReactNode } from 'react'

type Case = Record<PropertyKey, ReactNode> & Record<'default', ReactNode>

interface SwitchCaseProps<T extends Case> {
	value: keyof T
	caseByValue: T
}

export default function SwitchCase<T extends Case>({
	value,
	caseByValue,
}: SwitchCaseProps<T>) {
	return caseByValue[value]
}

const Test = () => {
	return (
		<SwitchCase
			value="default"
			caseByValue={{
				a: <div>case a</div>,
				b: <div>case b</div>,
				default: <div>default case</div>,
			}}
		/>
	)
}
