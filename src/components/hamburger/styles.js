import styled from 'styled-components'

const length = 32

export const Burger = styled.button`
	position: relative;
	width: 65px;
	height: 40px;
	background: transparent;
	border: none;
	outline: none;
	cursor: pointer;
	z-index: 4;

	&:before,
	&:after,
	span {
		content: "";
		position: absolute;
		left: 50%;
		top: 50%;
		background: ${(props) => props.theme.white};
		height: 2px;
		width: ${length}px;
		transition: all .12s cubic-bezier(.25, .46, .45, .94);
	}

	span {
		width: 25px;
	}

	&:before {
		transform: translateY(-8px) rotate(0);
	}

	&:after {
		transform: translateY(8px) rotate(0);
		width: 18px;
	}

	&:hover {
		span {
			width: ${length}px;
		}

		&:before {
			transform: translateY(-10px);
			width: ${length}px;
		}

		&:after {
			transform: translateY(10px);
			width: ${length}px;
		}
	}

	&.open {
		span {
			display: none;
		}

		&:before {
			transform: translateY(4px) rotate(90deg);
		}

		&:after {
			transform: translateY(-4px) rotate(90deg);
			width: ${length}px;
		}
	}
`
