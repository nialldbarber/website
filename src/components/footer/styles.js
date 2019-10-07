import styled from 'styled-components'

export const Container = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 0 2rem 1rem;

	a {
		svg {
			margin: 0 .5rem;
			padding-bottom: .5rem;
		}

		&:last-child {
			svg {
				margin-right: 0;
			}
		}
	}
`
