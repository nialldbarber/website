import styled from 'styled-components'

export const Header = styled.h1`
	position: relative;
	display: inline-block;
	margin: 0;
	font-size: 8rem;

	&.home {
		font-size: 10rem;
	}

	&:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 2.5rem;
		height: 7px;
		background: ${(props) => props.theme.pink};
		z-index: -1;
	}
`

export const BlogHeader = styled.h1`
	position: relative;
	display: inline-block;
	margin: 2rem 0 0 0;
	font-size: 5rem;

	&:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 11px;
		height: 7px;
		background: ${(props) => props.theme.pink};
		z-index: -1;
	}
`
