import React from 'react'
import { withIntl, Link } from 'src/i18n'

import PageLayout from 'src/components/PageLayout'
import ChangeTitle from '../components/ChangeTitle'
import Layout from 'src/components/Layout'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { StyledPageHeading } from '../styled-components'
import { StyledTextSection } from '../styled-components/TextSection'
import { StyledContainer } from '../styled-components/Container'
import SocialLinks from '../components/SocialLinks'

const Imprint = () => (
  <Layout>
    <PageLayout>
      <ChangeTitle translate additionalText="legalNoticeTitle" />
      <StyledPageHeading>
        <FormattedMessage id="legalNoticeTitle" />
      </StyledPageHeading>
      <StyledTextSection>
        <FormattedHTMLMessage id="legalNoticeContent" />
      </StyledTextSection>
      <SocialLinks />
    </PageLayout>
  </Layout>
)

export default withIntl(Imprint)
