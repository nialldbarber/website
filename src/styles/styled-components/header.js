import styled from 'styled-components'

export const Header = styled.h1`
	position: relative;
	margin: 0;
	font-size: 8rem;
	display: inline-block;

	&:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		height: 7px;
		bottom: 11px;
		background: #f95584;
		z-index: -1;
	}
`
