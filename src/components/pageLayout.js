import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from '../util/vars'

export default class PageLayout extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledPageHeader>
          <div>Simon vom Eyser - web development</div>
          <div>lang</div>
        </StyledPageHeader>
        <StyledPageBody>{this.props.children}</StyledPageBody>
        <StyledPageFooter>footer</StyledPageFooter>
      </StyledWrapper>
    )
  }
}

const StyledWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
`

const StyledPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`
const StyledPageBody = styled.div`
  min-height: 100vh;
  padding: 2rem;
  margin-bottom: 1rem;
  background: ${vars.styles.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const StyledPageFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`
