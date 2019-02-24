import React from 'react'
import { withIntl } from 'i18n'
import { FormattedMessage } from 'react-intl'
import Layout from 'components/Layout'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { on } from 'util/breakpoint'
import LogoIcon from 'svg/logo.svg'

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <SuperHeading>
        <FormattedMessage id="landingTitle2" />
      </SuperHeading>
      <Heading>
        <FormattedMessage id="landingTitle1" />
      </Heading>
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${on('onlyMobile')} {
    min-height: calc(100vh - ${vars.styles.sizes.navigationMobileHeight});
  }
`

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
  margin-bottom: 1rem;
  color: ${vars.styles.colors.neutral5};
  text-align: center;

  ${on('onlyMobile')} {
    font-size: ${vars.styles.fontSizes.size9};
  }
`

const SuperHeading = styled.div`
  font-size: ${vars.styles.fontSizes.size8};
  color: ${vars.styles.colors.neutral3};
  margin-bottom: 0.5rem;
  text-align: center;

  ${on('onlyMobile')} {
    font-size: ${vars.styles.fontSizes.size7};
  }
`

export default withIntl(IndexPage)
