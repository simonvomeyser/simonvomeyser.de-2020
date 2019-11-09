import React, { Component } from 'react'
import { StyledTextSection } from '../styled-components'
import styled from 'styled-components'
import { vars } from '../util/vars'
import posed from 'react-pose'
import { on } from 'util/breakpoint'
import { FormattedHTMLMessage } from 'react-intl'
import { LogoSvg } from '../svg'
import SocialLinks from '../components/SocialLinks'
import { StyledContainer } from '../styled-components/Container'

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
            <StyledContainer small>
              <StyledTextSection>
                <FormattedHTMLMessage
                  id="aboutMeReadMoreText1"
                  values={{ yearsAsDeveloper }}
                />
              </StyledTextSection>
            </StyledContainer>
            <FormattedHTMLMessage id="aboutMeReadMoreHeading2" />
            <StyledTextSection>
              <StyledContainer small>
                <FormattedHTMLMessage id="aboutMeReadMoreText2" />
              </StyledContainer>
            </StyledTextSection>
            <SocialLinks />
          </PosedFadeInAreaChild>
        </PosedFadeInArea>
      </>
    )
  }
}

export default AboutMeTellMeMore

const StyledFadeInArea = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
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
  margin: 0 auto 3rem auto;
`

const StyledLogoSeperator = styled.div`
  svg {
    width: 100%;
    height: auto;
  }

  width: 30px;
  margin: 0 auto;
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
