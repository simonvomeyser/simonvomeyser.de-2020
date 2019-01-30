import React from 'react'
import { withIntl, Link } from 'i18n'

import Layout from 'components/layout'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

const Imprint = () => (
  <Layout>
    <h1>
      <FormattedMessage id="imprintTitle" />
    </h1>
    <FormattedHTMLMessage id="imprintContent" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default withIntl(Imprint)
