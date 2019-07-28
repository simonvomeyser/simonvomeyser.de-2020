import React from 'react'
import { graphql } from 'gatsby'
import { withIntl, Link } from 'i18n'
import Layout from 'components/Layout'
import ChangeTitle from '../components/ChangeTitle'
import PageLayout from 'components/PageLayout'
import styled from 'styled-components'
import {
  StyledPageHeading,
  StyledSubHeadingText,
  StyledContainer,
  StyledPrimaryButton,
  StyledFormInput,
} from '../styled-components'
import { FormattedMessage } from 'react-intl'

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
              <p>
                Das obligatorische Kontaktformular auf einer Webseite darf
                natürlich nicht fehelen. Aber seien wir ehrlich: Es macht auch
                nichts anderes, als mir eine E-Mail an info@simonvomyeser.de zu
                schicken.
              </p>
              <p>
                Ob du nun den Server für dich arbeiten lassen willst, oder ,or
                selbst eine E-mail schreibst: Ich bin immer auf der Suche nach
                Interssanten Projekten, Geschäftskontakten oder einfach coolen
                Entwicklern mit Humor zum quatschen.
              </p>
              <p>
                Ich biete Projektunterschtützung in der Entwicklung, Consulting
                und Konzeption, aber meld dich doch einfach :)
              </p>
            </StyledSubHeadingText>

            <ContactForm action="?">
              <StyledFormInput>
                <input name="name" type="text" />
              </StyledFormInput>
              <StyledFormInput>
                <input name="email" type="email" />
              </StyledFormInput>
              <StyledFormInput>
                <textarea name="text" id="" cols="30" rows="10" />
              </StyledFormInput>
              <StyledPrimaryButton type="submit">Senden</StyledPrimaryButton>
            </ContactForm>
          </StyledContainer>
        </PageLayout>
      </Layout>
    )
  }
}

export default withIntl(ContactPage)

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`
