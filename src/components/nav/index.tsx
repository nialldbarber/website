import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { pages } from '~@utils/site-data.ts'
import { Container } from '~@components/nav/styles.js'

const Nav: FC = () => (
	<Container>
		<ul>
			{pages.map(({ id, title, path }, i) => (
				<li key={id} style={{ '--animation-order': i }}>
					<NavLink exact to={path} activeClassName="active">
						<span>{title}</span>
					</NavLink>
				</li>
			))}
		</ul>
	</Container>
)

export default Nav
