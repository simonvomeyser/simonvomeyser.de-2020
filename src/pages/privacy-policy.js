import React from 'react'
import { withIntl, Link } from 'i18n'

import PageLayout from 'components/PageLayout'
import ChangeTitle from '../components/ChangeTitle'
import Layout from 'components/Layout'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { StyledPageHeading } from '../styled-components'
import SocialLinks from '../components/SocialLinks'
import { StyledTextSection } from '../styled-components/TextSection'

const PrivacyPolicy = () => (
  <Layout>
    <PageLayout>
      <ChangeTitle translate additionalText="privacyPolicyTitleShort" />
      <StyledPageHeading>
        <FormattedMessage id="privacyPolicyTitle" />
      </StyledPageHeading>
      <StyledTextSection>
        <FormattedHTMLMessage id="privacyPolicyContent" />
      </StyledTextSection>
      <SocialLinks />
    </PageLayout>
  </Layout>
)

export default withIntl(PrivacyPolicy)
