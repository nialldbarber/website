import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import ReactMarkdown from 'react-markdown'
import { GET_ABOUT } from '~@pages/about/schema'
import Loading from '~@components/loading'
import Error from '~@components/error'
import { Header } from '~@styles/styled-components/header'
import { Content } from '~@styles/styled-components/content'

const About: FC = () => {
	const { loading, error, data } = useQuery(GET_ABOUT)
	if (loading) return <Loading />
	if (error) return <Error message={error.message} />
	const schema = data.pages[0]

	return (
		<div className="container">
			<Header>{schema.title}</Header>
			<Content className="content">
				<ReactMarkdown source={schema.pageContent} escapeHtml={false} />
			</Content>
		</div>
	)
}

export default About
