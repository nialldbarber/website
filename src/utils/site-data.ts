import uuid from 'uuid'

/**
 * Get info on pages
 */
interface Pages {
	id: string
	title: string
	path: string
}

export const pages: Pages[] = [
	{ id: uuid(), title: 'Home', path: '/' },
	{ id: uuid(), title: 'About', path: '/about' },
	{ id: uuid(), title: 'Contact', path: '/contact' }
]

/**
 * Get current date
 */
export const getDate: number = new Date().getFullYear()
