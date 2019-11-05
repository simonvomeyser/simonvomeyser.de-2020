import React, { Component } from 'react'
import FormInput from 'components/FormInput'

export default class ContactInput extends Component {
  render() {
    return (
      <>
        <FormInput label="email">
          <input name="email" type="email" placeholder=" " />
        </FormInput>
      </>
    )
  }
}
