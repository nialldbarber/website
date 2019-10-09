import github from '~@assets/images/github.svg'
import instagram from '~@assets/images/instagram.svg'
import linkedin from '~@assets/images/linkedin.svg'
import html from '~@assets/images/html.svg'
import css from '~@assets/images/css.svg'
import js from '~@assets/images/js.svg'
import react from '~@assets/images/react.svg'
import ts from '~@assets/images/ts.svg'
import redux from '~@assets/images/redux.svg'
import git from '~@assets/images/git.svg'
import vue from '~@assets/images/vue.svg'
import svelte from '~@assets/images/svelte.svg'
import webpack from '~@assets/images/webpack.svg'
import node from '~@assets/images/node.svg'
import graphql from '~@assets/images/graphql.svg'
import apollo from '~@assets/images/apollo.svg'
import express from '~@assets/images/express.svg'

export const getIcon = (icon: string) => {
	switch (icon) {
		case 'React':
			return react
		case 'Vue':
			return vue
		case 'JavaScript':
			return js
		default:
			return null
	}
}
