import React, { FC, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '~@state/index.js'
import { pages } from '~@utils/site-data.ts'
import { Container } from '~@components/nav/styles.js'

const Nav: FC = () => {
	const { state } = useContext(AppContext)
	const { navOpen } = state

	return (
		<Container className={navOpen ? 'show' : ''}>
			<ul>
				{pages.map(({ id, title, path }, i: number) => (
					<li key={id} style={{ '--animation-order': i }}>
						<NavLink exact to={path} activeClassName="active">
							<span>{title}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</Container>
	)
}

export default Nav
