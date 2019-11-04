import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { vars } from 'util/vars'

export default class FormInput extends Component {
  render() {
    const { children, hasError, label } = this.props

    return (
      <StyledWrapper hasError={hasError}>
        {children}
        <FloatingLabel> {label} </FloatingLabel>
      </StyledWrapper>
    )
  }
  static propTypes = {
    hasError: PropTypes.bool,
    label: PropTypes.string,
  }
}

const FloatingLabel = styled.label`
  position: absolute;
  z-index: 1;
  top: 0.5rem;
  left: 0.5rem;
  color: grey;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
`

const StyledWrapper = styled.div`
  position: relative;
  border: 1px solid;
  border-color: ${props =>
    props.hasError ? 'red' : vars.styles.colors.neutral9};
  background: ${vars.styles.colors.neutral10};
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);

  input:not(:placeholder-shown),
  input:focus,
  textarea:not(:placeholder-shown),
  textarea:focus {
    + label {
      font-size: 12px;
      opacity: 0.5;
      transform: translateY(-14px);
    }
  }
`
