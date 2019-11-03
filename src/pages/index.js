import React, { Component } from 'react'
import { withIntl } from 'i18n'
import Layout from 'components/Layout'
import BigFrontpageLogo from 'components/BigFrontpageLogo'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { on } from 'util/breakpoint'
import SplitText from 'react-pose-text'
import posed from 'react-pose'
import { StyledPrimaryButtonLink } from '../styled-components'
import { FormattedMessage } from 'react-intl'
import { ArrowDown } from 'svg'
import Link from 'i18n/Link'

class IndexPage extends Component {
  Arr
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
            <Link to="/about-me">
              <PosedMoreAboutMeWrapper initialPose="hidden">
                <ArrowDown />
              </PosedMoreAboutMeWrapper>
            </Link>
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
  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: translateY(25%) scale3d(1.1, 1.1, 1.1);
      opacity: 0.5;
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
  margin-top: 2rem;
  animation: pulse 2s infinite;
  animation-delay: 10s;
  animation-timing-function: ease-in-out;
  svg {
    width: 40px;
  }
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
