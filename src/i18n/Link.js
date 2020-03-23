import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import languageContext from './languageContext'

const { isTranslatedPath, getTranslatedPath } = require('../i18n/translatedPathHelper')

const I18nLink = ({ to, children, ...rest }) => {
  const { language } = useContext(languageContext);
  let translatedTo = to;

  if (isTranslatedPath(to)) {
    translatedTo = getTranslatedPath(to, language)
  }

  return (<Link to={translatedTo} {...rest}> {children} </Link>)

}

I18nLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

I18nLink.contextTypes = {
  language: PropTypes.object,
}

export default I18nLink
