import styled from 'styled-components'

export const Burger = styled.button`
	position: relative;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
	width: 65px;
	height: 40px;
	z-index: 4;

	&:before,
	&:after,
	span {
		content: "";
		position: absolute;
		left: 50%;
		top: 50%;
		background: #fff;
		height: 3px;
		width: 32px;
		transition: transform .12s cubic-bezier(.25, .46, .45, .94),
			-webkit-transform .12s cubic-bezier(.25, .46, .45, .94);
	}

	&:before {
		transform: translateY(-8px);
	}

	&:after {
		transform: translateY(8px);
	}

	&:hover {
		&:before {
			transform: translateY(-10px);
		}

		&:after {
			transform: translateY(10px);
		}
	}
`
