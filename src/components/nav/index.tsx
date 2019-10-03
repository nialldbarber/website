import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { pages } from '~@utils/site-data.ts'
import { Container } from '~@components/nav/styles.js'

const Nav: FC = () => (
	<Container>
		<ul>
			{pages.map(({ id, title, path }, i) => (
				<li key={id} style={{ '--animation-order': i }}>
					<span>
						<Link to={path}>{title}</Link>
					</span>
				</li>
			))}
		</ul>
	</Container>
)

export default Nav
