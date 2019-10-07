import React, { FC } from 'react'
import { Header } from '~@styles/styled-components/header'
import { Content } from '~@styles/styled-components/content'

const Blog: FC = () => (
	<div className="container">
		<Header>Blog</Header>
		<Content className="content">
			<p>Blogoggggg</p>
		</Content>
	</div>
)

export default Blog
