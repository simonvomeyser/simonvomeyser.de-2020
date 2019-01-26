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
      <h1>About me</h1>
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
    width: 220px;
    height: auto;
  }
  margin-bottom: 2.5rem;
`

const Heading = styled.h1`
  font-size: ${vars.styles.fontSizes.size10};
  margin-bottom: 1rem;
  color: ${vars.styles.colors.neutral5};
  text-align: center;
`

const SuperHeading = styled.div`
  font-size: ${vars.styles.fontSizes.size8};
  color: ${vars.styles.colors.neutral3};
  margin-bottom: 0.5rem;
  text-align: center;
`

export default withIntl(IndexPage)
