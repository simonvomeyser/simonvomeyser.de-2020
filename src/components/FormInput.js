import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import posed from 'react-pose'
import { vars, errorColor } from 'src/util/vars'

export default class FormInput extends Component {
  render() {
    const { children, hasError, disabled, label, value } = this.props

    return (
      <StyledWrapper disabled={disabled}>
        {children}
        <FloatingLabel shrinked={!!value}>
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
    value: PropTypes.string,
  }
}

const StyledWrapper = styled.div`
  position: relative;
  border: 1px solid;
  border-color: ${vars.styles.colors.neutral9};
  border-right: 2px solid ${vars.styles.colors.accent3};
  background: ${vars.styles.colors.neutral10};
  margin-bottom: 1rem;
  transition: opacity 0.28s ease-in-out;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};

  > *:focus {
    + label {
      opacity: 0.6;
    }
  }
`

const FloatingLabel = styled.label`
  font-size: 10px;
  position: absolute;
  z-index: 1;
  top: ${props => (props.shrinked ? '-0.75rem' : '20px')};
  left: ${props => (props.shrinked ? 0 : '0.75rem')};
  font-size: ${props => (props.shrinked ? '10px' : '16px')};
  color: grey;
  transition: all 0.2s ease-in-out;
  opacity: ${props => (props.shrinked ? 0.6 : 0.8)};
  pointer-events: none;
`

const StyledErrorIcon = styled.div`
  position: absolute;
  top: 1px;
  right: 2px;
  line-height: 0.85;
  color: ${errorColor};
  font-size: 14px;
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
    scale: 0.2,
  },
  show: {
    scale: 1,
    opacity: 1,
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
