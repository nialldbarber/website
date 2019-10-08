import styled from 'styled-components'

export const Header = styled.h1`
	position: relative;
	margin: 0;
	font-size: 10rem;
	display: inline-block;

	&:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 2.5rem;
		height: 7px;
		background: #f95584;
		z-index: -1;
	}
`

export const BlogHeader = styled.h1`
	position: relative;
	margin: 2rem 0 0 0;
	font-size: 5rem;
	display: inline-block;

	&:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 11px;
		height: 7px;
		background: #f95584;
		z-index: -1;
	}
`
