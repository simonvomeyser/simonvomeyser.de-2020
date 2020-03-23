import React from 'react'
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl'
import PageLayout from 'src/components/PageLayout'
import ChangeTitle from '../components/ChangeTitle'
import ContactForm from '../components/ContactForm'
import SocialLinks from '../components/SocialLinks'
import { StyledContainer, StyledPageHeading, StyledSubHeadingText, StyledTextSection } from '../styled-components'

export default function ContactPage() {
  return (
    <>
      <PageLayout>
        <ChangeTitle translate additionalText="navigationContact" />
        <StyledContainer small>
          <StyledPageHeading>
            <FormattedMessage id="navigationContact" />
          </StyledPageHeading>
          <StyledSubHeadingText>
            <StyledTextSection>
              <FormattedHTMLMessage id="contactFormCopy" />
            </StyledTextSection>
          </StyledSubHeadingText>
          <ContactForm />
          <SocialLinks />
        </StyledContainer>
      </PageLayout>
    </>
  )
}