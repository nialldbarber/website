import React, { FC, Fragment } from 'react'
import SVG from 'react-inlinesvg'
import { socialLinks } from '~/utils/site-data'
import { Container, Icon } from '~/components/social/styles'
import { SocialProps } from '~/components/social/types'

const Social: FC = () => (
  <Container>
    {socialLinks.map(({ id, title, url, icon }: SocialProps) => (
      <Fragment key={id}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Icon>
            <SVG src={icon} alt={title} width={30} />
          </Icon>
        </a>
      </Fragment>
    ))}
  </Container>
)

export default Social
