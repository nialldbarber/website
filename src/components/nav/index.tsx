import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { pages } from '~@utils/site-data.ts'

const Nav: FC = () => (
	<nav>
		<ul>
			{pages.map(({ id, title, path }) => (
				<li key={id}>
					<Link to={path}>{title}</Link>
				</li>
			))}
		</ul>
	</nav>
)

export default Nav
