import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_TECHSTACK } from '~@pages/tech-stack/schema'
import Loading from '~@components/loading'
import Error from '~@components/error'
import { Header } from '~@styles/styled-components/header'
import { Content } from '~@styles/styled-components/content'

const TechStack: FC = () => {
	const { loading, error, data } = useQuery(GET_TECHSTACK)
	if (loading) return <Loading />
	if (error) return <Error message={error.message} />
	const schema = data.pages[0]

	return (
		<div className="container">
			<Header>{schema.title}</Header>
			<Content className="content">
				<div>Front End</div>
				<div>Back End</div>
				<div>Design</div>
			</Content>
		</div>
	)
}

export default TechStack
