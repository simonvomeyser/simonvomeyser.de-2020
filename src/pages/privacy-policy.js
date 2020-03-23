import React from 'react'
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl'
import PageLayout from 'src/components/PageLayout'
import ChangeTitle from '../components/ChangeTitle'
import SocialLinks from '../components/SocialLinks'
import { StyledPageHeading } from '../styled-components'
import { StyledTextSection } from '../styled-components/TextSection'

export default function PrivacyPolicy() {
  return (
    <>
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
    </>
  )
}
