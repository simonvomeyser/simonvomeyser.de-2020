import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import LanguageChooser from './languageChooser'
import NameAndProfession from './nameAndProfession'
import { on } from 'util/breakpoint'
import { LegalSvg } from 'svg'
import { FormattedMessage } from 'react-intl'

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
        <StyledMobileRevealFooter>
          <RevealFooterName>SIMON VOM EYSER</RevealFooterName>
          <RevealFooterProfession>web development</RevealFooterProfession>
          <RevealFooterLegalLink>
            <RevealFooterLegalIcon>
              <LegalSvg />
            </RevealFooterLegalIcon>
            <FormattedMessage id="navigationLegal" />
          </RevealFooterLegalLink>
        </StyledMobileRevealFooter>
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
  margin-bottom: 200px;

  ${on('onlyMobile')} {
    min-height: calc(100vh - ${vars.styles.sizes.navigationMobileHeight});
    padding: 1rem;
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

const StyledMobileRevealFooter = styled.div`
  z-index: -1;
  height: 200px;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  color: ${vars.styles.colors.neutral3};
  background: ${vars.styles.colors.neutral6};
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${on('onlyMobile')} {
    display: flex;
  }
`

const RevealFooterName = styled.div`
  font-size: 28px;
  color: ${vars.styles.colors.neutral2};
  font-family: 'Open sans';
  margin-bottom: 0.25rem;
`
const RevealFooterProfession = styled.div`
  font-size: 18px;
  font-family: 'Open sans';
  margin-bottom: 2rem;
`
const RevealFooterLegalIcon = styled.div`
  svg {
    width: 30px;
    height: 30px;
  }
  margin-bottom: 0.25rem;
`
const RevealFooterLegalLink = styled.div`
  font-size: 14px;
`
