import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import Helmet from 'react-helmet'

class ChangeTitle extends Component {
  render() {
    const { intl, additionalText } = this.props
    return (
      <Helmet
        title={
          intl.formatMessage({ id: 'title' }) +
          ' - ' +
          intl.formatMessage({ id: additionalText })
        }
      />
    )
  }
}

export default injectIntl(ChangeTitle)
