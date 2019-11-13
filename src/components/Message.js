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
const errorHeadingColor = errorColor

const successBorderColor = vars.styles.colors.accent3
const successBgColor = vars.styles.colors.accent1
const successTextColor = vars.styles.colors.accent4
const successHeadingColor = vars.styles.colors.accent5

const StyledWrapper = styled.div`
  position: relative;
  font-family: ${vars.styles.fontFamilies.special};
  padding: 1rem;
  border: 2px solid
    ${({ type }) => (type == 'error' ? errorBorderColor : successBorderColor)};
  background: ${({ type }) =>
    type == 'error' ? errorBgColor : successBgColor};
`

const StyledHeading = styled.div`
  color: ${({ type }) =>
    type == 'error' ? errorHeadingColor : successHeadingColor};
  font-size: ${vars.styles.fontSizes.size};
  margin-bottom: 0.25rem;
`

const StyledText = styled.div`
  font-size: ${vars.styles.fontSizes.size4};
  line-height: 1.5;
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
