import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Nav from '~@components/nav'
import Logo from '~@components/logo/logo.js'
import { Container } from '~@components/header/styles.js'

const Header: FC = () => (
	<Container>
		<Link to="/">
			<Logo />
		</Link>
		<Nav />
	</Container>
)

export default Header
