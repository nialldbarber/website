import uuid from 'uuid'
import github from '~@assets/images/github.svg'
import instagram from '~@assets/images/instagram.svg'
import linkedin from '~@assets/images/linkedin.svg'

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
	{ id: uuid(), title: 'Tech Stack', path: '/tech-stack' },
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
	icon: string
}

export const socialLinks: Social[] = [
	{ id: uuid(), title: 'Github', url: 'https://github.com/nialldbarber', icon: github },
	{ id: uuid(), title: 'Instagram', url: 'https://www.instagram.com/nialldbarber/', icon: instagram },
	{ id: uuid(), title: 'LinkedIn', url: 'https://www.linkedin.com/in/niall-barber/', icon: linkedin }
]

/**
 * Get current date
 */
export const getDate: number = new Date().getFullYear()
