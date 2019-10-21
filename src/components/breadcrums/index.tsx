import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import { Crums } from '~@components/breadcrums/styles'
import back from '~@assets/icons/left-arrow.svg'

const Breadcrums: FC = () => (
	<Crums className="content">
		<Link to="/blog">
			<SVG src={back} alt="Back" width={100} />
		</Link>
	</Crums>
)

export default Breadcrums
