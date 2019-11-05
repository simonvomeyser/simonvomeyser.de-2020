import React, { Component } from 'react'
import FormInput from 'components/FormInput'

export default class ContactInput extends Component {
  render() {
    return (
      <FormInput label="emailPlaceholder" hasError={this.props.hasError}>
        <input
          name="email"
          type="email"
          value={this.props.value}
          onChange={this.props.update}
          placeholder=" "
        />
      </FormInput>
    )
  }
}
