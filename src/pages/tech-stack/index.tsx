import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_TECHSTACK } from '~@pages/tech-stack/schema'
import Loading from '~@components/loading'
import Error from '~@components/error'
import { Header } from '~@styles/styled-components/header'

const TechStack: FC = () => {
	const { loading, error, data } = useQuery(GET_TECHSTACK)
	if (loading) return <Loading />
	if (error) return <Error message={error.message} />
	const schema = data.pages[0]

	return (
		<div className="container">
			<Header>{schema.title}</Header>
			<p>{schema.content}</p>
		</div>
	)
}

export default TechStack
