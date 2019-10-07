import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import { Container, Skill } from '~@components/stack/styles'

const Stack = ({ type, stack }) => (
	<Fragment>
		<h2>{type}</h2>
		<Container>
			{stack.map(({ id, skill, icon }) => (
				<Skill key={id}>
					<SVG src={icon} alt={skill} width={70} />
					<p>{skill}</p>
				</Skill>
			))}
		</Container>
	</Fragment>
)

export default Stack

Stack.propTypes = {
	type: PropTypes.string,
	stack: PropTypes.array,
	id: PropTypes.string,
	skill: PropTypes.string,
	icon: PropTypes.string
}
