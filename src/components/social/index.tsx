import React, { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import { socialLinks } from '~@utils/site-data'
import { Container, Icon } from '~@components/social/styles'

const Social: FC = () => (
	<Container>
		{socialLinks.map(({ id, title, url, icon }) => (
			<Fragment key={id}>
				<Link to={url} target="_blank" rel="noopener">
					<Icon>
						<SVG src={icon} alt={title} width={30} />
					</Icon>
				</Link>
			</Fragment>
		))}
	</Container>
)

export default Social

Social.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string,
	icon: PropTypes.string
}
