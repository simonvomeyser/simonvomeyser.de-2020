import React from 'react';
import Helmet from 'react-helmet';
import { detectLanguage } from '../i18n'

export default ({ element, props }) => {
  const { hasTranslatedURL, language: propsLanguage } = props.pageContext;
  const language = propsLanguage || detectLanguage();
  // todo: actually set language

  // Move layout here?
  return (
    <>
      <Helmet>
        <html lang={language} />
      </Helmet>
      {element}
    </>
  )
}
