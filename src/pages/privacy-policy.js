import React from 'react'
import { withIntl, Link } from 'i18n'

import PageLayout from 'components/PageLayout'
import ChangeTitle from '../components/ChangeTitle'
import Layout from 'components/Layout'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { StyledPageHeading } from '../styled-components'

const PrivacyPolicy = () => (
  <Layout>
    <PageLayout>
      <ChangeTitle translate additionalText="navigationPrivacyPolicy" />
      <StyledPageHeading>
        <FormattedMessage id="PrivacyPolicyTitle" />
      </StyledPageHeading>
      <FormattedHTMLMessage id="PrivacyPolicyContent" />
    </PageLayout>
  </Layout>
)

export default withIntl(PrivacyPolicy)
