import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import Nav from '~/components/nav'
import Hamburger from '~/components/hamburger'
import { Container, LogoContainer } from '~/components/header/styles.js'
import logo from '~/assets/images/nb-logo-.svg'

const Header: FC = () => (
  <Container>
    <LogoContainer>
      <span className="outer">
        <span className="inner">
          <Link to="/">
            <SVG src={logo} alt="Logo" width={100} />
          </Link>
        </span>
      </span>
    </LogoContainer>
    <Nav />
    <Hamburger />
  </Container>
)

export default Header
