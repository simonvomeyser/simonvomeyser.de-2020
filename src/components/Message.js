import React, { Component } from 'react'
import styled from 'styled-components'
import { vars, errorColor } from '../util/vars'
import posed from 'react-pose'

export default class Message extends Component {
  render() {
    const { shown, heading, text } = this.props
    return (
      <PosedWrapper pose={shown ? 'shown' : 'hidden'}>
        <StyledHeading>{heading}</StyledHeading>
        <StyledText>{text}</StyledText>
      </PosedWrapper>
    )
  }
}

const StyledWrapper = styled.div`
  position: relative;
  padding: 1rem;
  border: 2px solid ${vars.styles.colors.secondaryAccent3};
  background: ${vars.styles.colors.secondaryAccent1};
`

const StyledHeading = styled.div`
  color: ${errorColor};
  font-family: ${vars.styles.fontFamilies.special};
  font-size: ${vars.styles.fontSizes.size5};
  margin-bottom: 0.6rem;
`

const StyledText = styled.div`
  font-size: ${vars.styles.fontSizes.size2};
  color: ${vars.styles.colors.secondaryAccent2};
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
