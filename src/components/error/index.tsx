import React, { FC } from 'react'

interface Props {
	message: string
}

const Error: FC<Props> = ({ message }) => (
	<div>
		<p>{message}</p>
	</div>
)

export default Error
