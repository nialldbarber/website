import React, { FC } from 'react'
import { me, getDate } from '~@utils/site-data.ts'
import { Container } from '~@components/footer/styles.js'

const Footer: FC = () => (
	<Container>
		<span>{`@ ${getDate} ${me.name}`}</span>
	</Container>
)

export default Footer
