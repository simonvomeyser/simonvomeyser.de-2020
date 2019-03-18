import React from 'react'
import posed, { PoseGroup } from 'react-pose'

const Transition = posed.div({
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0 },
})

export const replaceComponentRenderer = ({ props, ...other }) => {
  const { component } = props.pageResources
  return (
    <PoseGroup preEnterPose="preEnter">
      <Transition key={props.location.key}>
        {React.createElement(component, props)}
      </Transition>
    </PoseGroup>
  )
}

export const onClientEntry = () => {
  localStorage.setItem('startedAt', Date.now())
  localStorage.setItem('hasNavigationAnimationRun', false)
}
