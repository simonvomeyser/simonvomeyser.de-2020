import React from 'react'
import { withIntl, Link } from 'i18n'

import ChangeTitle from '../components/ChangeTitle'
import Layout from 'components/Layout'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

const Imprint = () => (
  <Layout>
    <ChangeTitle additionalText="navigationImprint" />
    <h1>
      <FormattedMessage id="imprintTitle" />
    </h1>
    <FormattedHTMLMessage id="imprintContent" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default withIntl(Imprint)
