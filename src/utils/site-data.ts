import uuid from 'uuid'
// Social Icons
import github from '~/assets/images/github.svg'
import instagram from '~/assets/images/instagram.svg'
import linkedin from '~/assets/images/linkedin.svg'
import html from '~/assets/images/html.svg'
import css from '~/assets/images/css.svg'
import js from '~/assets/images/js.svg'
import react from '~/assets/images/react.svg'
import ts from '~/assets/images/ts.svg'
import redux from '~/assets/images/redux.svg'
import git from '~/assets/images/git.svg'
import vue from '~/assets/images/vue.svg'
import svelte from '~/assets/images/svelte.svg'
import webpack from '~/assets/images/webpack.svg'
import sass from '~/assets/images/sass.svg'
import node from '~/assets/images/node.svg'
import graphql from '~/assets/images/graphql.svg'
import apollo from '~/assets/images/apollo.svg'
import express from '~/assets/images/express.svg'
import photoshop from '~/assets/images/photoshop.svg'
import illustrator from '~/assets/images/illustrator.svg'
import figma from '~/assets/images/figma.svg'
import zeplin from '~/assets/images/zeplin.svg'

/**
 * My details
 */
interface Me {
  name: string
  role: string
}

export const me = <Me>{
  name: 'Niall Barber',
  role: 'Front End Developer',
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
  { id: uuid(), title: 'Contact', path: '/contact' },
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
  { id: uuid(), title: 'LinkedIn', url: 'https://www.linkedin.com/in/niall-barber/', icon: linkedin },
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
  { id: uuid(), skill: 'Redux', icon: redux },
  { id: uuid(), skill: 'Git', icon: git },
  { id: uuid(), skill: 'Sass', icon: sass },
  { id: uuid(), skill: 'TypeScript', icon: ts },
  { id: uuid(), skill: 'Vue', icon: vue },
  { id: uuid(), skill: 'Svelte', icon: svelte },
  { id: uuid(), skill: 'Webpack', icon: webpack },
]

export const backEnd: Skills[] = [
  { id: uuid(), skill: 'Node', icon: node },
  { id: uuid(), skill: 'GraphQL', icon: graphql },
  { id: uuid(), skill: 'Apollo', icon: apollo },
  { id: uuid(), skill: 'Express', icon: express },
]

export const designTypes: Skills[] = [
  { id: uuid(), skill: 'Photoshop', icon: photoshop },
  { id: uuid(), skill: 'Illustrator', icon: illustrator },
  { id: uuid(), skill: 'Figma', icon: figma },
  { id: uuid(), skill: 'Zeplin', icon: zeplin },
]

/**
 * Get current date
 */
export const getDate: number = new Date().getFullYear()
