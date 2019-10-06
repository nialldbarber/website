import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_HOME } from '~@pages/home/schema'
import Loading from '~@components/loading'
import Error from '~@components/error'
import { Header } from '~@styles/styled-components/header'

const Home: FC = () => {
	const { loading, error, data } = useQuery(GET_HOME)
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

export default Home
