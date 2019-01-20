import React from 'react'
import { withIntl } from '../i18n'
import {FormattedMessage} from 'react-intl';
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1> <FormattedMessage id="landingTitle1"/> </h1>
    <h2> <FormattedMessage id="landingTitle2"/> </h2>
  </Layout>
)

export default withIntl(IndexPage);
