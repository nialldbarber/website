import React, { FC, Fragment } from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import { socialLinks } from '~@utils/site-data'

const Social: FC = () => (
	<div>
		{socialLinks.map(({
 id, title, url, icon 
}) => (
			<Fragment key={id}>
				<SVG src={icon} width={30} />
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
