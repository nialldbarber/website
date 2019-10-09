import styled from 'styled-components'

const size = 100

export const Container = styled.nav`
	position: absolute;
	display: none;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;

	ul {
		display: flex;
		flex-direction: column;
		margin: 0;
	}

	&.show {
		position: fixed;
		display: block;
	}
`

export const Backdrop = styled.div`
	position: fixed;
	justify-content: center;
	align-items: center;
	text-align: center;
	top: -${size}%;
	right: -${size}%;
	bottom: ${size}%;
	left: ${size}%;
	background: ${(props) => props.theme.pink};
	border-radius: 50%;
	overflow: hidden;
	transform: scale(0) translateZ(0);
	transition: all .3s cubic-bezier(.895, .03, .685, .4) 0s;
	z-index: 2;

	&.show {
		transform: scale(4.5) translateZ(0);
	}
`
