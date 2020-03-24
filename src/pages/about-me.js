import React, { useEffect, useState } from 'react'
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl'
import PageLayout from 'src/components/PageLayout'
import AboutMeBackgroundSvg from 'src/svg/about-me-background.svg'
import { on } from 'src/util/breakpoint'
import styled from 'styled-components'
import AboutMeTellMeMore from '../components/AboutMeTellMeMore'
import ChangeTitle from '../components/ChangeTitle'
import { StyledPageHeading, StyledPrimaryButton } from '../styled-components'
import { vars } from '../util/vars'
import AboutMeImage from '../components/AboutMeImage'

export default function AboutMePage() {
  const [isTellMoreVisible, setIsTellMoreVisble] = useState(false)
  const [scroll, setScroll] = useState(null)

  useEffect(() => {
    const SmoothScroll = require('smooth-scroll')
    setScroll(new SmoothScroll)
  }, [])

  function showSecondText() {
    setIsTellMoreVisble(true);

    setTimeout(() => {
      scroll.animateScroll(
        document.getElementById('tell-me-more'),
        null,
        {
          speed: 500,
          speedAsDuration: true,
          header: '[data-mobile-navigation-scroll-adjust]',
        }
      )
    }, 100)
  }
  return (
    <PageLayout>
      <ChangeTitle translate additionalText="navigationAboutMe" />
      <StyledWrapper>
        <StyledQuoteBg />
        <StyledLeft>
          <StyledPageHeading>
            <FormattedMessage id="niceToMeetYou" />
          </StyledPageHeading>
          <StyledHeading>
            <FormattedHTMLMessage id="aboutMeOpener" />
          </StyledHeading>
          <StyledAboutMeFirstText>
            <FormattedHTMLMessage id="aboutMeFirstText" />
          </StyledAboutMeFirstText>
          <StyledButtonWrapper>
            <StyledPrimaryButton onClick={showSecondText}>
              <FormattedMessage id="aboutMeCta" />
            </StyledPrimaryButton>
          </StyledButtonWrapper>
        </StyledLeft>
        <StyledRight>
          <AboutMeImage />
        </StyledRight>
      </StyledWrapper>
      <div id="tell-me-more">
        <AboutMeTellMeMore visible={isTellMoreVisible} />
      </div>
    </PageLayout>
  )
}


const StyledWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
  z-index: ${vars.styles.zIndices.base};
  display: flex;

  ${on('onlyMobile')} {
    flex-wrap: wrap;
    margin-top: 0;
  }
`

const StyledQuoteBg = styled(AboutMeBackgroundSvg)`
  position: absolute;
  top: -4rem;
  z-index: -1;
  width: 300px;
  left: 0;
  ${on('onlyMobile')} {
    width: 90%;
  }
`

const StyledLeft = styled.div`
  z-index: 1;
  width: 60%;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${on('onlyMobile')} {
    width: 100%;
    padding-right: 0;
    margin-bottom: 1rem;
  }
`

const StyledRight = styled.div`
  z-index: 1;
  width: 40%;

  ${on('onlyMobile')} {
    width: 100%;
  }
`

const StyledHeading = styled.h2`
  font-size: ${vars.styles.fontSizes.size7};
  font-family: ${vars.styles.fontFamilies.special};
  color: ${vars.styles.colors.neutral5};
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.3;

  ${on('onlyMobile')} {
    margin-bottom: 2rem;
  }
`

const StyledAboutMeFirstText = styled.p`
  line-height: 1.5;
  padding: 0 1rem;
  margin-bottom: 3rem;

  ${on('onlyMobile')} {
    padding: 0;
    margin-bottom: 2rem;
  }
`

const StyledButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

