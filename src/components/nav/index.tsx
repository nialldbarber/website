import React, { FC, useContext, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '~@state/index.js'
import { pages } from '~@utils/site-data.ts'
import { Container, Backdrop } from '~@components/nav/styles.js'
import { CLOSE_HAMBURGER } from '~@constants/hamburger'

const Nav: FC = () => {
	const { state, dispatch } = useContext(AppContext)
	const { navOpen } = state

	return (
		<Fragment>
			<Backdrop className={navOpen ? 'show' : ''} />
			<Container className={navOpen ? 'show' : ''}>
				<ul>
					{pages.map(({ id, title, path }, i: number) => (
						<li
							key={id}
							style={{ '--animation-order': i }}
							onClick={() => dispatch({ type: CLOSE_HAMBURGER })}
						>
							<NavLink exact to={path} activeClassName="active">
								<span>{title}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</Container>
		</Fragment>
	)
}

export default Nav
