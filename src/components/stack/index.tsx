import React, { FC, Fragment } from 'react'
import SVG from 'react-inlinesvg'
import { Container, Skill } from '~/components/stack/styles'
import { Props, StackProps } from '~/components/stack/types'

const Stack: FC<Props> = ({ type, stack }) => (
  <Fragment>
    <h2>{type}</h2>
    <Container>
      {stack.map(({ id, skill, icon }: StackProps) => (
        <Skill key={id}>
          <SVG src={icon} alt={skill} width={90} />
          <p>{skill}</p>
        </Skill>
      ))}
    </Container>
  </Fragment>
)

export default Stack
