import React, { FC } from 'react'
import { me, getDate } from '~@utils/site-data.ts'

const Footer: FC = () => (
	<footer>
		<span>{`@ ${getDate} ${me.name}`}</span>
	</footer>
)

export default Footer
