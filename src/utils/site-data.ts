import uuid from 'uuid'

/**
 * My details
 */
interface Me {
	name: string
	role: string
}

export const me = <Me>{
	name: 'Niall Barber',
	role: 'Front End Developer'
}

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
	{ id: uuid(), title: 'Blog', path: '/blog' },
	{ id: uuid(), title: 'Contact', path: '/contact' }
]

/**
 * Social links
 */
interface Social {
	id: string
	title: string
	url: string
}

export const socialLinks: Social[] = [
	{ id: uuid(), title: 'Home', url: '/' },
	{ id: uuid(), title: 'About', url: '/about' },
	{ id: uuid(), title: 'Contact', url: '/contact' }
]

/**
 * Get current date
 */
export const getDate: number = new Date().getFullYear()
