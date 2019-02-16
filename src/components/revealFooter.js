import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { FormattedMessage } from 'react-intl'
import { LegalSvg } from 'svg'
import { on } from 'util/breakpoint'

export default class revealFooter extends Component {
  render() {
    return (
      <StyledWrapper>
        <RevealFooterLegalLink>
          <RevealFooterLegalIcon>
            <LegalSvg />
          </RevealFooterLegalIcon>
          <FormattedMessage id="navigationLegal" />
        </RevealFooterLegalLink>
      </StyledWrapper>
    )
  }
}

const StyledWrapper = styled.div`
  z-index: ${vars.styles.zIndices.revealFooter};
  height: ${vars.styles.sizes.footerRevealHeight};
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 15px;

  ${on('onlyMobile')} {
    display: flex;
  }
`

const RevealFooterLegalIcon = styled.div`
  svg {
    width: 30px;
    height: 30px;
    path {
      fill: ${vars.styles.colors.neutral3};
    }
  }
  margin-bottom: 0.5rem;
`
const RevealFooterLegalLink = styled.div`
  font-size: 14px;
  color: ${vars.styles.colors.neutral3};
`
