import styled from 'styled-components'

export const StackContainer = styled.div`
	position: relative;
	display: block;
	margin-top: 7rem;
	max-width: 700px;

	&:nth-child(odd) {
		margin-left: auto;
	}

	h2 {
		position: absolute;
		top: -2.2rem;
		left: 1rem;
		padding: 0.3rem 1rem;
		font-size: 2.5rem;
		color: ${(props) => props.theme.pink};
	}
`
