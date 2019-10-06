import React, { FC } from 'react'
import PropTypes from 'prop-types'

interface Props {
	message: string
}

const Error: FC<Props> = ({ message }) => (
	<div>
		<p>{message}</p>
	</div>
)

export default Error

Error.propTypes = {
	message: PropTypes.string
}
