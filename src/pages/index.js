import React from 'react'
import { withIntl } from '../i18n'
import { FormattedMessage } from 'react-intl'
import Layout from '../components/layout'
import styled from 'styled-components'
import { vars } from '../util/vars'
import LogoIcon from '../svg/logo.svg'

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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`

const LogoWrapper = styled.div`
  svg {
    width: 25vw;
  }
  margin-bottom: 2rem;
`

const Heading = styled.h1`
  font-size: ${vars.styles.fontSizes.size11};
  margin-bottom: 1rem;
  color: ${vars.styles.colors.neutral6};
  text-align: center;
`

const SuperHeading = styled.div`
  font-size: ${vars.styles.fontSizes.size8};
  color: ${vars.styles.colors.neutral4};
  margin-bottom: 1rem;
  text-align: center;
`

export default withIntl(IndexPage)
