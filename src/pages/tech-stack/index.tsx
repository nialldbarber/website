import React, { FC, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import VizSensor from 'react-visibility-sensor'
import { GET_TECHSTACK } from '~@pages/tech-stack/schema'
import Loading from '~@components/loading'
import Error from '~@components/error'
import Stack from '~@components/stack'
import { frontEnd, backEnd } from '~@utils/site-data'
import { StackContainer } from '~@pages/tech-stack/styles'
import { Header } from '~@styles/styled-components/header'

const TechStack: FC = () => {
	const [front, setFront] = useState(false)
	const [back, setBack] = useState(false)
	const [design, setDesign] = useState(false)
	const { loading, error, data } = useQuery(GET_TECHSTACK)
	if (loading) return <Loading />
	if (error) return <Error message={error.message} />
	const schema = data.pages[0]

	return (
		<div className="container">
			<Header>{schema.title}</Header>
			<VizSensor onChange={(isVisible) => setFront(isVisible)} partialVisibility={true}>
				<StackContainer style={{ opacity: front ? 1 : 0.25, transition: 'opacity .25s linear' }}>
					<Stack type="Front End" stack={frontEnd} />
				</StackContainer>
			</VizSensor>
			<VizSensor onChange={(isVisible) => setBack(isVisible)} partialVisibility={true}>
				<StackContainer style={{ opacity: back ? 1 : 0.25, transition: 'opacity .25s linear' }}>
					<Stack type="Back End" stack={backEnd} />
				</StackContainer>
			</VizSensor>
		</div>
	)
}

export default TechStack
