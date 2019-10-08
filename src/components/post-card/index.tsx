import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { Card } from '~@styles/styled-components/content'

const PostCard: FC = ({ title }) => (
	<Card>
		<h3>{title}</h3>
	</Card>
)

export default PostCard

PostCard.propTypes = {
	title: PropTypes.string
}
