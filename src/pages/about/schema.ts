import { gql } from 'apollo-boost'

export const GET_ABOUT = gql`
	{
		pages(where: { title: "about" }) {
			id
			title
			content
		}
	}
`
