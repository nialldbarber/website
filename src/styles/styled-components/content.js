import styled from 'styled-components'

export const Content = styled.div`
	max-width: 650px;
	margin-left: auto;
	padding-top: 1rem;

	p {
		margin-bottom: 0;
		font-size: 1.8rem;
	}
`

export const BlogPageContent = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	padding: 2rem 2rem 2rem 1rem;
`

export const Card = styled.div`
	position: relative;
	display: inline-flex;
	flex-wrap: wrap;
	background: #181c22;
	width: 100%;
	padding: 2rem 1rem;
	border-radius: 4px;
	border-bottom: 3px solid #f95584;
	box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);

	h3 {
		padding: 0.3rem 1rem;
		color: #f95584;
	}
`
