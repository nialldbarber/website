import React, { FC, useContext } from 'react'
import { AppContext } from '~@state/index.js'
import { Burger } from '~@components/hamburger/styles.js'
import { CHANGE_HAMBURGER } from '~@constants/hamburger'

const Hamburger: FC = () => {
	const { state, dispatch } = useContext(AppContext)
	const { navOpen } = state

	return (
		<Burger
			className={`hamburger ${navOpen ? 'open' : ''}`}
			onClick={() => dispatch({ type: CHANGE_HAMBURGER })}
		>
			<span />
		</Burger>
	)
}

export default Hamburger
