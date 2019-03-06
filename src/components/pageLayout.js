import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import LanguageChooser from './LanguageChooser'
import NameAndProfession from './NameAndProfession'
import RevealFooter from './RevealFooter'
import { on } from 'util/breakpoint'

export default class PageLayout extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledPageHeader>
          <NameAndProfession />
          <LanguageChooser />
        </StyledPageHeader>
        <StyledPageBody>{this.props.children}</StyledPageBody>
        <StyledPageFooter>footer</StyledPageFooter>
        <RevealFooter />
      </StyledWrapper>
    )
  }
}

const StyledWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem 2rem;
  background-color: ${vars.styles.colors.neutral1};
  min-height: 100vh;

  ${on('onlyMobile')} {
    min-height: calc(100vh - ${vars.styles.sizes.navigationMobileHeight});
    padding: 1rem;
    margin-bottom: ${vars.styles.sizes.footerRevealHeight};
  }
`

const StyledPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  ${on('onlyMobile')} {
    display: none;
  }
`
const StyledPageBody = styled.div`
  padding: 2rem;
  margin-bottom: 1rem;
  background: ${vars.styles.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-height: 100vh;

  ${on('onlyMobile')} {
    margin-bottom: 0;
    min-height: calc(
      100vh - ${vars.styles.sizes.navigationMobileHeight} - 2rem
    );
  }
`

const StyledPageFooter = styled.div`
  display: flex;
  justify-content: flex-end;

  ${on('onlyMobile')} {
    display: none;
  }
`
