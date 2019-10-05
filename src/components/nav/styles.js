import styled from 'styled-components'

export const Container = styled.nav`
	display: none;
	position: absolute;
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
		display: block;
	}
`

export const Backdrop = styled.div`
	position: fixed;
	top: -100%;
	right: -100%;
	bottom: 100%;
	left: 100%;
	background: #f95484;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	z-index: 2;
	text-align: center;
	overflow: hidden;
	transform: scale(0) translateZ(0);
	transition: all .3s cubic-bezier(.895, .03, .685, .4) 0s;

	&.show {
		transform: scale(4.5) translateZ(0);
	}
`
