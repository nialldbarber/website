import styled from 'styled-components'

export const Content = styled.div`
	max-width: 650px;
	margin-left: auto;
	padding-top: 1rem;
	animation-name: slideInRight;
	animation-duration: .3s;
	animation-fill-mode: both;
	animation-delay: .27s;
	animation-timing-function: cubic-bezier(.4, 0, 0, .88);

	p {
		font-weight: normal;
		margin: 0 1rem 1rem;
		font-size: 1.8rem;
	}
`

export const BlogPageContent = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	padding: 2rem 2rem 2rem 1rem;
	animation-name: slideInRight;
	animation-duration: .3s;
	animation-fill-mode: both;
	animation-delay: .27s;
	animation-timing-function: cubic-bezier(.4, 0, 0, .88);
`

export const BlogContent = styled.div`
	padding: 1rem 2rem 2rem 1rem;
	animation-name: slideInRight;
	animation-duration: .3s;
	animation-fill-mode: both;
	animation-delay: .27s;
	animation-timing-function: cubic-bezier(.4, 0, 0, .88);

	p {
		margin: 1rem 0;
		font-size: 1.1rem;
	}
`

export const Card = styled.div`
	position: relative;
	display: inline-flex;
	flex-wrap: wrap;
	background: ${(props) => props.theme.darkBlue};
	width: 100%;
	min-height: 200px;
	overflow: hidden;
	padding: 2rem 1rem;
	border-radius: 4px;
	border-bottom: 3px solid ${(props) => props.theme.pink};
	box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);

	h3 {
		padding: 0.3rem 1rem;
		color: ${(props) => props.theme.pink};
	}

	svg {
		position: absolute;
		width: 100%;
		opacity: .05;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		transition: opacity .15s ease;
	}

	&:hover {
		svg {
			opacity: .5;
		}
	}
`
