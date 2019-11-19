import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData } from 'react-intl'
import { localeData } from './locales'

addLocaleData(localeData)

export default ComposedComponent => {
  class withIntl extends Component {
    static childContextTypes = {
      language: PropTypes.object,
    }

    constructor(props) {
      super()
      const { pageContext } = props
      const { locale, languages, originalPath } = pageContext

      this.state = {
        language: {
          locale,
          languages,
          originalPath,
        },
      }
    }

    getChildContext() {
      const { language } = this.state
      return {
        language,
      }
    }

    render() {
      const { language } = this.state
      const storedLocale =
        typeof window === 'undefined' ? null : localStorage.language
      const locale = language.locale || storedLocale || 'en'
      const messages = require(`./locales/${locale}.js`) // eslint-disable-line

      return (
        <IntlProvider locale={locale} messages={messages}>
          <ComposedComponent {...this.props} />
        </IntlProvider>
      )
    }
  }
  return withIntl
}
