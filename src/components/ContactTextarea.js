import React, { Component } from 'react'
import FormInput from 'src/components/FormInput'

export default class ContactTextarea extends Component {
  render() {
    return (
      <FormInput
        label="textPlaceholder"
        hasError={this.props.hasError}
        disabled={this.props.disabled}
      >
        <textarea
          name="text"
          placeholder=" "
          cols="30"
          rows="10"
          value={this.props.value}
          onBlur={this.props.validate}
          onChange={this.props.update}
        />
      </FormInput>
    )
  }
}
