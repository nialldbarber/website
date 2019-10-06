import { gql } from 'apollo-boost'

export const GET_ABOUT = gql`
	{
		pages(where: { id: "ck1dg2wcceqag0b54cczrw63s" }) {
			id
			title
			content
		}
	}
`
