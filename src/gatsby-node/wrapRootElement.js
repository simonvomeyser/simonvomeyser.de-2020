import React from 'react'
import ConsoleJoke from '../components/ConsoleJoke'
import InitialPageFade from '../components/InitialPageFade';
import { LanguageProvider } from '../i18n/languageContext'

export default ({ element, props }) => {

  return (
    <>
      <LanguageProvider>
        <InitialPageFade>
          {element}
        </InitialPageFade>
        <ConsoleJoke />
      </LanguageProvider>
    </>
  )
}
