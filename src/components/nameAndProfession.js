import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { FormattedMessage } from 'react-intl'

export default class NameAndBrand extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledName>Simon vom Eyser</StyledName>
        <StyledProfession>
          <FormattedMessage id="myProfession" />
        </StyledProfession>
      </StyledWrapper>
    )
  }
}

const StyledWrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: ${vars.styles.fontSizes.size3};
  display: flex;
  align-items: center;
`
const StyledName = styled.span`
  color: ${vars.styles.colors.neutral5};
  font-weight: bold;
  &::after {
    content: '-';
    margin: 0 0.25rem;
  }
`
const StyledProfession = styled.span`
  font-weight: normal;
  color: ${vars.styles.colors.neutral3};
`
