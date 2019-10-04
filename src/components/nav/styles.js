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
	top: 0;
	right: 0;
	bottom: 0;
	left: 100%;
	background: #1e272d;
	justify-content: center;
	align-items: center;
	z-index: 2;
	text-align: center;
	overflow: hidden;
	transition: left .25s cubic-bezier(.895, .03, .685, .22) 0s;

	&.show {
		left: 0;
	}
`
