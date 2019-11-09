import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { StyledPrimaryButton } from '../styled-components'

import ContactTextarea from './ContactTextarea'
import ContactInput from './ContactInput'
import ContactMessage from './ContactMessage'
import { isEmail } from '../util/isEmail'

class ContactForm extends React.Component {
  state = {
    email: '',
    text: '',
    errors: {},
  }

  update = ({ target }) => {
    const newErrors = this.state.errors
    newErrors[target.name] = ''

    this.setState({
      [target.name]: target.value,
      errors: newErrors,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, text } = this.state

    const newErrors = {}

    if (!isEmail(email)) {
      newErrors.email = 'emailError'
    }

    if (text.length < 10) {
      newErrors.text = 'textError'
    }

    this.setState({ errors: newErrors })
  }

  render() {
    const { email, text, errors } = this.state

    return (
      <StyledWrapper>
        <form noValidate action="" onSubmit={this.handleSubmit}>
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
            <ContactMessage />
          </StyledMessageWrapper>

          <StyledButtonWrapper>
            <StyledPrimaryButton type="submit">Senden</StyledPrimaryButton>
          </StyledButtonWrapper>
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
`

const StyledMessageWrapper = styled.div`
  margin-bottom: 1rem;
`
