import React from 'react'
import ConsoleJoke from '../components/ConsoleJoke'
import InitialPageFade from '../components/InitialPageFade';

export default ({ element, props }) => {
  return (
    <>
      <InitialPageFade>
        {element}
      </InitialPageFade>
      <ConsoleJoke />
    </>
  )
}
