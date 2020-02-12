import React, { FC } from 'react'
import SVG from 'react-inlinesvg'
import { getIcon } from '~/utils/icons'
import { Card } from '~/styles/styled-components/content'
import { Props } from '~/components/post-card/types'

const PostCard: FC<Props> = ({ title, type }) => (
  <Card>
    <SVG src={getIcon(type)} alt="Icon" width={50} />
    <h3>{title}</h3>
  </Card>
)

export default PostCard
