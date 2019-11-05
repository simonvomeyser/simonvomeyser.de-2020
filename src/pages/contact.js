import React from 'react'
import { withIntl } from 'i18n'
import Layout from 'components/Layout'
import ChangeTitle from '../components/ChangeTitle'
import PageLayout from 'components/PageLayout'
import SocialLinks from '../components/SocialLinks'

import {
  StyledPageHeading,
  StyledSubHeadingText,
  StyledContainer,
  StyledTextSection,
} from '../styled-components'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import ContactForm from '../components/ContactForm'

class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
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
      </Layout>
    )
  }
}

export default withIntl(ContactPage)
