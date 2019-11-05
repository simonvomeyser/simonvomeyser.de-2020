import React, { Component } from 'react'
import FormInput from 'components/FormInput'

export default class ContactTextarea extends Component {
  render() {
    return (
      <>
        <FormInput label="text">
          <textarea name="text" placeholder=" " cols="30" rows="10" />
        </FormInput>
      </>
    )
  }
}
