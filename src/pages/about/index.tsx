import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import ReactMarkdown from 'react-markdown'
import { GET_ABOUT } from '~@pages/about/schema'
import Loading from '~@components/loading'
import Error from '~@components/error'
import { Layout } from '~@styles/styled-components/layout'
import { Header } from '~@styles/styled-components/header'
import { Content } from '~@styles/styled-components/content'

const About: FC = () => {
	const { loading, error, data } = useQuery(GET_ABOUT)
	if (loading) return <Loading />
	if (error) return <Error message={error.message} />
	const schema = data.pages[0]

	return (
		<Layout>
			<Header>{schema.title}</Header>
			<Content className="content">
				<ReactMarkdown source={schema.pageContent} escapeHtml={true} />
			</Content>
		</Layout>
	)
}

export default About
