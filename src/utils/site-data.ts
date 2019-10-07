import uuid from 'uuid'
// Social Icons
import github from '~@assets/images/github.svg'
import instagram from '~@assets/images/instagram.svg'
import linkedin from '~@assets/images/linkedin.svg'
import html from '~@assets/images/html.svg'
import css from '~@assets/images/css.svg'
import js from '~@assets/images/js.svg'
import react from '~@assets/images/react.svg'
import redux from '~@assets/images/redux.svg'
import node from '~@assets/images/node.svg'
import graphql from '~@assets/images/graphql.svg'
import apollo from '~@assets/images/apollo.svg'

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
 * SKillz
 */
interface Skills {
	id: string
	skill: string
	icon: string
}

export const frontEnd: Skills[] = [
	{ id: uuid(), skill: 'HTML', icon: html },
	{ id: uuid(), skill: 'CSS', icon: css },
	{ id: uuid(), skill: 'JavaScript', icon: js },
	{ id: uuid(), skill: 'React', icon: react },
	{ id: uuid(), skill: 'Redux', icon: redux }
]

export const backEnd: Skills[] = [
	{ id: uuid(), skill: 'Node', icon: node },
	{ id: uuid(), skill: 'GraphQL', icon: graphql },
	{ id: uuid(), skill: 'Apollo', icon: apollo }
]

/**
 * Get current date
 */
export const getDate: number = new Date().getFullYear()
