import React, { useContext } from 'react'
import { withIntl } from 'src/i18n'
import Layout from 'src/components/Layout'
import BigFrontpageLogo from 'src/components/BigFrontpageLogo'
import styled from 'styled-components'
import { vars } from 'src/util/vars'
import { on } from 'src/util/breakpoint'
import SplitText from 'react-pose-text'
import posed from 'react-pose'
import languageContext from '../i18n/languageContext'
import { FormattedMessage } from 'react-intl'

export default function () {
  const { language, setLanguage } = useContext(languageContext);

  return (
    <Layout delayInitialAnimation>
      <StyledWrapper>
        current lang {language} < br />
        <button onClick={() => setLanguage('de')}>change it</button>
        <FormattedMessage id="landingLearnMore" />

        <StyledLogoWrapper>
          <BigFrontpageLogo />
        </StyledLogoWrapper>
        <StyledSuperHeading>
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            web development
            </SplitText>
        </StyledSuperHeading>
        <StyledHeading>
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            Simon vom Eyser
            </SplitText>
        </StyledHeading>
      </StyledWrapper>
    </Layout>
  )
}

const StyledWrapper = styled.div`
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
const StyledLogoWrapper = styled.div`
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

const StyledHeading = styled.h1`
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

const StyledSuperHeading = styled.div`
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
