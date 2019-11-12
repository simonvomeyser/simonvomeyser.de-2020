import React, { Component } from 'react'
import FormInput from 'components/FormInput'

export default class ContactTextarea extends Component {
  render() {
    return (
      <FormInput label="textPlaceholder" hasError={this.props.hasError}>
        <textarea
          name="text"
          placeholder=" "
          cols="30"
          rows="10"
          value={this.props.value}
          onBlur={this.props.udpate}
          onChange={this.props.update}
        />
      </FormInput>
    )
  }
}
