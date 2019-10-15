import React, { Component } from 'react'
import { withIntl } from 'i18n'
import Layout from 'components/Layout'
import BigFrontpageLogo from 'components/BigFrontpageLogo'
import FunnyBouncer from 'components/FunnyBouncer'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { on } from 'util/breakpoint'
import SplitText from 'react-pose-text'
import posed from 'react-pose'
import { StyledPrimaryButtonLink } from '../styled-components'

class IndexPage extends Component {
  render() {
    return (
      <Layout delayInitialAnimation>
        <PageTransition>
          <Wrapper>
            <LogoWrapper>
              <BigFrontpageLogo />
            </LogoWrapper>
            <SuperHeading>
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                web development
              </SplitText>
            </SuperHeading>
            <Heading>
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                Simon vom Eyser
              </SplitText>
            </Heading>
            <PosedMoreAboutMeWrapper initialPose="hidden">
              <StyledPrimaryButtonLink to="/about-me">
                learn more about me
              </StyledPrimaryButtonLink>
            </PosedMoreAboutMeWrapper>
          </Wrapper>
        </PageTransition>
      </Layout>
    )
  }
}

const PageTransition = posed.div({
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0, beforeChildren: true },
})

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  ${on('onlyMobile')} {
    min-height: calc(100vh - ${vars.styles.sizes.navigationMobileHeight});
  }
`
const MoreAboutMeWrapper = styled.div`
  margin-top: 1rem;
  animation: pulse 2.3s infinite;
  animation-delay: 10s;
  animation-timing-function: ease-in-out;
`

const PosedMoreAboutMeWrapper = posed(MoreAboutMeWrapper)({
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    delay: 7000,
    transition: {
      scale: { type: 'spring', stiffness: 300, duration: 1000 },
    },
    scale: 1,
  },
})

const LogoWrapper = styled.div`
  svg {
    width: 220px;
    height: auto;
  }
  margin-bottom: 2.5rem;

  ${on('onlyMobile')} {
    svg {
      width: 150px;
    }
    margin-bottom: 1.5rem;
  }
`

const Heading = styled.h1`
  font-size: ${vars.styles.fontSizes.size10};
  font-family: ${vars.styles.fontFamilies.special};
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${vars.styles.colors.neutral5};
  text-align: center;

  ${on('onlyMobile')} {
    font-size: ${vars.styles.fontSizes.size9};
  }
`

const SuperHeading = styled.div`
  font-size: ${vars.styles.fontSizes.size8};
  font-weight: 500;
  font-family: ${vars.styles.fontFamilies.special};
  color: ${vars.styles.colors.neutral3};
  margin-bottom: 0.5rem;
  text-align: center;

  ${on('onlyMobile')} {
    font-size: ${vars.styles.fontSizes.size7};
  }
`

// Animating in chars
const charPoses = {
  enter: {
    opacity: 1,
    delay: ({ charIndex }) => 2000 + charIndex * 50,
  },
  exit: { opacity: 0 },
}

export default withIntl(IndexPage)
