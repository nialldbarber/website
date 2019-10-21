import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import ReactMarkdown from 'react-markdown'
import { GET_INDIVIDUAL_POST } from '~@components/post/schema'
import Loading from '~@components/loading'
import Error from '~@components/error'
import Breadcrums from '~@components/breadcrums'
import { Layout } from '~@styles/styled-components/layout'
import { BlogHeader } from '~@styles/styled-components/header'
import { BlogContent } from '~@styles/styled-components/content'
import { Props } from '~@components/post/types'

const Post: FC<Props> = ({ match }) => {
	const { loading, error, data } = useQuery(GET_INDIVIDUAL_POST, {
		variables: { id: match.params.id }
	})
	if (loading) return <Loading />
	if (error) return <Error message={error.message} />

	const { title, description } = data.post

	return (
		<Layout>
			<Breadcrums />
			<BlogHeader>{title}</BlogHeader>
			<BlogContent className="content">
				<ReactMarkdown source={description} escapeHtml={false} />
			</BlogContent>
		</Layout>
	)
}

export default Post
