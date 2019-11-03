import React, { Component } from 'react'
import {
  StyledPrimaryButtonLink,
  StyledSecondaryButtonLink,
} from '../styled-components'
import styled from 'styled-components'
import { vars } from '../util/vars'
import posed from 'react-pose'
import { on } from 'util/breakpoint'
import { withIntl } from 'i18n'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { LogoSvg } from '../svg'

class AboutMeTellMeMore extends Component {
  render() {
    const yearsAsDeveloper = new Date(Date.now()).getFullYear() - 2011
    return (
      <>
        <PosedFadeInArea
          pose={this.props.visible ? 'tellMeMoreVisible' : 'initial'}
        >
          <PosedFadeInAreaChild>
            <StyledLine />
          </PosedFadeInAreaChild>
          <PosedFadeInAreaChild>
            <FormattedHTMLMessage id="aboutMeReadMoreHeading1" />
          </PosedFadeInAreaChild>
          <PosedFadeInAreaChild>
            <StyledTextSection>
              <FormattedHTMLMessage
                id="aboutMeReadMoreText1"
                values={{ yearsAsDeveloper }}
              />
            </StyledTextSection>
            <FormattedHTMLMessage id="aboutMeReadMoreHeading2" />
            <StyledTextSection>
              <FormattedHTMLMessage id="aboutMeReadMoreText2" />
            </StyledTextSection>
            <StyledLogoSeperator>
              <LogoSvg />
            </StyledLogoSeperator>
          </PosedFadeInAreaChild>
        </PosedFadeInArea>
      </>
    )
  }
}

export default AboutMeTellMeMore

const StyledFadeInArea = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  max-width: 800px;
  h2 {
    font-size: ${vars.styles.fontSizes.size7};
    font-family: ${vars.styles.fontFamilies.special};
    color: ${vars.styles.colors.neutral5};
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2rem;
  }
`

const StyledLine = styled.div`
  max-width: 300px;
  height: 3px;
  background-color: ${vars.styles.colors.accent4};
  padding: 0 1rem;
  margin: 0 auto 2rem auto;
`

const StyledLogoSeperator = styled.div`
  svg {
    width: 100%;
    height: auto;
  }

  width: 30px;
  margin: 0 auto;
`

const StyledTextSection = styled.div`
  margin-bottom: 3rem;

  p {
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  strong {
    background: ${vars.styles.colors.accent1};
    color: ${vars.styles.colors.accent4};
    padding: 2px 4px;
  }

  a {
    color: inherit;
    display: inline-block;
    position: relative;
    transition: 0.3s color ease-in-out;

    &:after {
      transition: 0.3s width ease-in-out;
      background: ${vars.styles.colors.accent3};
      display: block;
      content: ' ';
      position: absolute;
      bottom: 0;
      left: 50%;
      height: 3px;
      width: calc(100% + 5px);
      transform: translateX(-50%);
    }

    &:hover {
      color: ${vars.styles.colors.accent3};

      &:after {
        width: calc(100%);
      }
    }
  }
`

const PosedFadeInAreaChild = posed.div({
  initial: {
    opacity: 0,
    y: 150,
  },
  tellMeMoreVisible: {
    opacity: 1,
    duration: 2000,
    y: 0,
  },
})

const PosedFadeInArea = posed(StyledFadeInArea)({
  initial: {
    opacity: 0,
    display: 'none',
  },
  tellMeMoreVisible: {
    delay: 700,
    delayChildren: 300,
    staggerChildren: 500,
    applyAtStart: { display: 'block' },
    opacity: 1,
  },
})
