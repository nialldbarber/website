import React, { FC, useState } from 'react'
import VizSensor from 'react-visibility-sensor'
import Stack from '~@components/stack'
import { Props } from '~@components/stack-section/types'
import { StackContainer } from '~@components/stack-section/styles'

const StackSection: FC<Props> = ({ stackType, name }) => {
  const [stack, setStack] = useState(false)

  return (
    <VizSensor onChange={(isVisible) => setStack(isVisible)} partialVisibility={true}>
      <StackContainer style={{ opacity: stack ? 1 : 0.25, transition: 'opacity .25s linear' }}>
        <Stack type={name} stack={stackType} />
      </StackContainer>
    </VizSensor>
  )
}

export default StackSection
