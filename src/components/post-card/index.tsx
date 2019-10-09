import React, { FC } from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import { getIcon } from '~@utils/icons'
import { Card } from '~@styles/styled-components/content'

const PostCard: FC = ({ title, type }) => (
	<Card>
		<SVG src={getIcon(type)} alt="Icon" width={50} />
		{title}
	</Card>
)

export default PostCard

PostCard.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string
}
