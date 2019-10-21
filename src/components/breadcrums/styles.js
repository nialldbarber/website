import styled from 'styled-components'

export const Crums = styled.div`
	position: relative;
	width: 37px;
	height: 30px;
	margin-left: 1rem;
	padding: .3rem .5rem;
	background: ${(props) => props.theme.pink};
	color: ${(props) => props.theme.grey};
	border-radius: 4px;

	a {
		display: flex;
		align-items: center;
		position: absolute;

		svg {
			width: 20px;
			height: 20px;
		}
	}

	p {
		font-weight: normal;
	}
`
