import React, { FC, Fragment } from 'react'
import PropTypes from 'prop-types'
import { socialLinks } from '~@utils/site-data'

const Social: FC = () => (
	<div>
		{socialLinks.map(({ id, title, url }) => (
			<Fragment key={id}>
				<p>{title}</p>
			</Fragment>
		))}
	</div>
)

export default Social

Social.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string
}
