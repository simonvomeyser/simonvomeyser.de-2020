import React from 'react'
import ConsoleJoke from './src/components/ConsoleJoke'
import InitialPageFade from './src/components/InitialPageFade';

export const onClientEntry = () => {
  localStorage.setItem('startedAt', Date.now())
  localStorage.setItem('hasNavigationAnimationRun', false)
}

export const wrapRootElement = ({ element, props }) => {
  return (
    <>
      <InitialPageFade>
        {element}
      </InitialPageFade>
      <ConsoleJoke />
    </>
  )
}
