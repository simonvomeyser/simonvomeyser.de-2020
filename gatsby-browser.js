import React from 'react'
import ConsoleJoke from './src/components/ConsoleJoke'

export const onClientEntry = () => {
  localStorage.setItem('startedAt', Date.now())
  localStorage.setItem('hasNavigationAnimationRun', false)
}

export const wrapRootElement = ({ element, props }) => {
  return (
    <>
      {element}
      <ConsoleJoke />
    </>
  )
}
