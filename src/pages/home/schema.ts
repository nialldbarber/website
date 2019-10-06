import { gql } from 'apollo-boost'

export const GET_HOME = gql`
	{
		pages(where: { title: "home" }) {
			title
			content
		}
	}
`
