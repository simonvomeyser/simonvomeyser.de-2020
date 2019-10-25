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

class TellMeMoreAboutYou extends Component {
  render() {
    return (
      <>
        <PosedTellMeMoreArea
          pose={this.props.visible ? 'tellMeMoreVisible' : 'initial'}
        >
          <PosedTellMeMoreAreaChild>
            <StyledLine />
          </PosedTellMeMoreAreaChild>
          <PosedTellMeMoreAreaChild />
          <FormattedHTMLMessage id="aboutMeReadMoreHeading1" />
          <PosedTellMeMoreAreaChild>
            <StyledTextSection>
              <FormattedHTMLMessage id="aboutMeReadMoreText1" />
            </StyledTextSection>
            <StyledLine />
          </PosedTellMeMoreAreaChild>
          <PosedTellMeMoreAreaChild>
            <StyledTellMeMoreButtons>
              <StyledSecondaryButtonLink to="/projects">
                schau dir Projekte an{' '}
              </StyledSecondaryButtonLink>
              <StyledPrimaryButtonLink to="/contact">
                schreib mir einfach
              </StyledPrimaryButtonLink>
            </StyledTellMeMoreButtons>
          </PosedTellMeMoreAreaChild>
        </PosedTellMeMoreArea>
      </>
    )
  }
}

export default TellMeMoreAboutYou

const StyledTellMeMoreArea = styled.div`
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

const StyledTellMeMoreButtons = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a + a {
    margin-left: 1rem;
  }
  ${on('onlyMobile')} {
    a + a {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`

const StyledLine = styled.div`
  max-width: 300px;
  height: 3px;
  background-color: ${vars.styles.colors.accent4};
  padding: 0 1rem;
  margin: 0 auto 2rem auto;
`
const StyledTextSection = styled.div`
  p {
    line-height: 150%;
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

const PosedTellMeMoreAreaChild = posed.div({
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

const PosedTellMeMoreArea = posed(StyledTellMeMoreArea)({
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
