import React, { Component } from 'react'
import styled from 'styled-components'
import { vars, errorColor } from '../util/vars'

export default class Message extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledHeading>Uh, oh, something happened!</StyledHeading>
        <StyledText>
          E-Mail should be an valid email. That's a shocker, right?
        </StyledText>
      </StyledWrapper>
    )
  }
}

const StyledWrapper = styled.div`
  position: relative;
  padding: 1rem;
  border: 1px solid ${vars.styles.colors.secondaryAccent3};
  background: ${vars.styles.colors.secondaryAccent1};
`

const StyledHeading = styled.div`
  color: ${errorColor};
  font-family: ${vars.styles.fontFamilies.special};
  font-size: ${vars.styles.fontSizes.size5};
  margin-bottom: 0.75rem;
`

const StyledText = styled.div`
  font-size: ${vars.styles.fontSizes.size2};
  color: ${vars.styles.colors.secondaryAccent2};
`
