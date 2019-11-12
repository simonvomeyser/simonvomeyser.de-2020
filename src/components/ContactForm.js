import React, { Component } from 'react'
import styled from 'styled-components'
import { StyledPrimaryButton } from '../styled-components'

import ContactTextarea from './ContactTextarea'
import ContactInput from './ContactInput'
import Message from './Message'
import { isEmail } from '../util/isEmail'
import { FormattedMessage } from 'react-intl'
import { isContactText } from '../util/isContactText'
import Spinner from './Spinner'

class ContactForm extends Component {
  state = {
    email: '',
    text: '',
    errors: {},
    isSubmitting: false,
    isDone: false,
  }

  update = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
    this.validate()
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ isSubmitting: true })

    if (!this.validate()) {
      this.setState({ isSubmitting: false })
      return
    }
  }
  getMessageIdToDisplay = () => {
    const { email: emailError, text: textError } = this.state.errors

    if (emailError && !textError) {
      return 'emailRequired'
    }
    if (!emailError && textError) {
      return 'textRequired'
    }
    return 'emailAndTextRequired'
  }
  validate = () => {
    const { email, text } = this.state

    const newErrors = {}

    newErrors.email = !isEmail(email)

    newErrors.text = !isContactText(text)

    this.setState({ errors: newErrors })

    return !newErrors.email && !newErrors.text
  }

  render() {
    const { email, text, errors, isSubmitting, isDone } = this.state
    const idForError = this.getMessageIdToDisplay()

    return (
      <StyledWrapper>
        <form noValidate action="" onSubmit={this.handleSubmit}>
          <fieldset disabled={isSubmitting || isDone}>
            <ContactInput
              value={email}
              update={this.update}
              hasError={!!errors.email}
            />
            <ContactTextarea
              value={text}
              update={this.update}
              hasError={!!errors.text}
            />

            <StyledMessageWrapper>
              <Message
                heading={<FormattedMessage id="contactMessageHeading" />}
                text={<FormattedMessage id={idForError} />}
                shown={errors.email || errors.text}
                type="error"
              />
              <Message
                heading={<FormattedMessage id="contactMessageHeading" />}
                text={<FormattedMessage id={idForError} />}
                shown={isDone}
                type="success"
              />
            </StyledMessageWrapper>

            <StyledButtonWrapper hidden={isDone}>
              <StyledPrimaryButton type="submit">
                {isSubmitting ? <Spinner /> : <FormattedMessage id="send" />}
              </StyledPrimaryButton>
            </StyledButtonWrapper>
          </fieldset>
        </form>
      </StyledWrapper>
    )
  }
}

export default ContactForm

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  transition: opacity 0.28s ease-in-out;
  opacity: ${({ hidden }) => (hidden ? 0.1 : 1)};
`

const StyledMessageWrapper = styled.div`
  margin-bottom: 1rem;
`
