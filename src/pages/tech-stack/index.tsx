import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_TECHSTACK } from '~@pages/tech-stack/schema'
import Loading from '~@components/loading'
import Error from '~@components/error'
import StackSection from '~@components/stack-section'
import { frontEnd, backEnd, designTypes } from '~@utils/site-data'
import { Layout } from '~@styles/styled-components/layout'
import { Header } from '~@styles/styled-components/header'

const TechStack: FC = () => {
	const { loading, error, data } = useQuery(GET_TECHSTACK)

	if (loading) return <Loading />
	if (error) return <Error message={error.message} />
	const schema = data.pages[0]

	return (
		<Layout>
			<Header>{schema.title}</Header>
			<StackSection stackType={frontEnd} name="Front End" />
			<StackSection stackType={backEnd} name="Back End" />
			<StackSection stackType={designTypes} name="Design" />
		</Layout>
	)
}

export default TechStack
