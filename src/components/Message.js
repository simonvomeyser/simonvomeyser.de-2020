import React, { Component } from 'react'
import styled from 'styled-components'
import { vars, errorColor, primaryColor } from '../util/vars'
import posed from 'react-pose'

export default class Message extends Component {
  render() {
    const { shown, heading, text, type } = this.props
    return (
      <PosedWrapper pose={shown ? 'shown' : 'hidden'} type={type}>
        <StyledHeading type={type}>{heading}</StyledHeading>
        <StyledText type={type}>{text}</StyledText>
      </PosedWrapper>
    )
  }
}
const errorBorderColor = vars.styles.colors.secondaryAccent3
const errorBgColor = vars.styles.colors.secondaryAccent1
const errorTextColor = vars.styles.colors.secondaryAccent2

const successBorderColor = vars.styles.colors.accent3
const successBgColor = vars.styles.colors.accent1
const successTextColor = vars.styles.colors.accent4

const StyledWrapper = styled.div`
  position: relative;
  padding: 1rem;
  border: 2px solid
    ${({ type }) => (type == 'error' ? errorBorderColor : successBorderColor)};
  background: ${({ type }) =>
    type == 'error' ? errorBgColor : successBgColor};
`

const StyledHeading = styled.div`
  color: ${({ type }) => (type == 'error' ? errorColor : primaryColor)};
  font-family: ${vars.styles.fontFamilies.special};
  font-size: ${vars.styles.fontSizes.size5};
  margin-bottom: 0.6rem;
`

const StyledText = styled.div`
  font-size: ${vars.styles.fontSizes.size2};
  color: ${({ type }) => (type == 'error' ? errorTextColor : successTextColor)};
`

const PosedWrapper = posed(StyledWrapper)({
  shown: {
    applyAtStart: { display: 'block' },
    opacity: 1,
    scale: 1,
  },
  hidden: {
    applyAtEnd: { display: 'none' },
    opacity: 0,
    scale: 0.1,
  },
})
