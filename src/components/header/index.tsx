import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '~@components/nav'
import Logo from '~@assets/logo.js'

const Header: FC = () => (
	<header>
		<Link to="/">
			<Logo />
		</Link>
		<Nav />
	</header>
)

export default Header
