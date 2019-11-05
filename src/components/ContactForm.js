import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { StyledPrimaryButton } from '../styled-components'

import FormInput from 'components/FormInput'

const ContactForm = () => {
  return (
    <>
      <StyledWrapper>
        <form action="">
          <FormInput label="email">
            <input name="email" type="email" placeholder=" " />
          </FormInput>
          <FormInput label="text">
            <textarea name="text" placeholder=" " cols="30" rows="10" />
          </FormInput>

          <StyledPrimaryButton type="submit">Senden</StyledPrimaryButton>
        </form>
      </StyledWrapper>
    </>
  )
}

export default ContactForm

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`
