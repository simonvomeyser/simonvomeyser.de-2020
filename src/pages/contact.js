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
  state = {
    name: '',
    email: '',
    text: '',
    error: '',
    errorFields: [],
  }

  submit = e => {
    e.preventDefault()

    if (this.validateForm()) {
      console.log('object')
    } else {
      this.setState({ error: 'Etwas ist schief gelaufen.' })
    }
  }

  validateForm = () => {
    return false
  }

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

            <ContactForm action="?" onSubmit={this.submit}>
              <StyledFormInput>
                <input
                  name="name"
                  type="text"
                  onChange={event => {
                    this.setState({ name: event.target.value })
                  }}
                />
              </StyledFormInput>
              <StyledFormInput>
                <input
                  name="email"
                  type="email"
                  onChange={event => {
                    this.setState({ name: event.target.value })
                  }}
                />
              </StyledFormInput>
              <StyledFormInput>
                <textarea
                  name="text"
                  id=""
                  cols="30"
                  rows="10"
                  onChange={event => {
                    this.setState({ name: event.target.value })
                  }}
                />
              </StyledFormInput>
              {this.state.error ? (
                <StyledFormError>{this.state.error}</StyledFormError>
              ) : null}
              <StyledPrimaryButton type="submit">Senden</StyledPrimaryButton>
            </ContactForm>
          </StyledContainer>
        </PageLayout>
      </Layout>
    )
  }
}

export default withIntl(ContactPage)

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const StyledFormError = styled.div`
  margin-bottom: 0.5rem;
  color: red;
`
