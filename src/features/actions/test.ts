'use server'
import { revalidatePath } from 'next/cache'

const testAction = async () => {
	revalidatePath('/')
	await new Promise((resolve) => setTimeout(resolve, 1000))
	console.log('test')
}

export default testAction
