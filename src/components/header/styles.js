import styled, { keyframes } from 'styled-components'

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem 0 1.5rem;
`

const appearFromBottom = keyframes`
  0% {
    bottom: -10rem;
  }

  100% {
    bottom: 0;
  }
`

export const LogoContainer = styled.div`
	.outer {
		display: block;
		position: relative;
		width: 100px;
		height: 100px;
		overflow: hidden;
	}

	.inner {
		display: block;
		position: absolute;
		animation-name: ${appearFromBottom};
		animation-duration: .5s;
		animation-fill-mode: both;
		animation-delay: .275s;
		animation-timing-function: cubic-bezier(.91, .01, .37, .88);
	}
`
