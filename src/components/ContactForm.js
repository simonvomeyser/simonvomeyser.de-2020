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
    isDirty: false,
  }

  update = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
    this.removeError(target.name)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ isSubmitting: true, isDirty: true })

    if (!this.validateAll()) {
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
  removeError = inputName => {
    const newErrors = Object.assign({}, this.state.errors)
    delete newErrors[inputName]

    this.setState({ errors: newErrors })
  }
  validateInput = ({ target }) => {
    const inputName = target.name

    const newErrors = Object.assign(this.state.errors)

    if (inputName === 'email') {
      newErrors.email = !isEmail(this.state.email)
    }

    if (inputName === 'text') {
      newErrors.text = !isContactText(this.state.text)
    }

    this.setState({ errors: newErrors })
  }
  validateAll = () => {
    const newErrors = {
      email: !isEmail(this.state.email),
      text: !isContactText(this.state.text),
    }

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
              validate={this.validateInput}
            />
            <ContactTextarea
              value={text}
              update={this.update}
              hasError={!!errors.text}
              validate={this.validateInput}
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
