import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import Helmet from 'react-helmet'

const ChangeTitle = ({ intl, additionalText, translate }) => {
  const finalAdditionalText = translate
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

export default injectIntl(ChangeTitle)
