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
		height: 2px;
		width: 32px;
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
			width: 32px;
		}

		&:before {
			transform: translateY(-10px);
			width: 32px;
		}

		&:after {
			transform: translateY(10px);
			width: 32px;
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
			width: 32px;
		}
	}
`
