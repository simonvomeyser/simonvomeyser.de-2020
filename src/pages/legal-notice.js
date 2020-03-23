import React from 'react'
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl'
import PageLayout from 'src/components/PageLayout'
import ChangeTitle from '../components/ChangeTitle'
import SocialLinks from '../components/SocialLinks'
import { StyledPageHeading } from '../styled-components'
import { StyledTextSection } from '../styled-components/TextSection'


export default function Imprint() {
  return (
    <>
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
    </>
  )
}