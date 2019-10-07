import styled from 'styled-components'

export const Container = styled.div`display: flex;`

export const Icon = styled.div`
	svg {
		transform: scale(1);
		transition: all .1s ease;

		&:hover {
			transform: scale(1.05);
		}
	}
`
