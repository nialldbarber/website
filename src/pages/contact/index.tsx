import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_CONTACT } from '~@pages/contact/schema'
import Loading from '~@components/loading'
import Error from '~@components/error'
import Form from '~@components/form'
import { Layout } from '~@styles/styled-components/layout'
import { Header } from '~@styles/styled-components/header'
import { Content } from '~@styles/styled-components/content'

const Contact: FC = () => {
	const { loading, error, data } = useQuery(GET_CONTACT)
	if (loading) return <Loading />
	if (error) return <Error message={error.message} />
	const schema = data.pages[0]

	return (
		<Layout>
			<Header>{schema.title}</Header>
			<Content className="content">
				<Form />
			</Content>
		</Layout>
	)
}

export default Contact
