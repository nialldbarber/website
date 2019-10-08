import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Crums } from '~@components/breadcrums/styles'

const Breadcrums: FC = () => (
	<Crums className="content">
		<Link to="/blog">
			<p>Blog</p>
		</Link>
	</Crums>
)

export default Breadcrums

// TODO:
// add badge
// arrow to top bottom
// when scroll past blog post title
// the title transistions into header
