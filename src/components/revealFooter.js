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
        <RevealFooterName>SIMON VOM EYSER</RevealFooterName>
        <RevealFooterProfession>web development</RevealFooterProfession>
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