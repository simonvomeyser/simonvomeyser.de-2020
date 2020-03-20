import React from 'react'
import ConsoleJoke from '../components/ConsoleJoke'
import InitialPageFade from '../components/InitialPageFade';
import LanguageContext from '../i18n/LanguageContext'

export default ({ element, props }) => {
  return (
    <>
      <LanguageContext.Provider value="en">
        <InitialPageFade>
          {element}
        </InitialPageFade>
        <ConsoleJoke />
      </LanguageContext.Provider>
    </>
  )
}
