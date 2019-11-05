import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { StyledPrimaryButton } from '../styled-components'

import ContactTextarea from './ContactTextarea'
import ContactInput from './ContactInput'
import ContactMessage from './ContactMessage'

class ContactForm extends React.Component {
  state = {
    email: '',
    text: '',
  }

  update = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }

  render() {
    const { email, text } = this.state

    return (
      <StyledWrapper>
        <form action="" onSubmit={this.handleSubmit}>
          <ContactInput value={email} update={this.update} />
          <ContactTextarea value={text} update={this.update} />

          <StyledPrimaryButton type="submit">Senden</StyledPrimaryButton>

          <ContactMessage />
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
