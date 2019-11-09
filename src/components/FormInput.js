import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import posed from 'react-pose'
import { vars, primaryColor } from 'util/vars'

export default class FormInput extends Component {
  render() {
    const { children, hasError, isValid, label } = this.props

    return (
      <StyledWrapper>
        {children}
        <FloatingLabel>
          <FormattedMessage id={label} />
        </FloatingLabel>
        <PosedSuccessIcon pose={isValid ? 'show' : 'hide'} />
        <PosedErrorIcon pose={hasError ? 'show' : 'hide'}>×</PosedErrorIcon>
        <PosedErrorLine pose={hasError ? 'show' : 'hide'} />
      </StyledWrapper>
    )
  }
  static propTypes = {
    hasError: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.string,
  }
}

const StyledWrapper = styled.div`
  position: relative;
  border: 1px solid;
  border-color: ${vars.styles.colors.neutral9};
  border-right: 3px solid ${vars.styles.colors.accent2};
  background: ${vars.styles.colors.neutral10};
  margin-bottom: 1rem;

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

const StyledErrorIcon = styled.div`
  position: absolute;
  top: 0.75rem;
  line-height: 0.85;
  right: 18px;
  color: red;
  font-size: 34px;
`

const StyledSuccessIcon = styled.div`
  position: absolute;
  top: 0.75rem;
  line-height: 0.85;
  right: 18px;
  width: 30px;
  height: 30px;
  &:before {
    position: absolute;
    left: 2px;
    top: 15px;
    transform: rotate(45deg);
    display: block;
    content: '';
    width: 10px;
    height: 3px;
    background-color: ${primaryColor};
  }
  &:after {
    position: absolute;
    left: 6px;
    top: 12px;
    transform: rotate(-45deg);
    display: block;
    content: '';
    width: 20px;
    height: 3px;
    background-color: ${primaryColor};
  }
`

const StyledErrorLine = styled.div`
  position: absolute;
  top: 0;
  right: -3px;
  background: red;
  width: 3px;
  height: 100%;
`

const PosedErrorIcon = posed(StyledErrorIcon)({
  hide: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 200, duration: 300 },
  },
})

const PosedSuccessIcon = posed(StyledSuccessIcon)({
  hide: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 200, duration: 300 },
  },
})

const PosedErrorLine = posed(StyledErrorLine)({
  hide: {
    height: 0,
    opacity: 0,
  },
  show: {
    height: '100%',
    opacity: 1,
    transition: { type: 'spring', damping: 200, duration: 300 },
  },
})
