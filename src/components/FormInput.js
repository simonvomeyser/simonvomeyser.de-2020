import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { FormattedMessage } from 'react-intl'

export default class FormInput extends Component {
  render() {
    const { children, hasError, label } = this.props

    return (
      <StyledWrapper hasError={hasError}>
        {children}
        <FloatingLabel>
          <FormattedMessage id={label} />
        </FloatingLabel>
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
  top: 18px;
  left: 0.75rem;
  font-size: 0.75rem;
  color: grey;
  transition: all 0.3s ease-in-out;
  opacity: 0.75;
  pointer-events: none;
`

const StyledWrapper = styled.div`
  position: relative;
  border: 1px solid;
  border-color: ${props =>
    props.hasError ? 'red' : vars.styles.colors.neutral9};
  background: ${vars.styles.colors.neutral10};
  margin-bottom: 1rem;
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);

  > *:not(:placeholder-shown),
  > *:focus {
    + label {
      font-size: 10px;
      opacity: 0.5;
      top: -0.75rem;
      left: 0;
    }
  }
`
