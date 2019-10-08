import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GET_POSTS } from '~@pages/blog/schema'
import Loading from '~@components/loading'
import Error from '~@components/error'
import { Header } from '~@styles/styled-components/header'
import { Content } from '~@styles/styled-components/content'

const Blog: FC = () => {
	const { loading, error, data } = useQuery(GET_POSTS)
	if (loading) return <Loading />
	if (error) return <Error message={error.message} />
	const schema = data.posts

	return (
		<div className="container">
			<Header>Blog</Header>
			<Content className="content">
				{schema.map(({ id, title }) => (
					<Link key={id} to={`/post/${id}`}>
						<h3>{title}</h3>
					</Link>
				))}
			</Content>
		</div>
	)
}

export default Blog
