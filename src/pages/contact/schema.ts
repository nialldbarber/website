import { gql } from 'apollo-boost'

export const GET_CONTACT = gql`
	{
		pages(where: { title: "contact" }) {
			id
			title
			content
		}
	}
`
