import React from 'react';
import Helmet from 'react-helmet';
import { detectLanguage } from '../i18n'
import { LanguageProvider } from '../i18n/languageContext'


export default ({ element, props }) => {
  const { hasTranslatedURL, language: pageContextLanguage } = props.pageContext;
  const language = pageContextLanguage || detectLanguage();
  // todo: actually set language

  // Move layout here?
  return (
    <>
      <LanguageProvider language={language}>
        <Helmet>
          <html lang={language} />
        </Helmet>
        {element}
      </LanguageProvider>
    </>
  )
}
