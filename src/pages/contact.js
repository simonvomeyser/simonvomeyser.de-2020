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
    errorField: '',
    isSubmitting: false,
  }

  submit = e => {
    e.preventDefault()
    this.setState({ isSubmitting: true })

    if (this.validateForm()) {
    } else {
    }
  }

  validateForm = () => {
    const { name, email, text } = this.state

    if (!name.trim()) {
      this.setState({
        error:
          'Ich brauch schon einen Namen von dir... oder kennen wir uns schon? 🤓',
        errorField: 'name',
        isSubmitting: false,
      })
      return false
    }

    if (!emailIsValid(email.trim())) {
      this.setState({
        error:
          'Das scheint mir keine E-Mail zu sein... wie soll ich dir da antworten 😢',
        errorField: 'email',
        isSubmitting: false,
      })
      return false
    }

    if (!text.trim() || text.trim().length < 10) {
      this.setState({
        error:
          'Etwas mehr Text könntest du mir schon schreiben sonst muss ich zu viele blöde Fragen stellen 🥺',
        errorField: 'text',
        isSubmitting: false,
      })
      return false
    }

    return true
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

            <ContactForm action="?" onSubmit={this.submit} noValidate>
              <StyledFormInput hasError={this.state.errorField === 'name'}>
                <input
                  name="name"
                  type="text"
                  onChange={event => {
                    this.setState({
                      name: event.target.value,
                      error: '',
                      errorField: '',
                    })
                  }}
                />
              </StyledFormInput>
              <StyledFormInput hasError={this.state.errorField === 'email'}>
                <input
                  name="email"
                  type="email"
                  onChange={event => {
                    this.setState({
                      email: event.target.value,
                      error: '',
                      errorField: '',
                    })
                  }}
                />
              </StyledFormInput>
              <StyledFormInput hasError={this.state.errorField === 'text'}>
                <textarea
                  name="text"
                  id=""
                  cols="30"
                  rows="10"
                  onChange={event => {
                    this.setState({
                      text: event.target.value,
                      error: '',
                      errorField: '',
                    })
                  }}
                />
              </StyledFormInput>
              {this.state.error ? (
                <StyledFormError>{this.state.error}</StyledFormError>
              ) : null}
              <StyledPrimaryButton
                type="submit"
                disabled={this.state.isSubmitting}
              >
                Senden
              </StyledPrimaryButton>
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
  line-height: 1.4;
`
