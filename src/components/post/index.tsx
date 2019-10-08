import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import ReactMarkdown from 'react-markdown'
import { GET_INDIVIDUAL_POST } from '~@components/post/schema'
import Loading from '~@components/loading'
import Error from '~@components/error'
import { BlogHeader } from '~@styles/styled-components/header'
import { Content } from '~@styles/styled-components/content'

const Post: FC = ({ match }) => {
	const { loading, error, data } = useQuery(GET_INDIVIDUAL_POST, {
		variables: { id: match.params.id }
	})
	if (loading) return <Loading />
	if (error) return <Error message={error.message} />

	const { title, description } = data.post

	return (
		<div className="container">
			<BlogHeader>{title}</BlogHeader>
			<ReactMarkdown source={description} />
		</div>
	)
}

export default Post

Post.propTypes = {
	match: PropTypes.object
}
