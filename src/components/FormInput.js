import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { FormattedMessage } from 'react-intl'
import posed from 'react-pose'

export default class FormInput extends Component {
  render() {
    const { children, hasError, label } = this.props

    return (
      <StyledWrapper hasError={hasError}>
        {children}
        <FloatingLabel>
          <FormattedMessage id={label} />
        </FloatingLabel>
        <PosedErrorIcon pose={hasError ? 'shown' : 'hidden'}>×</PosedErrorIcon>
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
  top: 20px;
  left: 0.75rem;
  font-size: 0.75rem;
  color: grey;
  transition: all 0.3s ease-in-out;
  opacity: 0.75;
  pointer-events: none;
`

const StyledErrorIcon = styled.span`
  position: absolute;
  top: 17px;
  right: 18px;
  color: red;
  font-size: 1.2em;
  background: ${vars.styles.colors.neutral10};
`

const PosedErrorIcon = posed(StyledErrorIcon)({
  hidden: {
    visibility: 'hidden',
    scale: 0.1,
  },
  shown: {
    visibility: 'visible',
    scale: 1,
  },
})

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
