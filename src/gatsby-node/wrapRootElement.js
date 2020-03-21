import React from 'react'
import ConsoleJoke from '../components/ConsoleJoke'
import InitialPageFade from '../components/InitialPageFade';
import { LanguageProvider } from '../i18n/languageContext'
import GlobalStyles from '../global-styles'

export default ({ element, props }) => {

  return (
    <>
      <LanguageProvider>
        <InitialPageFade>
          {element}
        </InitialPageFade>
        <GlobalStyles />
        <ConsoleJoke />
      </LanguageProvider>
    </>
  )
}
