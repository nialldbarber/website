import React, { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import { socialLinks } from '~@utils/site-data'

const Social: FC = () => (
	<div>
		{socialLinks.map(({ id, title, url, icon }) => (
			<Fragment key={id}>
				<Link to={url} target="_blank" rel="noopener">
					<SVG src={icon} alt={title} width={30} />
				</Link>
			</Fragment>
		))}
	</div>
)

export default Social

Social.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string,
	icon: PropTypes.string
}
