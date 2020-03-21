import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import languageContext from './languageContext'

const I18nLink = ({ to, children, ...rest }) => {
  const [language] = useContext(languageContext);
  const toWithLang = `/${language}${to}`;
  return (
    <Link to={toWithLang} {...rest}>
      {children}
    </Link>
  )
}

I18nLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

I18nLink.contextTypes = {
  language: PropTypes.object,
}

export default I18nLink
