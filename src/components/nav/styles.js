import styled from 'styled-components'

export const Container = styled.nav`
	display: none;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	ul {
		display: flex;
		flex-direction: column;
		margin: 0;
	}

	&.show {
		display: block;
	}
`
