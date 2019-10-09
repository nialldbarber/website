import styled from 'styled-components'

export const Container = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
	background: ${(props) => props.theme.darkBlue};
	padding: 3.5rem 0 2rem;
	max-width: 640px;
	border-radius: 4px;
	border-bottom: 3px solid ${(props) => props.theme.pink};
	box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);
`

export const Skill = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 160px;
	min-height: 160px;

	svg {
		min-height: 100px;
	}
`
