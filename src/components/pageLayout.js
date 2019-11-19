import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'i18n'
import { vars } from 'util/vars'
import LanguageChooser from './LanguageChooser'
import NameAndProfession from './NameAndProfession'
import { on } from 'util/breakpoint'
import { StyledContainer } from '../styled-components'
import { FormattedMessage } from 'react-intl'

export default class PageLayout extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledWrapper>
          <StyledPageHeader>
            <NameAndProfession />
            <LanguageChooser />
          </StyledPageHeader>
          <StyledPageBody>{this.props.children}</StyledPageBody>
          <StyledPageFooter>
            <Link to="/legal-notice" activeClassName="active">
              <FormattedMessage id="legalNoticeTitle" />
            </Link>
            <Link to="/privacy-policy" activeClassName="active">
              <FormattedMessage id="privacyPolicyTitleShort" />
            </Link>
          </StyledPageFooter>
        </StyledWrapper>
      </StyledContainer>
    )
  }
}

const StyledWrapper = styled.div`
  padding: 1rem 2rem;
  background-color: ${vars.styles.colors.neutral1};
  max-width: 1100px;
  margin: 0 auto;

  ${on('onlyMobile')} {
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
  overflow: hidden;

  ${on('onlyMobile')} {
    padding: 2rem 1rem;
  }
`

const StyledPageFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;

  > * {
    color: ${vars.styles.colors.neutral3};
    margin-left: 0.5rem;
    &.active {
      color: ${vars.styles.colors.neutral5};
    }
  }

  ${on('onlyMobile')} {
    justify-content: center;
  }
`
