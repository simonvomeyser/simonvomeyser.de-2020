import React from 'react'
import { withIntl, Link } from 'i18n'

import PageLayout from 'components/PageLayout'
import ChangeTitle from '../components/ChangeTitle'
import Layout from 'components/Layout'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { StyledPageHeading } from '../styled-components'

const Imprint = () => (
  <Layout>
    <PageLayout>
      <ChangeTitle translate additionalText="navigationImprint" />
      <StyledPageHeading>
        <FormattedMessage id="imprintTitle" />
      </StyledPageHeading>
      <FormattedHTMLMessage id="imprintContent" />
    </PageLayout>
  </Layout>
)

export default withIntl(Imprint)
