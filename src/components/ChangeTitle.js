import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import Helmet from 'react-helmet'

class ChangeTitle extends Component {
  render() {
    const { intl, additionalText } = this.props
    const finalAdditionalText = this.props.translate
      ? intl.formatMessage({ id: additionalText })
      : additionalText
    return (
      <Helmet
        title={
          intl.formatMessage({ id: 'title' }) + ' - ' + finalAdditionalText
        }
      />
    )
  }
}

export default injectIntl(ChangeTitle)
