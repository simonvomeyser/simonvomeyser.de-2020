import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import posed from 'react-pose'
import { vars, errorColor } from 'util/vars'

export default class FormInput extends Component {
  render() {
    const { children, hasError, isValid, label } = this.props

    return (
      <StyledWrapper>
        {children}
        <FloatingLabel>
          <FormattedMessage id={label} />
        </FloatingLabel>
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
  border-right: 2px solid ${vars.styles.colors.accent3};
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
  color: ${errorColor};
  font-size: 34px;
`

const StyledErrorLine = styled.div`
  position: absolute;
  top: 0;
  right: -2px;
  background: ${errorColor};
  width: 2px;
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
  },
})
