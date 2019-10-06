import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_CONTACT } from '~@pages/contact/schema'
import Loading from '~@components/loading'
import Error from '~@components/error'

const Contact: FC = () => {
	const { loading, error, data } = useQuery(GET_CONTACT)
	if (loading) return <Loading />
	if (error) return <Error message={error.message} />
	const schema = data.pages[0]

	return (
		<div className="container">
			<h1>{schema.title}</h1>
			<p>{schema.content}</p>
		</div>
	)
}

export default Contact
