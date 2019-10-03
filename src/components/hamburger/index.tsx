import React, { FC, useContext } from 'react'
import AppContext from '~@context/index.js'

const Hamburger: FC = () => {
	const nav = useContext(AppContext)
	console.log(nav)

	return (
		<div>
			<p>hamburger</p>
		</div>
	)
}

export default Hamburger
