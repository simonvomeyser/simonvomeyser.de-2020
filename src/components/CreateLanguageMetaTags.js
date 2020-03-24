import React, { useContext } from 'react'
import Helmet from 'react-helmet'
import pageContext from '../gatsby-node/pageContext'

const { getTranslatedPath } = require('../i18n/translatedPathHelper')

export default function CreateLanguageMetaTags() {
  const { path, location, pageContext: gatsbyPageContext } = useContext(pageContext);
  const isTranslatedPage = !!gatsbyPageContext.language

  return (
    <>
      <Helmet>
        <link rel="canonical" href={location.href} />
      </Helmet>
      {renderHreflangTags()}
    </>
  )

  function renderHreflangTags() {
    if (isTranslatedPage) {
      return (
        <Helmet>
          <link rel="alternate" href={location.origin + getTranslatedPath(path, 'en')} hreflang="en" />
          <link rel="alternate" href={location.origin + getTranslatedPath(path, 'de')} hreflang="de" />
        </Helmet>
      )
    }
    return null
  }
}
