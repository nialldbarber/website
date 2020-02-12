import React, { FC } from 'react'
import { me, getDate } from '~/utils/site-data'
import Social from '~/components/social'
import { Container } from '~/components/footer/styles'

const Footer: FC = () => (
  <Container>
    <Social />
    <span>{`@ ${getDate} ${me.name}`}</span>
  </Container>
)

export default Footer
