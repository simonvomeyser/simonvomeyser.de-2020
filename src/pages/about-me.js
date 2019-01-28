import React from 'react'
import { withIntl } from '../i18n'
import { FormattedMessage } from 'react-intl'
import Layout from '../components/layout'
import styled from 'styled-components'
import { vars } from '../util/vars'
import PageLayout from '../components/pageLayout'

const IndexPage = () => (
  <Layout>
    <PageLayout>about me</PageLayout>
  </Layout>
)

export default withIntl(IndexPage)
