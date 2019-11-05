import React from 'react'
import { withIntl } from 'i18n'
import Layout from 'components/Layout'
import ChangeTitle from '../components/ChangeTitle'
import PageLayout from 'components/PageLayout'
import FormInput from 'components/FormInput'
import styled from 'styled-components'
import SocialLinks from '../components/SocialLinks'

import {
  StyledPageHeading,
  StyledSubHeadingText,
  StyledContainer,
  StyledTextSection,
  StyledPrimaryButton,
} from '../styled-components'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

class ContactPage extends React.Component {
  state = {
    email: '',
    text: '',
    error: '',
    errorField: '',
    isSubmitting: false,
    success: '',
  }

  submit = e => {
    e.preventDefault()
    this.setState({ success: '' })

    if (this.validateForm()) {
      this.setState({ isSubmitting: true })
      // Ajax Request
      setTimeout(() => {
        this.setState({
          success: 'Yeah, ich melde mich dann bei dir 🙂',
          email: '',
          text: '',
          isSubmitting: false,
        })
      }, 2000)
    }
  }

  validateForm = () => {
    const { email, text } = this.state

    if (!emailIsValid(email.trim())) {
      this.setState({
        error:
          'Das scheint mir keine E-Mail zu sein... wie soll ich dir da antworten 😢',
        errorField: 'email',
      })
      return false
    }

    if (!text.trim() || text.trim().length < 10) {
      this.setState({
        error:
          'Etwas mehr Text könntest du mir schon schreiben sonst muss ich zu viele blöde Fragen stellen 🥺',
        errorField: 'text',
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
              <StyledTextSection>
                <FormattedHTMLMessage id="contactFormCopy" />
              </StyledTextSection>
            </StyledSubHeadingText>
            <ContactForm action="?" onSubmit={this.submit} noValidate>
              <FormInput
                label="email"
                hasError={this.state.errorField === 'email'}
              >
                <input
                  name="email"
                  type="email"
                  placeholder=" "
                  value={this.state.email}
                  onChange={event => {
                    this.setState({
                      email: event.target.value,
                      error: '',
                      errorField: '',
                    })
                  }}
                />
              </FormInput>
              <FormInput
                label="text"
                hasError={this.state.errorField === 'text'}
              >
                <textarea
                  name="text"
                  placeholder=" "
                  cols="30"
                  rows="10"
                  value={this.state.text}
                  onChange={event => {
                    this.setState({
                      text: event.target.value,
                      error: '',
                      errorField: '',
                    })
                  }}
                />
              </FormInput>
              {this.state.error ? (
                <StyledFormError>{this.state.error}</StyledFormError>
              ) : null}
              {this.state.success ? (
                <StyledFormSuccess>{this.state.success}</StyledFormSuccess>
              ) : null}

              <StyledPrimaryButton
                type="submit"
                disabled={this.state.isSubmitting}
              >
                Senden {this.state.isSubmitting ? '...' : null}
              </StyledPrimaryButton>
            </ContactForm>
            <SocialLinks />
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
  margin-bottom: 1rem;
`
const StyledFormSuccess = styled.div`
  margin-bottom: 0.5rem;
  color: green;
  line-height: 1.4;
`

const StyledFormError = styled.div`
  margin-bottom: 0.5rem;
  color: red;
  line-height: 1.4;
`
